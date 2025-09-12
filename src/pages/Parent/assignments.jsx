import React, { useState, useEffect, useMemo } from 'react';
import { IconButton, InputAdornment, Paper, ToggleButton, ToggleButtonGroup, Tooltip, useMediaQuery } from '@mui/material';
import { FetchAllAssignments, FetchAssignmentDetails } from 'api/assignments';
import { toast } from 'react-toastify';
import {
  Typography,
  Box,
  Button,
  Grid,
  TextField
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import TablePagination from 'components/third-party/react-table/TablePagination';
import SearchIcon from '@mui/icons-material/Search';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import AssignmentDialog from './assignmentDialog';
import ReactTable from 'components/reactTable';
import { Eye } from 'iconsax-react';

const subjectColors = {
  Rhymes: '#FF9A5A',
  Science: '#4B8B68',
  History: '#2E5A84',
  Islamiyat: '#C89200',
  Hindi: '#3B3B3B',
  English: '#3E63AF',
  Mathematics: '#714AC6',
  Urdu: '#337367',
  SocialScience: '#E18E1E',
  Arabic: '#E18E1F'
};
const Assignments = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [loading, setLoading] = useState(true);
  const [modalLoading, setModalLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [assignments, setAssignments] = useState([]);
  const [activeTab, setActiveTab] = useState('ongoing');
  const [searchText, setSearchText] = useState('');
  const [persistedSearchText, setPersistedSearchText] = useState('');
  const [debouncedSearchText, setDebouncedSearchText] = useState(searchText);
  const [rows, setRows] = useState([]);
  const [loadingMap, setLoadingMap] = useState({});
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [totalPageCount, setTotalPageCount] = useState(0);
  const switchNames = 'fromAssignments';

  const fetchAssignments = async () => {
    setLoading(true);
    try {
      const status = activeTab === 'ongoing' ? 'ongoing' : 'completed';
      const response = await FetchAllAssignments(pageIndex + 1, pageSize, debouncedSearchText.trim(), 'asc', status);
      let fetchedAssignments = response?.data?.data || [];
      if (debouncedSearchText.trim()) {
        fetchedAssignments = fetchedAssignments.filter((assignment) => {
          const lowerSearch = debouncedSearchText.toLowerCase();
          return assignment.title.toLowerCase().includes(lowerSearch) || assignment.subject.name.toLowerCase().includes(lowerSearch);
        });
      }

      setAssignments(fetchedAssignments);
      setTotalPageCount(response?.data?.meta?.pageCount || 0);
    } catch (error) {
      console.error('Error fetching assignments:', error);
      toast.error('Failed to fetch assignments. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  const handleOpenModal = async (assignmentId, assignmentData) => {
    try {
      setModalLoading(true);
      setOpenModal(true);
      const response = await FetchAssignmentDetails(assignmentId);
      setSelectedAssignment({
        ...response,
        ...assignmentData
      });
    } catch (error) {
      console.error('Failed to fetch assignment details:', error);
      toast.error('Failed to load assignment details.');
      setOpenModal(false);
    } finally {
      setModalLoading(false);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedAssignment(null);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 400); 

    return () => clearTimeout(handler);
  }, [searchText]);

  useEffect(() => {
    fetchAssignments();
  }, [activeTab, pageIndex, pageSize, debouncedSearchText]);

  useEffect(() => {
    const formattedRows = assignments.map((assignment) => ({
      id: assignment.id,
      subject: assignment.subject.name,
      title: assignment.title,
      assigned_by: `${assignment.addedBy.user.firstName} ${assignment.addedBy.user.lastName}`,
      assigned_on: new Date(assignment.addedBy.createdAt).toLocaleDateString(),
      due_date: new Date(assignment.dueDate).toLocaleDateString(),
      actions: assignment 
    }));
    setRows(formattedRows);
  }, [assignments]);

  const handleDownload = async (url, title) => {
    if (!url) {
      toast.error('No attachment available.');
      return;
    }

    try {
      const response = await fetch(url, { mode: 'cors' });
      if (!response.ok) throw new Error('Failed to fetch file');

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = title || url.split('/').pop(); 
      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Download failed:', error);
      toast.error('Failed to download attachment.');
    }
  };

  const handleBulkDownload = async (urls, titlePrefix) => {
    if (!urls) {
      toast.error('No attachments available.');
      return;
    }

    const urlList = urls.split(',');
    for (let i = 0; i < urlList.length; i++) {
      try {
        const url = urlList[i].trim();
        const response = await fetch(url, { mode: 'cors' });
        if (!response.ok) throw new Error('Failed to fetch file');

        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = `${titlePrefix || 'Attachment'}-${i + 1}-${url.split('/').pop()}`;
        document.body.appendChild(link);
        link.click();
        link.remove();

        window.URL.revokeObjectURL(blobUrl);
      } catch (error) {
        console.error(`Download ${i + 1} failed:`, error);
        toast.error(`Failed to download file ${i + 1}`);
      }
    }
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchText(value);
    setPersistedSearchText(value);
  };


  const columns = useMemo(
    () => [
      { header: 'Subject', accessorKey: 'subject' },
      { header: 'Title',meta:{className:'cell-center'}, accessorKey: 'title' },
      { header: 'Assigned By', accessorKey: 'assigned_by' },
      { header: 'Assigned On', accessorKey: 'assigned_on' },
      { header: 'Due date', accessorKey: 'due_date' },
     {
  header: () => <Box sx={{ width: '100%', textAlign: 'center' }}>Actions</Box>,
  accessorKey: 'actions',
  enableSorting: false,
  meta: { className: 'cell-center' },

  cell: ({ row }) => {
    const assignment = row.original.actions;       
    if (!assignment) return null;

    return (
      <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Tooltip title="Download" arrow>
          <IconButton
            aria-label="download assignment"
            size="small"
            color="primary"
            onClick={(e) => {
              e.stopPropagation();                   
              handleDownload(assignment.attachmentUrl, assignment.title);
            }}
          >
            <CloudDownloadIcon size="20" variant="Bold" />
          </IconButton>
        </Tooltip>

        <Tooltip title="View details" arrow>
          <IconButton
            aria-label="view assignment"
            size="small"
            color="primary"
            onClick={(e) => {
              e.stopPropagation();             
              handleOpenModal(assignment.id, {
                addedBy: `${assignment?.addedBy?.user?.firstName ?? ''} ${assignment?.addedBy?.user?.lastName ?? ''}`
              });
            }}
          >
            <Eye size="20" variant="Bold" />
          </IconButton>
        </Tooltip>
      </Box>
    );
  }
}

    ],
    [loadingMap, handleDownload, handleOpenModal]
  );
  const assignedByOptions = useMemo(
    () => ['ALL', ...Array.from(new Set(rows.map((d) => d.assigned_by).filter(Boolean)))],
    [rows]
  );
  const assignedOnOptions = useMemo(
    () => ['ALL', ...Array.from(new Set(rows.map((d) => d.assigned_on).filter(Boolean)))],
    [rows]
  );
   const subjectOptions = useMemo(
    () => ['ALL', ...Array.from(new Set(rows.map((d) => d.subject).filter(Boolean)))],
    [rows]
  ); 
  const titleOptions = useMemo(
    () => ['ALL', ...Array.from(new Set(rows.map((d) => d.title).filter(Boolean)))],
    [rows]
  );
    const dueDateOptions = useMemo(
    () => ['ALL', ...Array.from(new Set(rows.map((d) => d.title).filter(Boolean)))],
    [rows]
  );
  const filters = useMemo(
    () => [
      { type: 'global', key: 'q', placeholder: 'Search Assignments' },
      { type: 'select', id: 'assignedBy', label: 'Assigned By', options: assignedByOptions, allToken: 'ALL' },
      { type: 'select', id: 'assigned_on', label: 'Assigned On', options: assignedOnOptions, allToken: 'ALL' },
      { type: 'select', id: 'subject', label: 'Subject', options: subjectOptions, allToken: 'ALL' },
      { type: 'select', id: 'title', label: 'Title', options: titleOptions, allToken: 'ALL' },
      { type: 'select', id: 'due_date', label: 'Due date', options: dueDateOptions, allToken: 'ALL' },
      { type: 'sort' }
    ],
    [assignedByOptions, assignedOnOptions, subjectOptions, titleOptions, dueDateOptions]
  );
  return (
    <div>
      <Paper
        sx={{
          p: { xs: 2, sm: 3 },
          mb: 3,
          borderRadius: 2,
          boxShadow: 2,
          backgroundColor: 'background.paper'
        }}
      >
        <Grid container spacing={2} alignItems="center" display={'block'}>
          <Grid item xs={12} md={6}>
            <ToggleButtonGroup
              value={activeTab}
              exclusive
              onChange={(e, newValue) => {
                if (newValue !== null) {
                  setActiveTab(newValue);
                  setPageIndex(0);
                }
              }}
              size="small"
              sx={{
                backgroundColor: 'background.default',
                borderRadius: 2,
                width: isMobile ? '100%' : 'auto',
                boxShadow: 1,
                '& .MuiToggleButton-root': {
                  px: 2,
                  py: 1,
                  textTransform: 'none',
                  border: 'none',
                  '&.Mui-selected': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'primary.dark'
                    }
                  }
                }
              }}
            >
              <ToggleButton value="ongoing" sx={{ width: isMobile ? '50%' : 'auto' }}>
                <PendingActionsIcon fontSize="small" sx={{ mr: 1 }} />
                Ongoing
              </ToggleButton>
              <ToggleButton value="completed" sx={{ width: isMobile ? '50%' : 'auto' }}>
                <CheckCircleIcon fontSize="small" sx={{ mr: 1 }} />
                Completed
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
                <Grid item xs={12} md={12} sx={{ mt: { xs: 2, md: 0 } }}>
        <ReactTable data={rows} columns={columns} loading={loading} filters={filters}/></Grid>
      
   
       {assignments.length > 10 && (
            <Box mt={3}>
              <TablePagination
                getPageCount={() => Math.ceil(totalPageCount)}
                setPageIndex={setPageIndex}
                setPageSize={(newSize) => {
                  setPageSize(newSize);
                }}
                getState={() => ({ pagination: { pageIndex, pageSize } })}
                initialPageSize={pageSize}
                labelRowsPerPage="Assignments Per Page"
              />
            </Box>
          )}
        </Grid>
      </Paper>

 

      <AssignmentDialog
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        modalLoading={modalLoading}
        selectedAssignment={selectedAssignment}
        handleDownload={handleDownload}
        handleBulkDownload={handleBulkDownload}
      />
    </div>
  );
};

export default Assignments;
