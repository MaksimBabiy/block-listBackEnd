import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { DbModule } from 'src/db/db.module';
import { DbService } from 'src/db/db.service';

@Module({
  imports: [DbModule],
  controllers: [AccountController],
  providers: [AccountService, DbService],
  exports: [AccountService],
})
export class AccountModule {}
