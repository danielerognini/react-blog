export interface UserType {
    id: number
    name: string
    isAdmin: boolean
    email: string
    password: string
}

export interface AuthStorageType {
    user: UserType | undefined
}

export interface LoginPropsType {
    email: string,
    password: string
}