import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import Box from '@mui/material/Box';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Drawer, Button, TextField } from '@mui/material';
import {
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  flexRender,
  useReactTable
} from '@tanstack/react-table';

import MainCard from 'components/MainCard';
import ScrollX from 'components/ScrollX';
import { HeaderSort, SelectColumnSorting, TablePagination } from 'components/third-party/react-table';
import SearchBar from 'components/SearchBar';
import LogoImageLoader from 'components/pupilLoader';
export default function ReactTable({ columns, data, loading, filters = [] }) {
  const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const [sorting, setSorting] = useState([{ id: 'createdAt', desc: true }]);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const upsertColumnFilter = (id, value, allToken = undefined) => {
    setColumnFilters((prev) => {
      const rest = prev.filter((f) => f.id !== id);
      if (value === allToken || isEmptyFilter(value)) return rest;
      return [...rest, { id, value }];
    });
  };

  const isEmptyFilter = (v) =>
    v == null ||
    v === '' ||
    (Array.isArray(v) && v.length === 0) ||
    (typeof v === 'object' && !Array.isArray(v) && Object.keys(v).length === 0);

  const table = useReactTable({
    data,
    columns,
    state: { sorting, pagination, columnFilters, globalFilter },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: (row, _colId, q) => {
      if (!q) return true;
      const needle = String(q).toLowerCase();
      const hay = Object.values(row.original || {})
        .filter((v) => v !== null && v !== undefined && (typeof v === 'string' || typeof v === 'number' || v instanceof Date))
        .map((v) => (v instanceof Date ? v.toISOString() : String(v)))
        .join(' ')
        .toLowerCase();
      return hay.includes(needle);
    }
  })

  const filterMap = useMemo(
    () => Object.fromEntries(columnFilters.map(f => [f.id, f.value])),
    [columnFilters]
  );
  const FilterBar = () => {
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));
    const isMobile = !isDesktop;
    const [drawerOpen, setDrawerOpen] = useState(false);

    const globals = filters.filter((f) => f.type === 'global');
    const nonGlobals = filters.filter((f) => f.type !== 'global'); // 'sort' excluded from filters
    const nonGlobalIds = useMemo(() => new Set(nonGlobals.map((f) => f.id)), [nonGlobals]);

    const filterMap = useMemo(
      () => Object.fromEntries(columnFilters.map((f) => [f.id, f.value])),
      [columnFilters]
    );

    const MAX_INLINE_DESKTOP = 3;
    const showDrawerTrigger = isMobile || (isDesktop && nonGlobals.length > MAX_INLINE_DESKTOP);
    const useDrawer = showDrawerTrigger;
    const inlineNonGlobals = useDrawer ? [] : nonGlobals;

    const activeNonGlobalCount = useMemo(
      () =>
        columnFilters.reduce(
          (acc, f) => (nonGlobalIds.has(f.id) && !isEmptyFilter(f.value) ? acc + 1 : acc),
          0
        ),
      [columnFilters, nonGlobalIds]
    );

    const clearNonGlobals = () => {
      setColumnFilters((prev) => prev.filter((f) => !nonGlobalIds.has(f.id)));
    };

    const GlobalItem = ({ children }) => (
      <Box sx={{ minWidth: 0, flexBasis: { xs: '100%', sm: '100%', md: 'auto' }, flexGrow: 1 }}>
        {children}
      </Box>
    );
    const FieldItem = ({ children }) => (
      <Box sx={{ flexBasis: { xs: '100%', sm: '100%', md: 'auto' }, flexGrow: 0, minWidth: { md: 200 } }}>
        {children}
      </Box>
    );

    const SortControl = (
      <Box sx={{ width: '100%', '& .MuiInputBase-root, & .MuiFormControl-root': { height: 40 } }}>
        <SelectColumnSorting
          {...{ getState: table.getState, getAllColumns: table.getAllColumns, setSorting }}
        />
      </Box>
    );

    const Control = (f) => {
      switch (f.type) {
        case 'global':
          return (
            <GlobalItem key={`global-${f.key}`}>
              <Box
                sx={{
                  width: '100%',
                  minWidth: 0,
                  '& .MuiOutlinedInput-root, & .MuiInputBase-root': { height: 48 },
                  '& .MuiInputBase-input': { py: 0.5 }
                }}
              >
                <SearchBar
                  value={globalFilter}
                  onDebouncedChange={setGlobalFilter}
                  placeholder={f.placeholder || 'Search…'}
                />
              </Box>
            </GlobalItem>
          );

        case 'select':
          return (
            <FieldItem key={f.id}>
              <FormControl size="medium" fullWidth sx={{ '& .MuiInputBase-root': { height: 48 } }}>
                <InputLabel id={`${f.id}-label`}>{f.label}</InputLabel>
                <Select
                  labelId={`${f.id}-label`}
                  label={f.label}
                  value={filterMap[f.id] ?? (f.allToken ?? '')}
                  onChange={(e) => upsertColumnFilter(f.id, e.target.value, f.allToken)}
                >
                  {(f.options || []).map((opt) => (
                    <MenuItem key={String(opt)} value={opt}>{String(opt)}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </FieldItem>
          );

        case 'text':
          return (
            <FieldItem key={f.id}>
              <TextField
                size="medium"
                fullWidth
                label={f.label}
                value={filterMap[f.id] ?? ''}
                onChange={(e) => upsertColumnFilter(f.id, e.target.value)}
                sx={{ '& .MuiInputBase-root': { height: 48 } }}
              />
            </FieldItem>
          );

        case 'numberRange':
          return (
            <FieldItem key={f.id}>
              <Stack direction={{ xs: 'column', sm: 'column' }} spacing={1}>
                <TextField
                  size="medium"
                  type="number"
                  fullWidth
                  label={`${f.label} min`}
                  value={filterMap[f.id]?.min ?? ''}
                  onChange={(e) => upsertColumnFilter(f.id, { ...(filterMap[f.id] || {}), min: e.target.value })}
                  sx={{ '& .MuiInputBase-root': { height: 48 } }}
                />
                <TextField
                  size="medium"
                  type="number"
                  fullWidth
                  label={`${f.label} max`}
                  value={filterMap[f.id]?.max ?? ''}
                  onChange={(e) => upsertColumnFilter(f.id, { ...(filterMap[f.id] || {}), max: e.target.value })}
                  sx={{ '& .MuiInputBase-root': { height: 48 } }}
                />
              </Stack>
            </FieldItem>
          );

        case 'dateRange':
          return (
            <FieldItem key={f.id}>
              <Stack direction={{ xs: 'column', sm: 'column' }} spacing={1}>
                <TextField
                  size="medium"
                  type="date"
                  fullWidth
                  label={`${f.label} (from)`}
                  InputLabelProps={{ shrink: true }}
                  value={filterMap[f.id]?.from ?? ''}
                  onChange={(e) => upsertColumnFilter(f.id, { ...(filterMap[f.id] || {}), from: e.target.value })}
                  sx={{ '& .MuiInputBase-root': { height: 48 } }}
                />
                <TextField
                  size="medium"
                  type="date"
                  fullWidth
                  label="to"
                  InputLabelProps={{ shrink: true }}
                  value={filterMap[f.id]?.to ?? ''}
                  onChange={(e) => upsertColumnFilter(f.id, { ...(filterMap[f.id] || {}), to: e.target.value })}
                  sx={{ '& .MuiInputBase-root': { height: 48 } }}
                />
              </Stack>
            </FieldItem>
          );

        case 'custom':
          return <FieldItem key={f.id || 'custom'}>{f.render?.({ table, upsertColumnFilter, setSorting })}</FieldItem>;

        default:
          return null;
      }
    };

    return (
      <>
        <Stack
          direction={{ xs: 'column', sm: 'row', md: 'row' }}
          spacing={1.5}
          alignItems="stretch"
          sx={{ width: '100%', px: { xs: 0.5, md: 0 } }}
        >
          {globals.map(Control)}

          {!isMobile && <FieldItem key="sort-desktop" >{SortControl}</FieldItem>}

          {inlineNonGlobals.map(Control)}
          {isMobile && (
            <Stack direction="row" spacing={1.5} sx={{ width: '100%' }}>
              <Box sx={{ flex: 1}} >{SortControl}</Box>
              <Box sx={{ flex: 1 }}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<FilterListIcon />}
                  onClick={() => setDrawerOpen(true)}
                  sx={{ height: 48, whiteSpace: 'nowrap' }}
                  aria-haspopup="dialog"
                  aria-expanded={drawerOpen ? 'true' : 'false'}
                >
                  Filters{activeNonGlobalCount ? ` (${activeNonGlobalCount})` : ''}
                </Button>
              </Box>
            </Stack>
          )}
          {!isMobile && showDrawerTrigger && (
            <Box sx={{ width: 'auto', ml: 'auto' }}>
              <Button
                variant="outlined"
                startIcon={<FilterListIcon />}
                onClick={() => setDrawerOpen(true)}
                sx={{ height: 40, whiteSpace: 'nowrap' }}
                aria-haspopup="dialog"
                aria-expanded={drawerOpen ? 'true' : 'false'}
              >
                Filters{activeNonGlobalCount ? ` (${activeNonGlobalCount})` : ''}
              </Button>
            </Box>
          )}
        </Stack>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          ModalProps={{ keepMounted: true }}
          PaperProps={{
            sx: {
              width: { xs: '85%', sm: 380, md: 420 },
              borderTopLeftRadius: 12,
              borderBottomLeftRadius: 12
            }
          }}
        >
          <Box sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Box sx={{ fontWeight: 600, fontSize: 16 }}>Filters</Box>
              <Stack direction="row" spacing={2}>
                <Button size="small" onClick={clearNonGlobals}>Clear</Button>
                <Button size="small" variant="contained" onClick={() => setDrawerOpen(false)}>Done</Button>
              </Stack>
            </Stack>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ flex: 1, overflow: 'auto', px: 0.5, pb: 2, py: 1.5 }}>
              <Stack spacing={1.5}>
                {nonGlobals.map((f) => (
                  <Box key={f.id}>{Control(f)}</Box>
                ))}
              </Stack>
            </Box>
          </Box>
        </Drawer>
      </>
    );
  };

  return (
    <MainCard
      title={
        <Box sx={{ width: '100%' }}>
          <FilterBar layout="desktop" />

        </Box>
      }
      secondary={null}
    >
      <ScrollX>
        {loading ? (
          <Box sx={{ width: '100%', height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <LogoImageLoader />
          </Box>
        ) : (
          <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
            <Table>
              <TableHead>
                {table.getHeaderGroups().map((hg) => (
                  <TableRow key={hg.id}>
                    {hg.headers.map((header) => {
                      if (header.column.columnDef.meta !== undefined && header.column.getCanSort()) {
                        Object.assign(header.column.columnDef.meta, {
                          className: `${header.column.columnDef.meta.className} cursor-pointer prevent-select`
                        });
                      }
                      return (
                        <TableCell
                          key={header.id}
                          {...header.column.columnDef.meta}
                          onClick={header.column.getToggleSortingHandler()}
                          {...(header.column.getCanSort() &&
                            header.column.columnDef.meta === undefined && { className: 'cursor-pointer prevent-select' })}
                        >
                          {header.isPlaceholder ? null : (
                            <Stack direction="row" spacing={1} alignItems="center">
                              <Box>{flexRender(header.column.columnDef.header, header.getContext())}</Box>
                              {header.column.getCanSort() && <HeaderSort column={header.column} />}
                            </Stack>
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHead>

              {table.getRowModel().rows.length > 0 ? (
                <TableBody>
                  {table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id} {...cell.column.columnDef.meta}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              ) : (
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={table.getVisibleLeafColumns().length} sx={{ p: 0, height: 557 }}>
                      <Box sx={{ height: '100%', display: 'grid', placeItems: 'center', textAlign: 'center', color: 'text.secondary', fontSize: '14px' }}>
                        No data found
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableBody>
              )}
            </Table>
          </TableContainer>
        )}
      </ScrollX>

      <Box sx={{ my: 2, px: 2 }}>
        <Divider />
        <TablePagination
          getPageCount={table.getPageCount}
          setPageIndex={table.setPageIndex}
          setPageSize={table.setPageSize}
          getState={table.getState}
          initialPageSize={10}
          labelRowsPerPage="rows per page"
        />
      </Box>
    </MainCard>
  );
}
ReactTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  loading: PropTypes.bool,
  filters: PropTypes.array
};