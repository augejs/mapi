import { Module, GetLogger, ILogger, boot } from '@augejs/module-core';

import { WebServer } from '@augejs/koa';
import { Typeorm } from '@augejs/typeorm';
import { ScheduleManager } from '@augejs/schedule';

@WebServer({
  port: 5001
})
@Typeorm({
  name: 'boss',
  type: 'mysql',
  host: 'rm-uf6q042ewut07i6b82m.mysql.rds.aliyuncs.com',
  port: 3306,
  database: 'boss',
  username: 'huser',
  password: 'nKmjc3CT6aThlMer',
  synchronize: true,
  logging: false,
})
@ScheduleManager()
@Module()
class AppModule {

  @GetLogger()
  logger!: ILogger;

  async onInit() {
    this.logger.info('app onInit');
  }

  async onAppDidReady () {
    this.logger.info('app onAppDidReady');
  }
}

async function main() {
  await boot(AppModule);
}

main();
