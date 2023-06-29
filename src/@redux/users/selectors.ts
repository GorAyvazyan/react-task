import type { UsersStore } from "./types";

export type State = { users: UsersStore };

const getUsers = (state: State) => state.users.users;
const getUserById = (state: State, userId: number) => {
  return state.users.users.find((user) => user.id === userId);
};

export default {
  getUsers,
  getUserById
};
