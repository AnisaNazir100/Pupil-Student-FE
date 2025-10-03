import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { AttachFile } from '@mui/icons-material';
import axiosServices from 'utils/axios';
const DocumentUpload = ({ fetchUrl }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const uploadDocument = async (attachment) => {
    if (!attachment) return;
    const formData = new FormData();
    formData.append('attachment', attachment);
    setLoading(true);
    setError(null);
    try {
      const response = await axiosServices.post('/upload/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      if (response?.data?.data?.url) {
        fetchUrl(response.data.data.url, attachment);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (err) {
      console.error('Upload error:', err);
      setError(err.response?.data?.message || 'Failed to upload document. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      uploadDocument(selectedFile);
    }
  };

  return (
    <div>
      <Button variant="outlined" component="label" startIcon={<AttachFile />} disabled={loading}>
        {loading ? 'Uploading...' : 'Upload Document'}
        {loading && <CircularProgress size={20} sx={{ ml: 1 }} />}
        <input type="file" hidden accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" onChange={handleFileChange} disabled={loading} />
      </Button>

      {error && (
        <Alert severity="error" sx={{ mt: 1 }}>
          {error}
        </Alert>
      )}
    </div>
  );
};

export default DocumentUpload;