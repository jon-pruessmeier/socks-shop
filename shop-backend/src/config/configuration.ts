export default () => ({
  database: {
    type: 'postgres',
    host: process.env.DB_HOST,
    // @ts-ignore
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
  },
});
