import { baseRequestClient, requestClient } from "#/api/request";

export namespace AuthApi {
  /** 登录接口参数 */
  export interface LoginParams {
    code?: string;
    password?: string;
    username?: string;
  }

  /** 登录接口返回值 */
  export interface LoginResult {
    accessToken: string;
    token: string;
  }

  export interface RefreshTokenResult {
    data: string;
    status: number;
  }
}

/**
 * 登录
 */
export async function loginApi(data: AuthApi.LoginParams) {
  const response = await requestClient.post<{ token: string }>("/login", data);
  console.log("response:", response);
  // 将后端返回的 token 转换为前端需要的 accessToken 格式
  return {
    accessToken: response.token,
  };
}

/**
 * 刷新accessToken
 */
export async function refreshTokenApi() {
  return baseRequestClient.post<AuthApi.RefreshTokenResult>("/auth/refresh", {
    withCredentials: true,
  });
}

/**
 * 退出登录
 */
export async function logoutApi() {
  return baseRequestClient.post("/logout", {
    withCredentials: true,
  });
}

/**
 * 获取用户权限码
 */
export async function getAccessCodesApi() {
  return requestClient.get<string[]>("/auth/codes");
}
