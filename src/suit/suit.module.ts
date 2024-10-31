import { Module } from '@nestjs/common';
import { SuitController } from './suit.controller';

@Module({
  controllers: [SuitController]
})
export class SuitModule {}
