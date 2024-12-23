import {TStatus, TUser} from "../../common/abstracts/types";

export type TLogin = {
    email: string,
    password: string,
}

export type TAuthState = {
    auth: TUser | null,
    error: string | null,
    status: TStatus,
};

export type AuthsError = {
    message: string;
};
