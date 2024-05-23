import mongoose from 'mongoose';
import dotenv from 'dotenv';
import axios from 'axios';
import User from '../models/User.js';

dotenv.config();


const fetchUsers = async () => {
  try {
    const response = await axios.get('https://reqres.in/api/users?per_page=12');
    return response.data.data; 
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return [];
  }
};

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
    });

    console.log('MongoDB connected successfully');
    await User.deleteMany({});
    console.log('Existing users deleted from the database');

    const usersData = await fetchUsers();
    const users = usersData.map((userData, index) => ({
      id: index + 1,
      firstName: userData.first_name,
      lastName: userData.last_name,
      email: userData.email
    }));

    const result = await User.insertMany(users);
    console.log(`${result.length} users loaded into the database`);
  } catch (err) {
    console.error('Failed to connect to MongoDB or load users', err);
    process.exit(1);
  }
};

export default connectDB;
