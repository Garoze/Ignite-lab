import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/NotificationsRepository';
import { NotificationNotFound } from './errors/notificationNotFound';

interface UnreadNotificationRequest {
  notificationId: string;
}

type UnreadNotificationResponse = void;

@Injectable()
export class UnreadNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute({
    notificationId,
  }: UnreadNotificationRequest): Promise<UnreadNotificationResponse> {
    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.unread();

    await this.notificationsRepository.save(notification);
  }
}
