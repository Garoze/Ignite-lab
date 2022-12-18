import { CancelNotification } from '@application/useCases/CancelNotification';
import { CountRecipientNotifications } from '@application/useCases/CountRecipientNotifications';
import { GetRecipientNotifications } from '@application/useCases/GetRecipientNotifications';
import { ReadNotification } from '@application/useCases/ReadNotification';
import { UnreadNotification } from '@application/useCases/UnreadNotification';
import { Module } from '@nestjs/common';
import { SendNotification } from '../../application/useCases/SendNotification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
