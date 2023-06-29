import { useCallback } from "react";
import { useDispatch } from "react-redux";
import type { UserType } from "./types";
import types from "./types";

export default function () {
  const dispatch = useDispatch();

  const setUsers = useCallback(
    (users: Array<UserType>) => {
      dispatch({ type: types.SET_USERS, payload: users });
    },
    [dispatch]
  );

  const updateUser = useCallback(
    (payload: { id: number; user: Partial<UserType> }) => {
      dispatch({ type: types.UPDATE_USER, payload });
    },
    [dispatch]
  );
  const deleteUser = useCallback(
    (payload: { id: number }) => {
      dispatch({ type: types.DELETE_USER, payload });
    },
    [dispatch]
  );
  return {
    setUsers,
    updateUser,
    deleteUser
  };
}
