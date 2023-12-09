import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  onModuleDestroy() {
    this.$disconnect();
  }

  enableShutDownHooks(app: INestApplication) {
    process.on('SIGTERM', async () => {
      await this.onModuleDestroy();
      await app.close();
      process.exit(0);
    });
  }
}
