import { ForbiddenError } from 'apollo-server-express';
export class NotAuthenticatedError extends ForbiddenError {
  constructor(message?: string) {
    super(message || 'User not authenticated');

    Object.defineProperty(this, 'name', { value: 'ForbiddenError' });
  }
}
