declare module "@api.mockAPI" {
  type GetUsersResObj = Array<{
    id: string;
    name: string;
    avatar: string;
    gender: string;
    userAgent: string;
  }>;
}
