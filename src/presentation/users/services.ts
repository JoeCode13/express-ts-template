import { CustomError, User } from '../../domain';

export class UserService {
  public async getUsers() {
    const users: User[] = await this.doRequest('users');

    return users.map(({ address, company, ...restUser }) => restUser);
  }

  public async getUserById(id: string) {
    const userInfo = await this.doRequest(`users/${id}`);
    if (Object.keys(userInfo).length === 0) {
      throw CustomError.notFound('Users not found');
    }
    return userInfo;
  }

  private async doRequest(url: string) {
    try {
      const domain = 'https://jsonplaceholder.typicode.com';

      const data = await fetch(`${domain}/${url}`);

      const response = await data.json();

      return response;
    } catch (error: any) {
      throw CustomError.internalServer(error.message);
    }
  }
}
