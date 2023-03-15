import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private configService: ConfigService) {}

  @Get()
  getHello(): Record<string, string> {
    const server = this.configService.get<string>('HOSTNAME');
    return { message: 'Hello there!', server };
  }

  @Get('/rick')
  async getImageUrl(): Promise<string> {
    const client = new S3Client({ region: 'eu-central-1' });
    const command = new GetObjectCommand({
      Bucket: 'maniolek-1',
      Key: 'rick-astley.jpg',
    });
    return await getSignedUrl(client, command, { expiresIn: 60 });
  }
}
