export type Project = {
    id: string,
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