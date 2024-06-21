import { AreaCode, Authority, GetMultipleWithPagination, User } from "./reusables";

//type for get user profile, get user profile by username, and get user profile by id 
export type UserData = User & {
  avatarUrl: string;
  hasProfilePicture: boolean;
  confirmedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  areaCodes: AreaCode[];
  authorities: Authority[];
};

//type for get all users
export type Users = GetMultipleWithPagination & {
  content: UserData[]
}
