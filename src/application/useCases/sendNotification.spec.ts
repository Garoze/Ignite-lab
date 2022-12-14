import { SendNotification } from './SendNotification';

describe('SendNotification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      recipientId: 'recipientId',
      content: 'Você recebeu uma nova solicitação de amizade',
      category: 'social',
    });

    expect(notification).toBeTruthy();
  });
});
