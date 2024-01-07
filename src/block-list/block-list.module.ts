import { Module } from '@nestjs/common';
import { BlockListService } from './block-list.service';
import { BlockListController } from './block-list.controller';
import { DbModule } from 'src/db/db.module';
import { DbService } from 'src/db/db.service';

@Module({
  imports: [DbModule],
  providers: [BlockListService, DbService],
  controllers: [BlockListController],
  exports: [BlockListService],
})
export class BlockListModule {}
