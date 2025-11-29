import type { RouteRecordRaw } from "vue-router";

import { requestClient } from "#/api/request";

export namespace MenuApi {
  export interface MenuItem {
    id: number;
    type: number;
    name: string;
    backend_url: string;
    frontend_url: string;
    open: boolean;
    checked: boolean;
    children: MenuItem[] | null;
  }

  export interface MenuResponse {
    data: MenuItem[];
  }
}

/**
 * 将菜单项转换为路由记录
 */
function convertMenuToRoute(
  menu: MenuApi.MenuItem,
  parentPath?: string
): RouteRecordRaw | null {
  // 只处理类型为 1 的菜单项（页面）
  if (menu.type !== 1) {
    return null;
  }

  // 规范化路径
  let normalizedPath = menu.frontend_url;
  if (!normalizedPath.startsWith("/")) {
    if (parentPath) {
      const cleanParentPath = parentPath.endsWith("/")
        ? parentPath.slice(0, -1)
        : parentPath;
      normalizedPath = cleanParentPath + "/" + normalizedPath;
    } else {
      normalizedPath = "/" + normalizedPath;
    }
  }

  const route: any = {
    path: normalizedPath,
    name: normalizedPath.replace(/\//g, "-").replace(/^-/, ""),
    meta: {
      title: menu.name,
    },
  };

  // 如果有子菜单，递归转换
  if (menu.children && menu.children.length > 0) {
    const children = menu.children
      .map((child) => convertMenuToRoute(child, normalizedPath))
      .filter((route): route is RouteRecordRaw => route !== null);

    if (children.length > 0) {
      route.children = children;
      // 如果有子菜单，设置第一个子菜单为重定向目标
      if (children[0]?.path) {
        route.redirect = children[0].path;
      }
    }
  }

  return route;
}

/**
 * 获取用户所有菜单
 */
export async function getAllMenusApi() {
  try {
    const menuDataApi = await requestClient.get<MenuApi.MenuItem[]>("/menus");

    if (!menuDataApi || menuDataApi.length === 0) {
      return [];
    }

    // 将菜单数据转换为路由格式
    const menuData = menuDataApi
      .map((menu) => convertMenuToRoute(menu))
      .filter((route): route is RouteRecordRaw => route !== null);
    console.log("menuData", menuData);
    return menuData;
  } catch (error) {
    console.error("Failed to fetch menus:", error);
    return [];
  }
}
