export interface SignUpUserInputDataType {
    name: string,
    surname: string,
    email: string,
    password: string,
}

export interface LogInUserInputDataType {
    email: string,
    password: string,
}

export interface UserSignUpRequestType {
    firstName: string,
    lastName: string,
    password: string,
    email: string
}

export interface UserLogInRequestType {
    password: string,
    email: string
}

export interface UserLogInResponseType {
    firstName: string,
    lastName: string,
    password: string,
    email: string
}

export interface SignUpPayloadType {
    payload: SignUpUserInputDataType,
}

export interface LogInPayloadType {
    payload: LogInUserInputDataType,
}
