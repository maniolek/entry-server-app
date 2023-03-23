import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { Entry } from './entry/entry.entity';
import { EntryModule } from './entry/entry.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: 'adminadmin',
      database: 'mydb1',
      // username: 'root',
      // password: 'test1234',
      // database: 'invoices_app',
      entities: [Entry],
    }),
    EntryModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
})
export class AppModule {}
