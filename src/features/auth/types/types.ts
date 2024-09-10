export type User = {
    email: string;
    password: string;
    full_name: string;
    username: string;
}

export type UserLogin = {
    email: string;
    password: string;
}

export type Account = {
    user: string;
    company_name?: string;
    job_title?: string;
    phone_number?: string;
}


// export type RegisterResponse = {
//     user: {
//         id: string;
//         username: string;
//         email: string;
//         full_name?: string;  
//         verified?: boolean;
//     };
//     tokens: {
//         refresh: string;
//         access: string;
//     };
// }

// export type AccountCreationResponse = {
//     user: string;
//     phone_number: string;
//     company_name?: string;
//     job_title?: string;
// }