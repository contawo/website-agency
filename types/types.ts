export type Project = {
    authId: string,
    progress: string,
    completed: boolean,
    start: string,
    end: string,
    url: string
}

export type User = {
    authId: string,
    businessName: string,
    email: string,
    description: string
}

export type Error = {
    nameErr: string,
    descriptionErr: string,
    passwordErr: string
}