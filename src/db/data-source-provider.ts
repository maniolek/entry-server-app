import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import dataSourceFactory from './data-source-factory';

config();

const configService = new ConfigService();
export default dataSourceFactory(configService);
