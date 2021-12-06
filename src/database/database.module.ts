import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DATABASE_HOST'),
        port: Number(configService.get('DATABASE_PORT')),
        username: 'wsfeteam',
        password: 'wsfeteam',
        database: 'ws_feteam',
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: !(process.env.NODE_ENV.trim() === 'production'),
        logging: true,
      }),
    })
  ]
})
export class DatabaseModule { }
