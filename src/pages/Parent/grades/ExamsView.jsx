// import React, { useEffect, useState, useCallback } from 'react';
// import { Box, Typography, Button, useTheme, useMediaQuery, TextField, InputAdornment } from '@mui/material';
// import { Calendar } from 'lucide-react';
// import { getExaminations } from 'api/exams';
// import dayjs from 'dayjs';
// import LogoImageLoader from 'components/PupilLoader';
// import { useNavigate } from 'react-router-dom';
// import { TablePagination } from 'components/third-party/react-table';
// import SearchIcon from '@mui/icons-material/Search';
// import debounce from 'lodash.debounce';
// import SingleInputDateRangePicker from 'components/SingleInputDateRangePicker';
// import SearchBar from 'components/SearchBar';

// const ExamsView = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const navigate = useNavigate();

//   const [exams, setExams] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [pageIndex, setPageIndex] = useState(0);
//   const [pageSize, setPageSize] = useState(10);
//   const [totalRows, setTotalRows] = useState(0);

//   const [searchQuery, setSearchQuery] = useState('');
//   const [dateRange, setDateRange] = useState([null, null]);

//   const fetchData = useCallback(async () => {
//     setLoading(true);
//     try {
//       const { data, pageCount } = await getExaminations({
//         page: pageIndex + 1,
//         take: pageSize,
//         sortOrder: 'asc',
//         startDate: dateRange[0] ? dayjs(dateRange[0]).format('YYYY-MM-DD') : undefined,
//         endDate: dateRange[1] ? dayjs(dateRange[1]).format('YYYY-MM-DD') : undefined,
//         searchQuery: searchQuery || undefined
//       });

//       const extracted = data.map((exam) => ({
//         id: exam.id,
//         name: exam.name,
//         date: exam.examDetail?.[0]?.date || null
//       }));

//       setExams(extracted);
//       setTotalRows(pageCount * pageSize);
//     } catch (err) {
//       console.error('Failed to fetch exams:', err);
//     } finally {
//       setLoading(false);
//     }
//   }, [pageIndex, pageSize, dateRange, searchQuery]);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   const handleSearch = debounce((value) => {
//     setSearchQuery(value);
//     setPageIndex(0);
//   }, 500);

//   if (loading) {
//     return (
//       <Box sx={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//         <LogoImageLoader />
//       </Box>
//     );
//   }

//   return (
//     <Box
//       sx={{
//         backgroundColor: '#fff',
//         borderRadius: 2,
//         p: isMobile ? 2 : 3,
//         boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
//         border: '1px solid',
//         borderColor: 'divider',
//         mt: 2
//       }}
//     >
//       {/* Filters */}
//       <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 2, mb: 2 }}>
//         <Box sx={{ width: 'auto', minWidth: '70%' }}>
//           <SearchBar
//             value={searchQuery}
//             onDebouncedChange={(value) => {
//               setSearchQuery(value);
//               setPageIndex(0);
//             }}
//             placeholder="Search exams…"
//             sx={{ height: 50, flexGrow: 1, minWidth: isMobile ? 'auto' : 250 }}
//           />
//         </Box>
//         <Box sx={{ minWidth: '30%' }}>
//           <SingleInputDateRangePicker
//             value={{
//               startDate: dateRange[0] ? dayjs(dateRange[0]).format('MM/DD/YYYY') : '',
//               endDate: dateRange[1] ? dayjs(dateRange[1]).format('MM/DD/YYYY') : ''
//             }}
//             onDateChange={({ startDate, endDate }) => {
//               setPageIndex(0);
//               setDateRange([
//                 startDate && dayjs(startDate, 'MM/DD/YYYY').isValid() ? dayjs(startDate, 'MM/DD/YYYY').toDate() : null,
//                 endDate && dayjs(endDate, 'MM/DD/YYYY').isValid() ? dayjs(endDate, 'MM/DD/YYYY').toDate() : null
//               ]);
//             }}
//           />
//         </Box>
//       </Box>

//       {/* Mobile View */}
//       {isMobile ? (
//         <Box>
//           {exams.map((item) => (
//             <Box
//               key={item.id}
//               sx={{
//                 backgroundColor: '#fff',
//                 borderRadius: 3,
//                 p: 2,
//                 mb: 2,
//                 boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
//               }}
//             >
//               <Typography variant="subtitle1" fontWeight={700} gutterBottom>
//                 {item.name}
//               </Typography>
//               <Box display="flex" alignItems="center" gap={1} mb={2}>
//                 <Calendar size={16} />
//                 <Typography variant="body2" color="text.secondary">
//                   {item.date ? dayjs(item.date).format('DD/MM/YYYY') : 'N/A'}
//                 </Typography>
//               </Box>
//               <Button
//                 fullWidth
//                 size="small"
//                 variant="outlined"
//                 onClick={() => navigate('/academics/results', { state: { examId: item.id } })}
//               >
//                 View Results
//               </Button>
//             </Box>
//           ))}
//         </Box>
//       ) : (
//         // Desktop View
//         <Box>
//           <Box
//             sx={{
//               display: 'flex',
//               alignItems: 'center',
//               backgroundColor: '#f9fafb',
//               borderRadius: '8px 8px 0 0',
//               px: 2,
//               py: 1.5,
//               fontWeight: 600,
//               borderBottom: '1px solid',
//               borderColor: 'divider'
//             }}
//           >
//             <Box sx={{ width: 4 }} />
//             <Typography sx={{ flex: 1, fontWeight: 'bold' }}>Exam Name</Typography>
//             <Typography sx={{ flex: 1, fontWeight: 'bold', textAlign: 'center' }}>Date</Typography>
//             <Typography sx={{ flex: 1, fontWeight: 'bold', textAlign: 'right' }}>Actions</Typography>
//           </Box>

//           {exams.map((item, index) => (
//             <Box
//               key={item.id}
//               sx={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 backgroundColor: '#fff',
//                 borderBottom: '1px solid',
//                 borderColor: 'divider',
//                 px: 2,
//                 py: 2,
//                 '&:last-of-type': {
//                   borderBottom: 'none',
//                   borderRadius: '0 0 8px 8px'
//                 }
//               }}
//             >
//               <Box sx={{ width: 4, height: '100%', bgcolor: '#1976d2' }} />
//               <Typography sx={{ flex: 1 }}>{item.name}</Typography>
//               <Typography sx={{ flex: 1, textAlign: 'center' }}>{item.date ? dayjs(item.date).format('DD/MM/YYYY') : 'N/A'}</Typography>
//               <Box sx={{ flex: 1, textAlign: 'right' }}>
//                 <Button
//                   size="small"
//                   variant="outlined"
//                   onClick={() => navigate('/academics/results', { state: { examId: item.id, examName: item.name } })}
//                 >
//                   View Results
//                 </Button>
//               </Box>
//             </Box>
//           ))}
//         </Box>
//       )}

//       {/* Pagination */}
//       <Box sx={{ mt: 3 }}>
//         <TablePagination
//           getPageCount={() => Math.ceil(totalRows / pageSize)}
//           setPageIndex={setPageIndex}
//           setPageSize={setPageSize}
//           getState={() => ({
//             pagination: { pageIndex, pageSize }
//           })}
//           initialPageSize={pageSize}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default ExamsView;


import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { Box, useMediaQuery, Button, Tooltip, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

import { getExaminations } from 'api/exams';
import ReactTable from 'components/reactTable';
import LogoImageLoader from 'components/PupilLoader';
import SingleInputDateRangePicker from 'components/SingleInputDateRangePicker';
import { Eye } from 'iconsax-react';

const ExamsView = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [pageSize, setPageSize] = useState(10);
  const [pageIndex, setPageIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [dateRange, setDateRange] = useState([null, null]);
  const navigate = useNavigate();

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch once; let ReactTable handle client-side paging/sorting/filtering
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const {data} = await getExaminations({
        sortOrder: 'asc',
        startDate: dateRange[0] ? dayjs(dateRange[0]).format('YYYY-MM-DD') : undefined,
        endDate: dateRange[1] ? dayjs(dateRange[1]).format('YYYY-MM-DD') : undefined,
       
      });
      const mapped = (data || []).map((exam) => ({
        id: exam.id,
        name: exam.name || '-',
        date: exam?.examDetail?.[0]?.date || null 
      }));

      setRows(mapped);
    } catch (err) {
      console.error('Failed to fetch exams:', err);
      setRows([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  // Columns for ReactTable
  const columns = useMemo(
    () => [
      { header: 'Exam Name', accessorKey: 'name' },
      {
        header: 'Date',
        accessorKey: 'date',
        // filter expects value like: { from?: 'YYYY-MM-DD', to?: 'YYYY-MM-DD' }
        filterFn: (row, columnId, value) => {
          const raw = row.getValue(columnId);
          if (!value || (!value.from && !value.to)) return true;
          if (!raw) return false;
          const d = dayjs(raw);
          if (!d.isValid()) return false;
          if (value.from && d.isBefore(dayjs(value.from), 'day')) return false;
          if (value.to && d.isAfter(dayjs(value.to), 'day')) return false;
          return true;
        },
        cell: ({ getValue }) => {
          const v = getValue();
          return v ? dayjs(v).format('DD/MM/YYYY') : 'N/A';
        }
      },
      {
        header: () => <Box sx={{ textAlign: 'center', width: '100%' }}>Actions</Box>,
        accessorKey: 'actions',
        enableSorting: false,
        meta: { className: 'cell-center' },
        cell: ({ row }) => {
          const { id, name } = row.original;
          return (
             <Tooltip title="View details" arrow>
                      <IconButton
                        aria-label="view assignment"
                        size="small"
                        color="primary"
                        onClick={() =>
                  navigate('/academics/results', { state: { examId: id, examName: name } })
                }
                      >
                        <Eye size="20" variant="Bold" />
                      </IconButton>
                    </Tooltip>
          );
        }
      }
    ],
    [navigate]
  );

  // Filters for ReactTable’s FilterBar (global + date range with 40px height)
  const filters = useMemo(
    () => [
      { type: 'global', key: 'q', placeholder: 'Search exams…' },
      {
        type: 'custom',
        id: 'date',
        label: 'Date',
        render: ({ table, upsertColumnFilter }) => {
          const current = table.getState()?.columnFilters?.find((f) => f.id === 'date')?.value || {};
          const start = current.from ? dayjs(current.from) : null;
          const end = current.to ? dayjs(current.to) : null;

          return (
            <Box
              sx={{
                minWidth: 260,
                '& .MuiOutlinedInput-root, & .MuiInputBase-root': { height: 40 },
                '& .MuiInputBase-input': { py: 0.5 }
              }}
            >
              <SingleInputDateRangePicker
                value={{
                  startDate: start ? start.format('MM/DD/YYYY') : '',
                  endDate: end ? end.format('MM/DD/YYYY') : ''
                }}
                onDateChange={({ startDate, endDate }) => {
                  const from =
                    startDate && dayjs(startDate, 'MM/DD/YYYY').isValid()
                      ? dayjs(startDate, 'MM/DD/YYYY').format('YYYY-MM-DD')
                      : '';
                  const to =
                    endDate && dayjs(endDate, 'MM/DD/YYYY').isValid()
                      ? dayjs(endDate, 'MM/DD/YYYY').format('YYYY-MM-DD')
                      : '';
                  if (!from && !to) {
                    upsertColumnFilter('date', {}, undefined); // cleared
                  } else {
                    upsertColumnFilter('date', { from, to }, undefined);
                  }
                }}
              />
            </Box>
          );
        }
      }
    ],
    []
  );

  if (loading) {
    return (
      <Box sx={{ width: '100%', height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <LogoImageLoader />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        borderRadius: 2,
        p: isMobile ? 2 : 3,
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        border: '1px solid',
        borderColor: 'divider',
        mt: 2
      }}
    >
      <ReactTable data={rows} columns={columns} loading={loading} filters={filters} />
    </Box>
  );
};

export default ExamsView;

