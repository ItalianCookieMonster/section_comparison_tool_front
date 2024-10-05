export type User = {
    email: string;
    password: string;
    confirm_password: string;
    full_name: string;
    username: string;
}

export type Account = {
    company_name?: string;
    role?: string;
    phone?: string;
}

export type UserWithAccount = User & Account;

export type UserLogin = {
    username: string;
    password: string;
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