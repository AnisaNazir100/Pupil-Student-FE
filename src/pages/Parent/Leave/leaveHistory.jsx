import React, { useEffect, useMemo, useState } from 'react';
import {
  Box,
  Stack,
  Paper,
  Typography,
  Chip,
  Button,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  useMediaQuery,
  useTheme
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

import {getCoreRowModel, useReactTable } from '@tanstack/react-table';
import MainCard from 'components/MainCard';
import LogoImageLoader from 'components/pupilLoader';
import { TablePagination } from 'components/third-party/react-table';

import { getLeaveHistory } from 'api/leave';
import { LeaveRequest } from './leaveRequest';
import ReactTable from 'components/reactTable';

export default function DenseTable() {
  const ORDERABLE = {
    appliedOn: 'createdAt',
    appliedFrom: 'startDate',
    appliedTo: 'endDate',
    leaveType: 'leaveType',
    actionedOn: 'actionedAt',
    actionedBy: 'actionBy',
    reason: 'reason',
    status: 'status'
  };

  const [openRequest, setOpenRequest] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [editRowData, setEditRowData] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [totalCount, setTotalCount] = useState(0);

  const [orderBy, setOrderBy] = useState(ORDERABLE.appliedOn);
  const [sortOrder, setSortOrder] = useState('asc');

  const [reasonOpen, setReasonOpen] = useState(false);
  const [reasonText, setReasonText] = useState('');

  const handleOpenRequest = () => setOpenRequest(true);
  const handleCloseRequest = () => setOpenRequest(false);

  const handleEdit = (row) => {
    setEditRowData(row);
    setOpenEdit(true);
  };
  const handleCloseEdit = () => {
    setEditRowData(null);
    setOpenEdit(false);
  };

  const openReasonDialog = (text) => {
    if (!text) return;
    setReasonText(text);
    setReasonOpen(true);
  };
  const closeReasonDialog = () => setReasonOpen(false);

  const toNumber = (val,fallback) => {
    const n = typeof val === 'string' ? Number(val) : val;
    return Number.isFinite(n) ? n : fallback;
  };
  const safeSetPageIndex = (next) => {
    setPageIndex((prev) => Math.max(0, toNumber(typeof next === 'function' ? next(prev) : next, prev)));
  };
  const safeSetPageSize = (next) => {
    setPageSize((prev) => Math.max(1, toNumber(typeof next === 'function' ? next(prev) : next, prev)));
  };

  const fetchLeaveData = async () => {
    try {
      setLoading(true);
      const response = await getLeaveHistory({
        page: pageIndex + 1,
        take: pageSize,
        orderBy,
        sortOrder
      });

      const list = response?.data ?? [];
      const rows =
        list.map((item) => ({
          id: item.id,
          appliedFrom: new Date(item.startDate).toLocaleDateString(),
          appliedTo: new Date(item.endDate ?? item.startDate).toLocaleDateString(),
          status: item.status,
          appliedOn: new Date(item.createdAt).toLocaleDateString(),
          actionedOn: item.actionedAt ? new Date(item.actionedAt).toLocaleDateString() : null,
          reason: item.reason,
          startDate: item.startDate,
          endDate: item.endDate,
          leaveType: item.leaveType,
          actionedBy: item.actionBy
            ? `${item.actionBy.firstName} ${item.actionBy.lastName}`
            : item.actionById
              ? 'ID: ' + item.actionById
              : null
        })) || [];

      setData(rows);

      const meta = response?.meta ?? {};
      const total = meta.itemCount ?? meta.totalItems ?? meta.total ?? rows.length;
      setTotalCount(total);
    } catch (error) {
      console.error('Error fetching leave data:', error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaveData();
  }, [pageIndex, pageSize, orderBy, sortOrder]);

  const SortHeader = ({ label, accessor }) => {
    const apiKey = ORDERABLE[accessor];
    const activeAsc = orderBy === apiKey && sortOrder === 'asc';
    const activeDesc = orderBy === apiKey && sortOrder === 'desc';

    const clickAsc = () => {
      if (!apiKey) return;
      setOrderBy(apiKey);
      setSortOrder('asc');
    };
    const clickDesc = () => {
      if (!apiKey) return;
      setOrderBy(apiKey);
      setSortOrder('desc');
    };

    const btnBaseSx = {
      p: 0,
      m: 0,
      width: 14,
      height: 14,
      minWidth: 0,
      lineHeight: 1,
      '& .MuiSvgIcon-root': { fontSize: 14 }
    };

    return (
      <Stack direction="row" alignItems="center" spacing={0.5}>
        <span>{label}</span>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0, ml: 0.25 }}>
          <IconButton
            aria-label={`sort ${label} ascending`}
            size="small"
            disableRipple
            onClick={clickAsc}
            sx={{
              ...btnBaseSx,
              position: 'relative',
              top: 2,
              color: activeAsc ? 'common.black' : 'gray',
              opacity: activeAsc ? 1 : 0.4,
              fontWeight: activeAsc ? 900 : 400
            }}
          >
            <KeyboardArrowUpIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            aria-label={`sort ${label} descending`}
            size="small"
            disableRipple
            onClick={clickDesc}
            sx={{
              ...btnBaseSx,
              position: 'relative',
              bottom: 2,
              color: activeDesc ? 'common.black' : 'gray',
              opacity: activeDesc ? 1 : 0.4,
              fontWeight: activeDesc ? 900 : 400
            }}
          >
            <KeyboardArrowDownIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </Stack>
    );
  };
  // const columns = useMemo(
  //   () => [
  //     {
  //       header: <SortHeader label="Applied On" accessor="appliedOn" />,
  //       accessorKey: 'appliedOn',
  //       enableSorting: false 
  //     },
  //     {
  //       header: <SortHeader label="Applied From" accessor="appliedFrom" />,
  //       accessorKey: 'appliedFrom',
  //       enableSorting: false
  //     },
  //     {
  //       header: <SortHeader label="Applied To" accessor="appliedTo" />,
  //       accessorKey: 'appliedTo',
  //       enableSorting: false
  //     },
  //     {
  //       header: 'Leave Type',
  //       accessorKey: 'leaveType',
  //       enableSorting: false
  //     },
  //     {
  //       header: <SortHeader label="Action Taken On" accessor="actionedOn" />,
  //       accessorKey: 'actionedOn',
  //       enableSorting: false,
  //       cell: (props) => props.getValue() || '—'
  //     },
  //     {
  //       header: 'Action Taken By',
  //       accessorKey: 'actionedBy',
  //       enableSorting: false,
  //       cell: (props) => props.getValue() || '—'
  //     },
  //     {
  //       header: 'Reason',
  //       accessorKey: 'reason',
  //       enableSorting: false,
  //       cell: (props) => {
  //         const reason = props.getValue();
  //         if (!reason) return '—';
  //         return (
  //           <Button
  //             variant="text"
  //             size="small"
  //             onClick={() => openReasonDialog(reason)}
  //             sx={{ textTransform: 'none', padding: '2px 6px', minWidth: 0 }}
  //           >
  //             <Tooltip title="Click to view full reason" arrow>
  //               See Reason
  //             </Tooltip>
  //           </Button>
  //         );
  //       }
  //     },
  //     {
  //       header: 'Status',
  //       accessorKey: 'status',
  //       enableSorting: false,
  //       cell: (props) => {
  //         const val = props.getValue();
  //         const color = val === 'APPROVED' ? 'success' : val === 'REJECTED' ? 'error' : 'info';
  //         return <Chip color={color} label={val} size="small" variant="light" />;
  //       }
  //     },
  //     {
  //       header: 'Actions',
  //       accessorKey: 'actions',
  //       enableSorting: false,
  //       cell: ({ row }) => {
  //         const isDisabled = row.original.status === 'APPROVED' || row.original.status === 'REJECTED';
  //         return (
  //           <Button size="small" variant="outlined" onClick={() => handleEdit(row.original)} disabled={isDisabled}>
  //             Edit
  //           </Button>
  //         );
  //       }
  //     }
  //   ],
  //   [orderBy, sortOrder]
  // );

  const columns = useMemo(
  () => [
    { header: <SortHeader label="Applied On" accessor="appliedOn" />, accessorKey: 'appliedOn', enableSorting: true },
    { header: <SortHeader label="Applied From" accessor="appliedFrom" />, accessorKey: 'appliedFrom', enableSorting: true },
    { header: <SortHeader label="Applied To" accessor="appliedTo" />, accessorKey: 'appliedTo', enableSorting: true },
    { header: 'Leave Type', accessorKey: 'leaveType', enableSorting: true },

    { header: <SortHeader label="Action Taken On" accessor="actionedOn" />, accessorKey: 'actionedOn', enableSorting: true,
      cell: (props) => props.getValue() || '—' },

    { header: 'Action Taken By', accessorKey: 'actionedBy', enableSorting: true,
      cell: (props) => props.getValue() || '—' },

    { header: 'Reason', accessorKey: 'reason', enableSorting: false,
      cell: (props) => {
        const reason = props.getValue();
        if (!reason) return '—';
        return (
          <Button variant="text" size="small" onClick={() => openReasonDialog(reason)} sx={{ textTransform: 'none', p: '2px 6px', minWidth: 0 }}>
            <Tooltip title="Click to view full reason" arrow>See Reason</Tooltip>
          </Button>
        );
      }
    },

    { header: 'Status', accessorKey: 'status', enableSorting: true,
      cell: (props) => {
        const val = props.getValue();
        const color = val === 'APPROVED' ? 'success' : val === 'REJECTED' ? 'error' : 'info';
        return <Chip color={color} label={val} size="small" variant="light" />;
      }
    },

    { header: 'Actions', accessorKey: 'actions', enableSorting: false,
      cell: ({ row }) => {
        const isDisabled = row.original.status === 'APPROVED' || row.original.status === 'REJECTED';
        return <Button size="small" variant="outlined" onClick={() => handleEdit(row.original)} disabled={isDisabled}>Edit</Button>;
      }
    }
  ],
  [orderBy, sortOrder]
);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const renderMobileCards = () => {
    if (loading) {
      return (
        <Box sx={{ p: 3, textAlign: 'center', alignItems: 'center' }}>
          <LogoImageLoader />
        </Box>
      );
    }
    if (!data || data.length === 0) {
      return (
        <Box sx={{ p: 3, textAlign: 'center', alignItems: 'center' }}>
          <Typography variant="body1">No Data</Typography>
        </Box>
      );
    }

    return (
      <Stack spacing={2} sx={{ p: 2 }}>
        {data.map((row, index) => {
          const locked = row.status === 'APPROVED' || row.status === 'REJECTED';
          return (
            <Paper key={index} sx={{ p: 2 }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="body2" fontWeight={500}>
                    <strong>Status</strong>
                  </Typography>
                  <Chip
                    color={row.status === 'APPROVED' ? 'success' : row.status === 'REJECTED' ? 'error' : 'info'}
                    label={row.status}
                    size="small"
                    variant="light"
                  />
                </Stack>
                <Button size="small" variant="outlined" onClick={() => handleEdit(row)} disabled={locked}>
                  Edit
                </Button>
              </Stack>

              <Typography variant="body2">
                <strong>Applied From:</strong> {row.appliedFrom}
              </Typography>
              <Typography variant="body2">
                <strong>Applied To:</strong> {row.appliedTo}
              </Typography>
              <Typography variant="body2">
                <strong>Applied On:</strong> {row.appliedOn}
              </Typography>
              <Typography variant="body2">
                <strong>Leave Type:</strong> {row.leaveType}
              </Typography>
              <Typography variant="body2">
                <strong>Action Taken On:</strong> {row.actionedOn || '—'}
              </Typography>
              <Typography variant="body2">
                <strong>Action Taken By:</strong> {row.actionedBy || '—'}
              </Typography>
              <Typography variant="body2">
                <strong>Reason:</strong> {row.reason?.length > 20 ? row.reason.slice(0, 20) + '...' : row.reason || '—'}
              </Typography>
            </Paper>
          );
        })}
      </Stack>
    );
  };

  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });

  return (
    <>
      <Stack direction="row" justifyContent="flex-end" sx={{ mb: 1 }}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<EventAvailableIcon />}
          onClick={handleOpenRequest}
        >
          Request Leave
        </Button>
      </Stack>

      {isMobile ? (
        <MainCard content={false} title="Leave History">
          {renderMobileCards()}
        </MainCard>
      ) : (
        <ReactTable
          data={data}
          columns={columns}
          loading={loading}
          filters={[]}
        />
      )}

      {isMobile && (
        <Box sx={{ mt: 1 }}>
          <TablePagination
            getPageCount={() => {
              const known = totalCount > 0 ? Math.ceil(totalCount / pageSize) : 0;
              return Math.max(1, known, pageIndex + 1);
            }}
            setPageIndex={safeSetPageIndex}
            setPageSize={safeSetPageSize}
            getState={() => ({ pagination: { pageIndex, pageSize } })}
            initialPageSize={pageSize}
            labelRowsPerPage="Rows per page:"
          />
        </Box>
      )}

      <Dialog
        open={reasonOpen}
        onClose={closeReasonDialog}
        PaperProps={{ sx: { minWidth: 300, minHeight: 150 } }}
      >
        <DialogTitle sx={{ pr: 6 }}>
          Reason
          <IconButton aria-label="close" onClick={closeReasonDialog} sx={{ position: 'absolute', right: 8, top: 8 }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="body1" whiteSpace="pre-wrap" textAlign="center">
            {reasonText}
          </Typography>
        </DialogContent>
      </Dialog>

      <LeaveRequest open={openRequest} handleClose={handleCloseRequest} onSuccess={fetchLeaveData} />
      {editRowData && (
        <LeaveRequest open={openEdit} handleClose={handleCloseEdit} onSuccess={fetchLeaveData} initialData={editRowData} mode="edit" />
      )}
    </>
  );
}

