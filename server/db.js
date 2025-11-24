import { createPool } from 'mysql2/promise'

export const pool = createPool({
    host: '192.168.1.11',
    port: 3306,
    user: 'usr_usuario',
    password: 'Ucc2025*',
    database: 'tasksdb'
})


