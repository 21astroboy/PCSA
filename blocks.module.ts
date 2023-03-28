import { Module } from '@nestjs/common';
import { BlockController } from './block.controller';
import { Block } from './blocks.entity';
import { BlocksService } from './blocks.service';
import { DatasourceModule } from '../datasource/datasource.module';

@Module({
  controllers: [BlockController],
  providers: [BlocksService],
  imports:[DatasourceModule],
})
export class BlocksModule {}
