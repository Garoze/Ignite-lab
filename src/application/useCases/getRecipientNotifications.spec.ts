import { makeNotification } from '@test/factories/notificationsFactory';
import { inMemoryNotificationRepository } from '@test/repositories/inMemoryNotificationsRepository';
import { GetRecipientNotifications } from './GetRecipientNotifications';

describe('Get recipient notifications', () => {
  it('should be able to get a recipient notifications', async () => {
    const notificationsRepository = new inMemoryNotificationRepository();
    const countRecipientNotifications = new GetRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
    );

    const { notifications } = await countRecipientNotifications.execute({
      recipientId: 'recipient-1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipient-1' }),
        expect.objectContaining({ recipientId: 'recipient-1' }),
      ]),
    );
  });
});
