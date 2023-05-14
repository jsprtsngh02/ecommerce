import bcrypt from 'bcryptjs'
const Users = [
    {
        name : 'Jaspreet Singh',
        email : 'jaspreet@gmail.com',
        password : bcrypt.hashSync('jaspreet',12),
        isAdmin : true
    },
    {
        name : 'Nitish Tulsian',
        email : 'nitish@gmail.com',
        password : bcrypt.hashSync('nitish',12),
        isAdmin : true
    }
    
]
export default Users