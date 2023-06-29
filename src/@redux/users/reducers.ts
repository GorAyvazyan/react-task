import types, { Payload, UsersStore } from "./types";

export const initialValues: UsersStore = {
  users: []
};

export default function (state: UsersStore = initialValues, { type, payload }: Payload) {
  switch (type) {
    case types.SET_USERS:
      return {
        ...state,
        users: payload
      };
    case types.UPDATE_USER:
      // eslint-disable-next-line no-case-declarations
      const { id, user } = payload;
      // eslint-disable-next-line no-case-declarations
      const updatedUsers = state.users.map((item) => {
        if (item.id === id) {
          return { ...item, ...user };
        }
        return item;
      });
      return { ...state, users: updatedUsers };
    case types.DELETE_USER:
      // eslint-disable-next-line no-case-declarations
      const newUsers = state.users.filter((user) => user.id !== payload.id);
      return {
        ...state,
        users: newUsers
      };
    default:
      return state;
  }
}
