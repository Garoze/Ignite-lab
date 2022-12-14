import { Content } from '../entities/Content';
import { Notification } from '../entities/Notification';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

export class SendNotification {
  async execute({
    recipientId,
    content,
    category,
  }: SendNotificationRequest): Promise<SendNotificationResponse> {
    const notification = new Notification({
      recipientId,
      category,
      content: new Content(content),
    });

    return {
      notification,
    };
  }
}
