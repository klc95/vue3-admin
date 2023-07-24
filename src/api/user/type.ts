// 登录接口需要携带参数ts类型
export interface LoginFormData {
  username: string;
  password: string;
}

// 定义接口返回数据类型
export interface LoginResponseData  {
  code: number;
  data: {
    token?: string;
    message: string;
  }
}

interface UserInfo {
  userId: number;
  avatar: string;
  username: string;
  password:string;
  desc: string;
  roles: string[];
  buttons: string[];
  routes: string[];
  token: string;
}

interface User {
  checkUser: UserInfo;
}

// 定义服务器返回用户信息相关的数据类型
export interface UserInfoResponseData {
  code: number;
  data: User;
}