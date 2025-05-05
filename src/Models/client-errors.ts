export abstract class ClientError {
  public constructor(public status: number, public message: string) {}
}

export class RouteNotFoundError extends ClientError {
  public constructor(route: string) {
    super(404, `Route: ${route} not found`);
  }
}

export class ResorceNotFound extends ClientError {
  public constructor(address: string) {
    super(404, `${address} not valid address`);
  }
}
