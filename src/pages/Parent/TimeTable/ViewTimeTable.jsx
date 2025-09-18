import React, { useEffect, useMemo, useState } from 'react';
import { Box, Typography, Paper, Tabs, Tab, useMediaQuery, Stack, Card, CardContent, Chip, Divider } from '@mui/material';
import { ENV_START, ENV_END, DAYS } from './constants';
import { useTimeNowMinutes, useTodayIndex,mapApiDayToKey,toMinutes} from './utils';
import { FetchTimeTable } from 'api/timetable';
import { COLORS } from './constants';
import { rangeArray } from './utils';
import { minutesToLabel } from './utils';


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
  },[]);

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
      const classId = String(rec?.classId ?? rec?.class?.id ?? '');
      const sectionId = String(rec?.sectionId ?? rec?.section?.id ?? '');
      const subjectId = String(rec?.subjectId ?? rec?.subject?.id ?? '');
      const teacherId = String(rec?.teacherId ?? rec?.teacher?.id ?? '');

      const className = rec?.class?.name || classId || 'Class';
      const sectionName = rec?.section?.name || sectionId || 'A';
      const subjectName = rec?.subject?.name || subjectId || 'Subject';
      const teacherName =
        [rec?.teacher?.user?.firstName, rec?.teacher?.user?.lastName].filter(Boolean).join(' ').trim() ||
        rec?.teacher?.user?.username ||
        rec?.teacher?.user?.email ||
        (teacherId ? `User ${teacherId}` : 'Teacher');

      const from = rec?.startTimeMinutes ?? toMinutes(rec?.startTimeslot);
      const to = rec?.endTimeMinutes ?? toMinutes(rec?.endTimeslot);

      const clampedFrom = Math.max(startMin, Math.min(endMin, from));
      const clampedTo = Math.max(startMin, Math.min(endMin, to));
      if (!(clampedTo > clampedFrom)) continue;

      const color = getColorForSubject(subjectId || subjectName);

      base[dayKey].push({
        id: rec?.id || `${dayKey}_${classId}_${sectionId}_${subjectId}_${from}_${to}`,
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
        color
      });
    }

    for (const k of Object.keys(base)) {
      base[k] = base[k].sort((a, b) => a.from - b.from);
    }

    return base;
  }, [timeTable, startMin, endMin]);

  return { itemsByDay, startMin, endMin, totalMin };
}

function DesktopTimeTable({ dayIndex, setDayIndex, todayIdx, itemsByDay, startMin, endMin, totalMin }) {
  const activeDayKey = DAYS[dayIndex].key;
  const toLeftPct = (m) => ((m - startMin) / totalMin) * 100;

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
          sectionName: it.sectionName
        });
      }
    }
    return Array.from(map.values());
  }, [itemsByDay, activeDayKey]);

  const nowMin = useTimeNowMinutes();
  const isTodayTab = DAYS[todayIdx]?.key === activeDayKey;
  const clampedNow = Math.min(endMin, Math.max(startMin, nowMin));
  const progressPct = ((clampedNow - startMin) / Math.max(1, endMin - startMin)) * 100;

  return (
    <Box>
      {/* <Paper variant="outlined" sx={{ mb: 2 }}>
        <Tabs value={dayIndex} onChange={(_, v) => setDayIndex(v)} variant="scrollable" scrollButtons="auto">
          {DAYS.map((d) => (
            <Tab key={d.key} label={d.label} />
          ))}
        </Tabs>
      </Paper> */}

      <Paper variant="outlined" sx={{ p: 2 }}>
        {visibleRows.length > 0 && (
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '220px 1fr',
              bgcolor: 'grey.50',
              borderBottom: '1px solid',
              borderColor: 'grey.200'
            }}
          >
            <Box sx={{ p: 2, fontWeight: 600 }}>Class / Section</Box>
            <Box
              sx={{
                position: 'relative',
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'grey.200',
                px: 3
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  p: 0,
                  pt: 3.5,
                  pb: 3,
                  mb: 1.5,
                  pl: 4,
                  ml: -4,
                  borderRadius: 1
                }}
              >
                <Box sx={{ position: 'absolute', inset: 0, ml: 4 }}>
                  {rangeArray(Math.ceil(startMin / 60) * 60, endMin, 30).map((m) => (
                    <Box key={m} sx={{ position: 'absolute', left: `${toLeftPct(m)}%`, top: 22, bottom: 14 }}>
                      <Box
                        sx={{ position: 'absolute', top: 0, bottom: 0, borderLeft: '1px dashed', borderColor: 'divider', opacity: 0.7 }}
                      />
                      <Typography
                        variant="caption"
                        sx={{
                          position: 'absolute',
                          top: -18,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          color: 'text.secondary',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {minutesToLabel(m)}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Box sx={{ position: 'relative', height: 12, borderRadius: 999, bgcolor: 'grey.200', overflow: 'hidden' }}>
                  {isTodayTab && (
                    <Box sx={{ position: 'absolute', inset: 0, width: `${progressPct}%`, bgcolor: 'primary.main', borderRadius: 999 }} />
                  )}
                </Box>

                {isTodayTab && (
                  <Typography
                    variant="caption"
                    sx={{
                      position: 'absolute',
                      left: `calc(${progressPct}% - 16px)`,
                      top: 42,
                      color: 'primary.main',
                      fontWeight: 700,
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {minutesToLabel(clampedNow)}
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
        )}

        {visibleRows.length === 0 ? (
          <Box sx={{ p: 6, textAlign: 'center', color: 'text.secondary' }}>
            <Stack spacing={1} alignItems="center">
              <Typography variant="body2" color="text.secondary">
                No entries for <strong>{DAYS[dayIndex].label}</strong>.
              </Typography>
            </Stack>
          </Box>
        ) : (
          <>
            {visibleRows.map((r) => {
              const rowItems = (itemsByDay[DAYS[dayIndex].key] || []).filter((i) => i.classId === r.classId && i.sectionId === r.sectionId);
              const toLeftPctLocal = (m) => ((m - startMin) / totalMin) * 100;
              const toWidthPctLocal = (from, to) => ((to - from) / totalMin) * 100;

              return (
                <Box
                  key={r.key}
                  sx={{ display: 'grid', gridTemplateColumns: '220px 1fr', borderTop: '1px solid', borderColor: 'grey.100' }}
                >
                  <Box sx={{ p: 2 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {r.className}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Section {r.sectionName}
                    </Typography>
                  </Box>

                  <Box sx={{ position: 'relative', margin: 3, height: 60, bgcolor: 'background.paper' }}>
                    {rangeArray(Math.ceil(startMin / 60) * 60, endMin, 60).map((m) => (
                      <Box
                        key={`row-${r.key}-${m}`}
                        sx={{
                          position: 'absolute',
                          left: `${toLeftPctLocal(m)}%`,
                          top: 0,
                          bottom: 0,
                          borderLeft: '1px dashed rgba(0,0,0,0.06)'
                        }}
                      />
                    ))}

                    {rowItems.map((it) => {
                      const left = toLeftPctLocal(it.from);
                      const width = toWidthPctLocal(it.from, it.to);
                      return (
                        <Box
                          key={it.id}
                          sx={{
                            position: 'absolute',
                            top: 8,
                            left: `${left}%`,
                            width: `${width}%`,
                            height: 44,
                            bgcolor: it.color,
                            color: '#fff',
                            borderRadius: 1,
                            display: 'flex',
                            alignItems: 'center',
                            px: 1,
                            boxShadow: '0 1px 4px rgba(0,0,0,0.15)',
                            overflow: 'hidden'
                          }}
                        >
                          <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Typography variant="body2" noWrap title={`${it.subjectName} • ${it.teacherName}`}>
                              {it.subjectName}—{it.teacherName}
                            </Typography>
                            <Typography variant="caption" sx={{ opacity: 0.9 }}>
                              {minutesToLabel(it.from)}–{minutesToLabel(it.to)}
                            </Typography>
                          </Box>
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              );
            })}
          </>
        )}
      </Paper>
    </Box>
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
        map.set(key, { key, className: it.className, sectionName: it.sectionName, items: [] });
      }
      map.get(key).items.push(it);
    }
    return Array.from(map.values()).sort((a, b) => (a.items[0]?.from ?? 0) - (b.items[0]?.from ?? 0));
  }, [itemsByDay, activeDayKey]);

  return (
    <Box>
      {rows.length === 0 ? (
        <Box sx={{ p: 4, textAlign: 'center', color: 'text.secondary' }}>
          <Typography variant="body2">
            No entries for <strong>{DAYS[dayIndex].label}</strong>.
          </Typography>
        </Box>
      ) : (
        <Stack spacing={2}>
          {rows.map((row) => (
            <Card key={row.key} variant="outlined" sx={{ borderRadius: 2 }}>
              <CardContent sx={{ pb: 1.5 }}>
                <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 1 }}>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                      {row.className}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Section {row.sectionName}
                    </Typography>
                  </Box>
                  <Chip size="small" label={DAYS[dayIndex].label} />
                </Box>

                <Divider sx={{ my: 1.25 }} />

                <Stack spacing={1.25}>
                  {row.items.map((it) => {
                    const isNow = isTodayTab && nowMin >= it.from && nowMin < it.to;
                    return (
                      <Box
                        key={it.id}
                        sx={{
                          border: '1px solid',
                          borderColor: isNow ? 'primary.main' : 'divider',
                          bgcolor: isNow ? 'primary.main' : 'background.paper',
                          color: isNow ? 'primary.contrastText' : 'text.primary',
                          p: 1.25,
                          borderRadius: 1.5,
                          display: 'grid',
                          gridTemplateColumns: 'auto 1fr',
                          gap: 1
                        }}
                      >
                        <Box
                          sx={{
                            width: 10,
                            height: '100%',
                            borderRadius: 999,
                            bgcolor: isNow ? 'primary.contrastText' : it.color
                          }}
                        />
                        <Box minWidth={0}>
                          <Typography variant="body2" sx={{ fontWeight: 600 }} noWrap title={`${it.subjectName} • ${it.teacherName}`}>
                            {it.subjectName} — {it.teacherName}
                          </Typography>
                          <Typography variant="caption" sx={{ opacity: 0.85 }}>
                            {minutesToLabel(it.from)}–{minutesToLabel(it.to)}
                          </Typography>
                        </Box>
                      </Box>
                    );
                  })}
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      )}
    </Box>
  );
}
function useFilteredItemsByDay(itemsByDay, classId, sectionId) {
  return useMemo(() => {
    if (!classId || !sectionId) return itemsByDay;
    const out = {};
    for (const k of Object.keys(itemsByDay || {})) {
      out[k] = (itemsByDay[k] || []).filter(
        (it) => String(it.classId) === String(classId) && String(it.sectionId) === String(sectionId)
      );
    }
    return out;
  }, [itemsByDay, classId, sectionId]);
}
function getStudentIdsFromStorage() {
  try {
    const raw = sessionStorage.getItem('user');
    if (!raw) return { classId: '', sectionId: '' };
    const j = JSON.parse(raw);

    const classId =
      j?.classId ??
      j?.class?.id ??
      j?.student?.classId ??
      j?.student?.class?.id ??
      '';

    const sectionId =
      j?.sectionId ??
      j?.section?.id ??
      j?.student?.sectionId ??
      j?.student?.section?.id ??
      '';

    return { classId: String(classId || ''), sectionId: String(sectionId || '') };
  } catch {
    return { classId: '', sectionId: '' };
  }
}

export default function StudentTimeTable({
  timelineStart = ENV_START,
  timelineEnd = ENV_END
}) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const todayIdx = useTodayIndex();
  const [dayIndex, setDayIndex] = useState(todayIdx);

  const { classId, sectionId } = useMemo(getStudentIdsFromStorage, []);
  const { itemsByDay, startMin, endMin, totalMin } = useTimeTableData(timelineStart, timelineEnd);
  const itemsByDayFiltered = useFilteredItemsByDay(itemsByDay, classId, sectionId);

  const hasAny = useMemo(
    () => Object.values(itemsByDayFiltered || {}).some((arr) => (arr || []).length > 0),
    [itemsByDayFiltered]
  );

  const Header = (
    <Paper variant="outlined" sx={{ mb: 2, position: 'sticky', top: 0, zIndex: 2, bgcolor: 'background.paper' }}>
      <Tabs value={dayIndex} onChange={(_, v) => setDayIndex(v)} variant="scrollable" scrollButtons="auto">
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
        <Paper variant="outlined" sx={{ p: 6, textAlign: 'center' }}>
          <Stack spacing={1} alignItems="center">
            <Typography variant="subtitle2">No student selection</Typography>
            <Typography variant="body2" color="text.secondary">
              Please store <strong>classId</strong> and <strong>sectionId</strong> in <code>sessionStorage.user</code>.
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
        <Paper variant="outlined" sx={{ p: 6, textAlign: 'center' }}>
          <Stack spacing={1} alignItems="center">
            <Typography variant="subtitle2">No entries for {DAYS[dayIndex].label}</Typography>
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
      <Box>
        {Header}
        <MobileTimeTable
          dayIndex={dayIndex}
          setDayIndex={setDayIndex}
          todayIdx={todayIdx}
          itemsByDay={itemsByDayFiltered}
        />
      </Box>
    );
  }

  return (
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
      />
    </Box>
  );
}
