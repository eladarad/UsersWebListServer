import userService from "../services/userService.js";

export const getUsers = async (req, res, next) => {
  try {
    const page = req.params.page;
    const users = await userService.getUsers(page);
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await userService.getUser(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const newUser = req.body;
    const createdUser = await userService.createUser(newUser);
    res.status(201).json(createdUser);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedUserData = req.body;
    const updatedUser = await userService.updateUser(parseInt(id), updatedUserData);
    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await userService.deleteUser(parseInt(id));
    res.json({ message: "User deleted successfully", deleted });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
