import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { Entry } from '../entry/entry.entity';
import { serverApp1680124048202 } from '../../migrations/1680124048202-server-app';

const dataSourceFactory = (configService: ConfigService) =>
  new DataSource({
    type: 'mysql',
    host: configService.get('DB_HOST'),
    port: +configService.get('DB_PORT'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_NAME'),
    entities: [Entry],
    migrations: [serverApp1680124048202],
  });

export default dataSourceFactory;
