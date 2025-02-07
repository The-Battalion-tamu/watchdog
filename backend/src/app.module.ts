import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './articles/article.entity';
import { Source } from './sources/source.entity';
import * as dotenv from 'dotenv';
import { Tag } from './tags/tag.entity';

dotenv.config({path: '../.env' });

@Module({
  
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true, 
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    TypeOrmModule.forFeature([Article, Source, Tag]), 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}