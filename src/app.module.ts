import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from './schedule/schedule.module';
import { SuitModule } from './suit/suit.module';

@Module({
  imports: [ScheduleModule, SuitModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
