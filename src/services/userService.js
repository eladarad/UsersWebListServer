import axiosInstance from "../utils/axiosInstance.js";
import cache from "../utils/cache.js";
import User from "../models/User.js";

const apiBaseURL = "https://reqres.in/api";

const getUsers = async (page) => {
  const cacheKey = `users-page-${page}`;
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }
  const response = await axiosInstance.get(`/users?page=${page}`);
  cache.set(cacheKey, response.data);
  return response.data;
};

const getUser = async (id) => {
  const cacheKey = `user-${id}`;
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }
  const response = await axiosInstance.get(`/users/${id}`);
  cache.set(cacheKey, response.data.data);
  return response.data.data;
};

const createUser = async (newUser) => {
  try {

    const createdUser = await User.create(newUser);
    return createdUser;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create user");
  }
};


const updateUser = async (id, updatedUserData) => {
  try {
    const updatedUser = await User.findOneAndReplace({ id: id }, updatedUserData, { new: true });

    if (!updatedUser) {
      throw new Error("User not found");
    }


    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update user");
  }
};


const deleteUser = async (id) => {
  try {
    const deletedUser = await User.findOneAndDelete({ id: id });
    
    if (deletedUser) {
      return true;
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    console.error(error);
    throw new Error('Failed to delete user from database');
  }
};

export default { getUsers, getUser, createUser, updateUser, deleteUser };
