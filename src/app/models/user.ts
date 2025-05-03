export interface RegisterUser {
    email:string,
    password:string,
    repeatPassword:string
}

export interface RegisterResponse {
    token:string,
    user:RegisterUser
}
export interface LoginUser {
    email:string,
    password:string
}

export interface LoginUserResponse {
    token:string
}