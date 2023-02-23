import { UseQueryResult } from "@tanstack/react-query";

export interface UserInfoData {
    getUserInfo: UseQueryResult<object, undefined>;
}