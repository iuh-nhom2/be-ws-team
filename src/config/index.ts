// console.log('process', process.env.DATABASE_USERNAME);
export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  jwtSecret: process.env.JWT_SECRET,
  database: {
      type: 'mysql',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
      username: 'wsfeteam',
      password: 'wsfeteam',
      database: 'ws_feteam',
      entities: ['src/**/*.entity{.ts,.js}', 'dist/**/*.entity{.ts,.js}'],
      synchronize: !(process.env.NODE_ENV === 'production'),
      logging: true,
    },
});