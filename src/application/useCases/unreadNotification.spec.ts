import { makeNotification } from '@test/factories/notificationsFactory';
import { inMemoryNotificationRepository } from '@test/repositories/inMemoryNotificationsRepository';
import { NotificationNotFound } from './errors/notificationNotFound';
import { UnreadNotification } from './UnreadNotification';

describe('Unread notification', () => {
  it('should be able to read a notification', async () => {
    const notificationsRepository = new inMemoryNotificationRepository();
    const unreadNotification = new UnreadNotification(notificationsRepository);

    const notification = makeNotification({
      readAt: new Date(),
    });

    await notificationsRepository.create(notification);

    await unreadNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0].readAt).toBe(null);
  });

  it('should not be able to read a non existing notification', async () => {
    const notificationsRepository = new inMemoryNotificationRepository();
    const unreadNotification = new UnreadNotification(notificationsRepository);

    expect(() => {
      return unreadNotification.execute({
        notificationId: 'invalid-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
