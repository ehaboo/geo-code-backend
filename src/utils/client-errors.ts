abstract class ClientError {
    public constructor(public status: number, public message: string) {}
}

export class RouteNotFoundError extends ClientError {
    public constructor(route: string) {
        super(404, `Route: ${route} not found`);
    }
}



