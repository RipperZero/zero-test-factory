declare module "@api.testFactory" {
  type FindAllUserResObj = Array<{
    id: number;
    idcard: string;
    username: string;
    password: string;
    salt: string;
    email: string;
    mobile: string;
    valid: number;
    createdUser: string;
    modifiedUser: string;
    createdTime: string;
    modifiedTime: string;
  }>;
}
