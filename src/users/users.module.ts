import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { DbModule } from 'src/db/db.module';
import { DbService } from 'src/db/db.service';

import { AccountModule } from 'src/account/account.module';
import { BlockListModule } from 'src/block-list/block-list.module';

@Module({
  imports: [DbModule, AccountModule, BlockListModule],
  providers: [UsersService, DbService],
  exports: [UsersService],
})
export class UsersModule {}
