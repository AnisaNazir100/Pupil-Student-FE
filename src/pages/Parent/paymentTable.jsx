import React, { useEffect, useMemo, useState } from 'react';
import { Box, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FetchPaymentDetails } from 'api/allPayments';
import LogoImageLoader from 'components/PupilLoader';
import ReactTable from 'components/reactTable';

const PaymentTable = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [loading, setLoading] = useState(true);
  const [payments, setPayments] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [pageIndex, setPageIndex] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const id = sessionStorage.getItem('studentId');
        if (!id) throw new Error('No student ID found.');

        const resp = await FetchPaymentDetails(id, pageIndex+1, pageSize,searchQuery);
        const list = Array.isArray(resp?.data) ? resp.data : [];

        setPayments(list);
      } catch (e) {
        console.error('Error fetching payment details:', e);
        setPayments([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const rows = useMemo(
    () =>
      payments.map((p) => ({
        id: p.id || `${p.createdAt}-${p.amountPaid}`,
        createdAt: p.createdAt, 
        amountPaid: Number(p.amountPaid ?? 0),
        amountDue: Number(p.amountDue ?? 0),
        balance: Number(p.balance ?? 0),
        mode: p.mode ?? '',
        remarks: p.remarks ?? ''
      })),
    [payments]
  );

  const columns = useMemo(
    () => [
      {
        header: 'Date',
        accessorKey: 'createdAt',
        cell: ({ getValue }) => {
          const v = getValue();
          const d = v ? new Date(v) : null;
          return d ? d.toLocaleDateString() : '-';
        }
      },
      {
        header: 'Amount Paid',
        accessorKey: 'amountPaid',
        meta: { className: 'cell-right' },
        cell: ({ getValue }) => `₹${Number(getValue() ?? 0).toLocaleString()}`
      },
      {
        header: 'Amount Due',
        accessorKey: 'amountDue',
        meta: { className: 'cell-right' },
        cell: ({ getValue }) => `₹${Number(getValue() ?? 0).toLocaleString()}`
      },
      {
        header: 'Balance',
        accessorKey: 'balance',
        meta: { className: 'cell-right' },
        cell: ({ getValue }) => `₹${Number(getValue() ?? 0).toLocaleString()}`
      },
      { header: 'Mode', accessorKey: 'mode' },
      { header: 'Remarks', accessorKey: 'remarks' }
    ],
    []
  );

  const modeOptions = useMemo(
    () => ['ALL', ...Array.from(new Set(rows.map((r) => r.mode).filter(Boolean)))],
    [rows]
  );

  const filters = useMemo(
    () => [
      { type: 'global', key: 'q', placeholder: 'Search payments' },
      { type: 'select', id: 'mode', label: 'Mode', options: modeOptions, allToken: 'ALL' }
    ],
    [modeOptions]
  );

  if (loading) {
    return (
      <Box
        sx={{
          width: '100%',
          height: '70vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <LogoImageLoader />
      </Box>
    );
  }

  return (
    <Paper elevation={0} sx={{ p: { xs: 1, md: 0 } }}>
      <ReactTable data={rows} columns={columns} loading={loading} filters={filters} />
    </Paper>
  );
};

export default PaymentTable;
