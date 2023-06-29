export const USER_CURRENT_PAGE = 1;
export const USER_PAGE_SIZE = 10;

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
