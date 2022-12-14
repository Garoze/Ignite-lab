import { Notification } from '../entities/Notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
}
