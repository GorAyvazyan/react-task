export default {
  SET_USERS: "SET_USERS",
  UPDATE_USER: "UPDATE_USER",
  DELETE_USER: "DELETE_USER"
};

export type UserType = {
  id: number;
  name: string;
  email: string;
  photo: string;
  location: string;
  registeredDate: string;
  lastActiveDate: string;
  disabled: boolean;
};
export type UsersStore = {
  users: Array<UserType>;
};

export type Payload = {
  type: string;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  payload?: any;
};
