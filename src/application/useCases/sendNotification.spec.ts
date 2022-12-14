import { inMemoryNotificationRepository } from '../../../test/repositories/inMemoryNotificationsRepository';
import { SendNotification } from './SendNotification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new inMemoryNotificationRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      recipientId: 'recipientId',
      content: 'Você recebeu uma nova solicitação de amizade',
      category: 'social',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
