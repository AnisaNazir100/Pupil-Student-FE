import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
  useMediaQuery,
  Stack,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  DialogTitle,
} from "@mui/material";
import { ENV_START, ENV_END, DAYS } from "./constants";
import {
  useTimeNowMinutes,
  useTodayIndex,
  mapApiDayToKey,
  toMinutes,
} from "./utils";
import { FetchTimeTable } from "api/timetable";
import { COLORS } from "./constants";
import { rangeArray } from "./utils";
import { minutesToLabel } from "./utils";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";

function useTimeTableData(timelineStart, timelineEnd) {
  const startMin = toMinutes(timelineStart);
  const endMin = toMinutes(timelineEnd);
  const totalMin = Math.max(1, endMin - startMin);

  const [timeTable, setTimeTable] = useState();
  useEffect(() => {
    (async () => {
      const fetchedTimeTable = await FetchTimeTable();
      if (Array.isArray(fetchedTimeTable)) setTimeTable(fetchedTimeTable);
      else setTimeTable([]);
    })();
  }, []);

  const itemsByDay = useMemo(() => {
    const base = Object.fromEntries(DAYS.map((d) => [d.key, []]));
    if (!Array.isArray(timeTable)) return base;

    const subjectColorMap = new Map();
    let colorIdx = 0;
    const getColorForSubject = (subId) => {
      if (!subjectColorMap.has(subId)) {
        subjectColorMap.set(subId, COLORS[colorIdx % COLORS.length]);
        colorIdx += 1;
      }
      return subjectColorMap.get(subId);
    };

    for (const rec of timeTable) {
      const dayKey = mapApiDayToKey(rec?.day);
      const classId = String(rec?.classId ?? rec?.class?.id ?? "");
      const sectionId = String(rec?.sectionId ?? rec?.section?.id ?? "");
      const subjectId = String(rec?.subjectId ?? rec?.subject?.id ?? "");
      const teacherId = String(rec?.teacherId ?? rec?.teacher?.id ?? "");

      const className = rec?.class?.name || classId || "Class";
      const sectionName = rec?.section?.name || sectionId || "A";
      const subjectName = rec?.subject?.name || subjectId || "Subject";
      const teacherName =
        [rec?.teacher?.user?.firstName, rec?.teacher?.user?.lastName]
          .filter(Boolean)
          .join(" ")
          .trim() ||
        rec?.teacher?.user?.username ||
        rec?.teacher?.user?.email ||
        (teacherId ? `User ${teacherId}` : "Teacher");

      const from = rec?.startTimeMinutes ?? toMinutes(rec?.startTimeslot);
      const to = rec?.endTimeMinutes ?? toMinutes(rec?.endTimeslot);

      const clampedFrom = Math.max(startMin, Math.min(endMin, from));
      const clampedTo = Math.max(startMin, Math.min(endMin, to));
      if (!(clampedTo > clampedFrom)) continue;

      const color = getColorForSubject(subjectId || subjectName);

      base[dayKey].push({
        id:
          rec?.id ||
          `${dayKey}_${classId}_${sectionId}_${subjectId}_${from}_${to}`,
        classId,
        sectionId,
        className,
        sectionName,
        subjectId,
        subjectName,
        teacherId,
        teacherName,
        from: clampedFrom,
        to: clampedTo,
        color,
      });
    }

    for (const k of Object.keys(base)) {
      base[k] = base[k].sort((a, b) => a.from - b.from);
    }

    return base;
  }, [timeTable, startMin, endMin]);

  return { itemsByDay, startMin, endMin, totalMin };
}

function DesktopTimeTable({
  dayIndex,
  setDayIndex,
  todayIdx,
  itemsByDay,
  startMin,
  endMin,
  totalMin,
  onItemClick = () => {},
  pxPerMinute = 4,
  rowHeight = 72,
}) {
  const activeDayKey = DAYS[dayIndex].key;

  const timelineWidthPx = Math.max(1, totalMin) * pxPerMinute;
  const toLeftPx = (m) => (m - startMin) * pxPerMinute;
  const toWidthPx = (from, to) => Math.max(0, to - from) * pxPerMinute;

  const HEADER_H = 72;
  const ROW_H = rowHeight;

  const visibleRows = useMemo(() => {
    const map = new Map();
    for (const it of itemsByDay[activeDayKey] || []) {
      const key = `${it.classId}|${it.sectionId}`;
      if (!map.has(key)) {
        map.set(key, {
          key,
          classId: it.classId,
          className: it.className,
          sectionId: it.sectionId,
          sectionName: it.sectionName,
        });
      }
    }
    return Array.from(map.values());
  }, [itemsByDay, activeDayKey]);

  const nowMin = useTimeNowMinutes();
  const isTodayTab = DAYS[todayIdx]?.key === activeDayKey;
  const clampedNow = Math.min(endMin, Math.max(startMin, nowMin));
  const nowLeftPx = toLeftPx(clampedNow);

  const timelineScrollRef = useRef(null);

  const headerStep = 30;
  const rowStep = 30;

  return (
    <Box>
      <Paper variant="outlined" sx={{ p: 2 }}>
        {visibleRows.length === 0 ? (
          <Box sx={{ p: 6, textAlign: "center", color: "text.secondary" }}>
            <Stack spacing={1} alignItems="center">
              <Typography variant="body2" color="text.secondary">
                No entries for <strong>{DAYS[dayIndex].label}</strong>.
              </Typography>
            </Stack>
          </Box>
        ) : (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "170px 1fr",
              borderTop: "1px solid",
              borderColor: "grey.200",
              bgcolor: "grey.50",
            }}
          >
            <Box>
              <Box
                sx={{
                  height: HEADER_H,
                  display: "flex",
                  alignItems: "center",
                  p: 1,
                  fontWeight: 600,
                  borderRight: "1px solid",
                  borderColor: "grey.200",
                  bgcolor: "grey.50",
                }}
              >
                Class / Section
              </Box>

              {visibleRows.map((r) => (
                <Box
                  key={`label-${r.key}`}
                  sx={{
                    height: ROW_H,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    p: 1.5,
                    borderTop: "1px solid",
                    borderRight: "1px solid",
                    borderColor: "grey.100",
                    bgcolor: "background.paper",
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 700 }}>
                    {r.className}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Section {r.sectionName}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box
              ref={timelineScrollRef}
              sx={{
                overflowX: "auto",
                border: "1px solid",
                borderColor: "grey.200",
                bgcolor: "background.paper",
                px: 2.5,
                pb: 1,
              }}
            >
              <Box sx={{ width: timelineWidthPx }}>
                <Box
                  sx={{
                    position: "relative",
                    height: HEADER_H,
                    p: 0,
                    pt: 3.5,
                    pb: 3,
                  }}
                >
                  <Box sx={{ position: "absolute", inset: 0 }}>
                    {rangeArray(
                      Math.ceil(startMin / 60) * 60,
                      endMin,
                      headerStep
                    ).map((m) => (
                      <Box
                        key={m}
                        sx={{
                          position: "absolute",
                          left: toLeftPx(m),
                          top: 22,
                          bottom: 14,
                        }}
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            borderLeft: "1px dashed",
                            borderColor: "divider",
                            opacity: 0.7,
                          }}
                        />
                        <Typography
                          variant="caption"
                          sx={{
                            position: "absolute",
                            top: -18,
                            left: 0,
                            transform: "translateX(-50%)",
                            color: "text.secondary",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {minutesToLabel(m)}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  <Box
                    sx={{
                      position: "relative",
                      height: 14,
                      borderRadius: 999,
                      bgcolor: "grey.200",
                      overflow: "hidden",
                    }}
                  >
                    {isTodayTab && (
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          width: nowLeftPx,
                          bgcolor: "primary.main",
                          borderRadius: 999,
                        }}
                      />
                    )}
                  </Box>

                  {isTodayTab && (
                    <>
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          bottom: 0,
                          left: nowLeftPx,
                          borderLeft: "2px dotted",
                          borderColor: "primary.main",
                          pointerEvents: "none",
                          zIndex: 2,
                        }}
                      />
                    </>
                  )}

                  {isTodayTab && (
                    <Typography
                      variant="caption"
                      sx={{
                        position: "absolute",
                        left: Math.max(0, nowLeftPx - 16),
                        top: 44,
                        color: "primary.main",
                        fontWeight: 700,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {minutesToLabel(clampedNow)}
                    </Typography>
                  )}
                </Box>

                {visibleRows.map((r) => {
                  const rowItems = (itemsByDay[activeDayKey] || []).filter(
                    (i) =>
                      i.classId === r.classId && i.sectionId === r.sectionId
                  );

                  return (
                    <Box
                      key={`row-${r.key}`}
                      sx={{
                        position: "relative",
                        height: ROW_H,
                        borderTop: "1px solid",
                        borderColor: "grey.100",
                      }}
                    >
                      {rangeArray(
                        Math.ceil(startMin / 60) * 60,
                        endMin,
                        rowStep
                      ).map((m) => (
                        <Box
                          key={`grid-${r.key}-${m}`}
                          sx={{
                            position: "absolute",
                            left: toLeftPx(m),
                            top: 0,
                            bottom: 0,
                            borderLeft: "1px dashed rgba(0,0,0,0.06)",
                          }}
                        />
                      ))}

                      {isTodayTab && (
                        <Box
                          sx={{
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            left: nowLeftPx,
                            borderLeft: "2px dotted",
                            borderColor: "primary.main",
                            pointerEvents: "none",
                            zIndex: 3,
                          }}
                        />
                      )}

                      {rowItems.map((it) => {
                        const left = toLeftPx(it.from);
                        const width = toWidthPx(it.from, it.to);

                        return (
                          <Box
                            key={it.id}
                            onClick={() =>
                              onItemClick({
                                ...it,
                                dayLabel: DAYS[dayIndex].label,
                              })
                            }
                            sx={{
                              position: "absolute",
                              top: 8,
                              left,
                              width,
                              height: ROW_H - 16,
                              bgcolor: it.color,
                              color: "#fff",
                              borderRadius: 1.5,
                              display: "grid",
                              gridTemplateRows: "auto auto auto",
                              alignItems: "center",
                              px: 1,
                              py: 0.5,
                              boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
                              cursor: "pointer",
                              overflow: "hidden",
                              "&:hover": { opacity: 0.95 },
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{ fontWeight: 700, lineHeight: 1.2 }}
                              noWrap
                            >
                              {it.subjectName}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{ opacity: 0.95, lineHeight: 1.2 }}
                              noWrap
                            >
                              {it.teacherName}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{ opacity: 0.9, lineHeight: 1.2 }}
                              noWrap
                            >
                              {minutesToLabel(it.from)}–{minutesToLabel(it.to)}
                            </Typography>
                          </Box>
                        );
                      })}
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        )}
      </Paper>
    </Box>
  );
}
function Row({ label, value }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "110px 1fr",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        {label}
      </Typography>
      <Typography variant="body2" sx={{ fontWeight: 600 }}>
        {value || "—"}
      </Typography>
    </Box>
  );
}
function ItemDetailsDialog({ open, onClose, item, dayLabel }) {
  if (!item) return null;
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs">
      <DialogTitle>Class Details</DialogTitle>
      <DialogContent dividers>
        <Stack spacing={1.25}>
          <Row label="Day" value={dayLabel} />
          <Row label="Class" value={item.className} />
          <Row label="Section" value={item.sectionName} />
          <Row label="Subject" value={item.subjectName} />
          <Row label="Teacher" value={item.teacherName} />
          <Row
            label="Time"
            value={`${minutesToLabel(item.from)} – ${minutesToLabel(item.to)}`}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained" size="small">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
function MobileTimeTable({ dayIndex, setDayIndex, todayIdx, itemsByDay }) {
  const activeDayKey = DAYS[dayIndex].key;
  const nowMin = useTimeNowMinutes();
  const isTodayTab = DAYS[todayIdx]?.key === activeDayKey;

  const rows = useMemo(() => {
    const map = new Map();
    for (const it of itemsByDay[activeDayKey] || []) {
      const key = `${it.classId}|${it.sectionId}`;
      if (!map.has(key)) {
        map.set(key, {
          key,
          className: it.className,
          sectionName: it.sectionName,
          items: [],
        });
      }
      map.get(key).items.push(it);
    }

    return Array.from(map.values()).sort(
      (a, b) => (a.items[0]?.from ?? 0) - (b.items[0]?.from ?? 0)
    );
  }, [itemsByDay, activeDayKey]);

  if (rows.length === 0) {
    return (
      <Box sx={{ p: 4, textAlign: "center", color: "text.secondary" }}>
        <Typography variant="body2">
          No entries for <strong>{DAYS[dayIndex].label}</strong>.
        </Typography>
      </Box>
    );
  }

  return (
    <Stack spacing={2}>
      {rows.map((row) => (
        <Card
          key={row.key}
          variant="outlined"
          sx={{
            borderRadius: 2,
            overflow: "hidden",
            borderColor: "divider",
          }}
        >
          <Box
            sx={{
              px: 2,
              py: 1.25,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              bgcolor: "grey.50",
              borderBottom: "1px solid",
              borderColor: "divider",
            }}
          >
            <Box sx={{ minWidth: 0 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }} noWrap>
                {row.className}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Section {row.sectionName}
              </Typography>
            </Box>
            <Chip
              size="small"
              label={DAYS[dayIndex].label}
              sx={{ fontWeight: 600 }}
              variant={isTodayTab ? "filled" : "outlined"}
              color={isTodayTab ? "primary" : "default"}
            />
          </Box>

          <CardContent sx={{ pb: 1.5 }}>
            <Stack spacing={1.25}>
              {row.items.map((it) => {
                const isNow = isTodayTab && nowMin >= it.from && nowMin < it.to;

                return (
                  <Box
                    key={it.id}
                    sx={{
                      position: "relative",
                      border: "1px solid",
                      borderColor: isNow ? "primary.main" : "divider",
                      bgcolor: isNow ? "primary.main" : "background.paper",
                      color: isNow ? "primary.contrastText" : "text.primary",
                      p: 1.25,
                      borderRadius: 1.5,
                      display: "grid",
                      gridTemplateColumns: "12px 1fr auto",
                      gap: 1.25,
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: 12,
                        height: "100%",
                        borderRadius: 999,
                        bgcolor: isNow
                          ? "primary.contrastText"
                          : it.color || "divider",
                      }}
                    />
                    <Box sx={{ minWidth: 0 }}>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 700 }}
                        noWrap
                        title={`${it.subjectName}${it.teacherName ? ` — ${it.teacherName}` : ""}`}
                      >
                        {it.subjectName}
                      </Typography>

                      <Stack
                        direction="row"
                        spacing={1.25}
                        alignItems="center"
                        sx={{ mt: 0.25, opacity: 0.85 }}
                      >
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                          sx={{ minWidth: 0 }}
                        >
                          <AccessTimeRoundedIcon sx={{ fontSize: 16 }} />
                          <Typography variant="caption" noWrap>
                            {minutesToLabel(it.from)}–{minutesToLabel(it.to)}
                          </Typography>
                        </Stack>

                        {it.teacherName && (
                          <Stack
                            direction="row"
                            spacing={0.5}
                            alignItems="center"
                            sx={{ minWidth: 0 }}
                          >
                            <SchoolRoundedIcon sx={{ fontSize: 16 }} />
                            <Typography variant="caption" noWrap>
                              {it.teacherName}
                            </Typography>
                          </Stack>
                        )}
                      </Stack>
                    </Box>
                    <Box>
                      {isNow ? (
                        <Chip
                          size="small"
                          label="Now"
                          color="secondary"
                          variant="filled"
                          sx={{ fontWeight: 700 }}
                        />
                      ) : (
                        <Chip
                          size="small"
                          label="Scheduled"
                          variant="outlined"
                          sx={{ fontWeight: 600 }}
                        />
                      )}
                    </Box>
                  </Box>
                );
              })}
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}

function useFilteredItemsByDay(itemsByDay, classId, sectionId) {
  return useMemo(() => {
    if (!classId || !sectionId) return itemsByDay;
    const out = {};
    for (const k of Object.keys(itemsByDay || {})) {
      out[k] = (itemsByDay[k] || []).filter(
        (it) =>
          String(it.classId) === String(classId) &&
          String(it.sectionId) === String(sectionId)
      );
    }
    return out;
  }, [itemsByDay, classId, sectionId]);
}
function getStudentIdsFromStorage() {
  try {
    const raw = sessionStorage.getItem("user");
    if (!raw) return { classId: "", sectionId: "" };
    const j = JSON.parse(raw);

    const classId =
      j?.classId ??
      j?.class?.id ??
      j?.student?.classId ??
      j?.student?.class?.id ??
      "";

    const sectionId =
      j?.sectionId ??
      j?.section?.id ??
      j?.student?.sectionId ??
      j?.student?.section?.id ??
      "";

    return {
      classId: String(classId || ""),
      sectionId: String(sectionId || ""),
    };
  } catch {
    return { classId: "", sectionId: "" };
  }
}
export default function StudentTimeTable({
  timelineStart = ENV_START,
  timelineEnd = ENV_END,
  pxPerMinute = 4,
  rowHeight = 72,
}) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const todayIdx = useTodayIndex();
  const [dayIndex, setDayIndex] = useState(todayIdx);

  const { classId, sectionId } = useMemo(getStudentIdsFromStorage, []);
  const { itemsByDay, startMin, endMin, totalMin } = useTimeTableData(
    timelineStart,
    timelineEnd
  );
  const itemsByDayFiltered = useFilteredItemsByDay(
    itemsByDay,
    classId,
    sectionId
  );

  const hasAny = useMemo(
    () =>
      Object.values(itemsByDayFiltered || {}).some(
        (arr) => (arr || []).length > 0
      ),
    [itemsByDayFiltered]
  );

  const [selectedItem, setSelectedItem] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setDialogOpen(true);
  };
  const handleClose = () => setDialogOpen(false);

  const Header = (
    <Paper
      variant="outlined"
      sx={{
        mb: 2,
        position: "sticky",
        top: 0,
        zIndex: 2,
        bgcolor: "background.paper",
      }}
    >
      <Tabs
        value={dayIndex}
        onChange={(_, v) => setDayIndex(v)}
        variant="scrollable"
        scrollButtons="auto"
      >
        {DAYS.map((d) => (
          <Tab key={d.key} label={d.label} />
        ))}
      </Tabs>
    </Paper>
  );

  if (!classId || !sectionId) {
    return (
      <Box>
        {Header}
        <Paper variant="outlined" sx={{ p: 6, textAlign: "center" }}>
          <Stack spacing={1} alignItems="center">
            <Typography variant="subtitle2">No student selection</Typography>
            <Typography variant="body2" color="text.secondary">
              Please store <strong>classId</strong> and{" "}
              <strong>sectionId</strong> in <code>sessionStorage.user</code>.
            </Typography>
          </Stack>
        </Paper>
      </Box>
    );
  }

  if (!hasAny) {
    return (
      <Box>
        {Header}
        <Paper variant="outlined" sx={{ p: 6, textAlign: "center" }}>
          <Stack spacing={1} alignItems="center">
            <Typography variant="subtitle2">
              No entries for {DAYS[dayIndex].label}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We couldn’t find any periods for your Class/Section.
            </Typography>
          </Stack>
        </Paper>
      </Box>
    );
  }

  if (isMobile) {
    return (
      <>
        <Box>
          {Header}
          <MobileTimeTable
            dayIndex={dayIndex}
            setDayIndex={setDayIndex}
            todayIdx={todayIdx}
            itemsByDay={itemsByDayFiltered}
            onItemClick={handleItemClick}
            pxPerMinute={pxPerMinute}
            rowHeight={rowHeight}
          />
        </Box>
        <ItemDetailsDialog
          open={dialogOpen}
          onClose={handleClose}
          item={selectedItem}
          dayLabel={DAYS[dayIndex].label}
        />
      </>
    );
  }

  return (
    <>
      <Box>
        {Header}
        <DesktopTimeTable
          dayIndex={dayIndex}
          setDayIndex={setDayIndex}
          todayIdx={todayIdx}
          itemsByDay={itemsByDayFiltered}
          startMin={startMin}
          endMin={endMin}
          totalMin={totalMin}
          onItemClick={handleItemClick}
          pxPerMinute={pxPerMinute}
          rowHeight={rowHeight}
        />
      </Box>
      <ItemDetailsDialog
        open={dialogOpen}
        onClose={handleClose}
        item={selectedItem}
        dayLabel={DAYS[dayIndex].label}
      />
    </>
  );
}
