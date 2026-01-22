import dotenv from 'dotenv'
dotenv.config();


const config = {
port: process.env.PORT || 4000,
databaseUrl: process.env.DATABASE_URL || '',
jwtSecret: process.env.JWT_SECRET || 'change_me',
nodeEnv: process.env.NODE_ENV || 'development',
};

export default config;