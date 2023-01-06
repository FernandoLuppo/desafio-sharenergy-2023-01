export interface IRandomUser {
    picture: {
        thumbnail: string
    }
    name: {
        first: string
        last: string
    }
    email: string
    login: {
        username:string
    }
    dob: {
        age: number
    }
}