import { auth } from "@clerk/nextjs/server";
const adminIds = [
    "user_2hHtGCVjwjXiBEtrvOXT6gRjNRL",
];

export const isAdmin = () => {
    const { userId } = auth();

    if (!userId) {
        return false;
    };

    // give access to only these users
     return adminIds.indexOf(userId) !== -1;
    
    // give access to everybody
    // return true
};