import axios from 'axios';

// Function to fetch users
export const getUsers = async () => {
  try {
    const response = await axios.get('https://dummyjson.com/users');
    return response.data.users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
