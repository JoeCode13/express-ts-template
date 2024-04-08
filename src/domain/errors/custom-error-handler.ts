import { Response } from 'express';

export class CustomError extends Error {
  constructor(
    public readonly statusCode: number,
    public readonly message: string,
  ) {
    super(message);
  }

  static badRequest(message: string) {
    return new CustomError(400, message);
  }

  static unauthorized(message: string) {
    return new CustomError(401, message);
  }

  static forbidden(message: string) {
    return new CustomError(403, message);
  }

  static notFound(message: string) {
    return new CustomError(404, message);
  }

  static conflict(message: string) {
    return new CustomError(409, message);
  }

  static internalServer(message: string = 'Internal Server Error') {
    return new CustomError(500, message);
  }

  // Add more error types as needed

  /**
   *
   * @param error
   * @param res Gives the response to the client in case of errors.
   * @returns Response
   */
  static handleError(error: unknown, res: Response) {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message, statusCode: error.statusCode });
    }

    return res.status(500).json({ error: 'Internal server error, check logs' });
  }
}
