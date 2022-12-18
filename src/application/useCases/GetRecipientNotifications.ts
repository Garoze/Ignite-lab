import { Notification } from '@application/entities/Notification';
import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/NotificationsRepository';

interface GetRecipientNotificationsRequest {
  recipientId: string;
}

interface GetRecipientNotificationsResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute({
    recipientId,
  }: GetRecipientNotificationsRequest): Promise<GetRecipientNotificationsResponse> {
    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipientId);

    return {
      notifications,
    };
  }
}
