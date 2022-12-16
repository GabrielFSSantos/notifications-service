import { Notification } from '../entities/Notification/notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
}
