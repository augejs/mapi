import { Provider, GetLogger, ILogger, IScanNode, Value } from '@augejs/module-core';
import { Schedule } from '@augejs/schedule';
import ms from 'ms';

const DEFAULT_TICK_CRON = '*/4 * * * * *`';

@Provider()
export class EngineService {

  @GetLogger()
  logger!: ILogger;

  @Value('tickTimeWindowSize')
  tickTimeWindowSize!: string;

  @Schedule((scanNode: IScanNode) => (scanNode.getConfig('tickCronExpress') || DEFAULT_TICK_CRON))
  async tick() {
    this.logger.info('every20Sec tick');

    const tickTimeWindowSizeMS: number = ms(this.tickTimeWindowSize);


  }
}
