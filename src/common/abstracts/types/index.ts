export type TUser = {
    id: number,
    name: string,
    email: string,
    password: string,
    avatar: string,
}

export type TStatus = "loading" | "idle" | "failed" | "succeeded"