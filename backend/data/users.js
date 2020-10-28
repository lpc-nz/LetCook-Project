import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('Chung@123', 10),
        isAdmin: true
    },
    {
        name: 'chung',
        email: 'chung@example.com',
        password: bcrypt.hashSync('123456', 10),

    },
    {
        name: 'lee',
        email: 'lee@example.com',
        password: bcrypt.hashSync('123456', 10),

    }
]

export default users