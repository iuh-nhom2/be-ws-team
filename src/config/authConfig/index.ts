const JWT_KEY_ADMIN = "3,144444444412312321s"
export const authConfig = {
    name: {
        jwt: 'jwt',
        user: 'user',
        admin: 'admin',
    },
    secretKeys: {
        jwt: process.env.JWT_SECRET,
        user: process.env.JWT_SECRET,
        admin: JWT_KEY_ADMIN,
    }
}