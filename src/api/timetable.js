import { toast } from 'react-toastify';
import axiosServices from 'utils/axios';

export const FetchTimeTable = async (searchQuery = '', take = '100') => {
  try {
    let api = `/time-table?searchQuery=${searchQuery}&take=${take}`;
    const response = await axiosServices.get(api);
    return response.data.data;
  } catch (e) {
    console.error('Error fetching timetable:', e);
    toast.error(e.response?.data?.message || 'Failed to fetch timetable');
    throw e;
  }
};
