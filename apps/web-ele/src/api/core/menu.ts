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
  isRoot: boolean = true
): RouteRecordRaw | null {
  // 只处理类型为 1 的菜单项（页面）
  if (menu.type !== 1) {
    return null;
  }

  // 规范化路径
  let normalizedPath = menu.frontend_url || "";

  if (!normalizedPath) {
    return null;
  }

  if (isRoot) {
    // 根菜单：使用完整路径
    if (!normalizedPath.startsWith("/")) {
      normalizedPath = "/" + normalizedPath;
    }
  } else {
    // 子菜单：只使用路径的最后一段（相对路径）
    const pathParts = normalizedPath.split("/");
    normalizedPath = pathParts[pathParts.length - 1] || "";
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
      .map((child) => convertMenuToRoute(child, false))
      .filter((route): route is RouteRecordRaw => route !== null);

    if (children.length > 0) {
      route.children = children;
      // 如果有子菜单，设置第一个子菜单为重定向目标
      if (children[0]?.path) {
        route.redirect = children[0].path;
      }
      // 有子菜单时，不设置 component，让 generateAccessible 自动处理
      // route.component 会被 generateAccessible 中的代码删除
    } else {
      // 没有子菜单时，设置实际的页面组件
      route.component = menu.frontend_url;
    }
  } else {
    // 没有子菜单时，设置实际的页面组件
    route.component = menu.frontend_url;
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
      .map((menu) => convertMenuToRoute(menu, true))
      .filter((route): route is RouteRecordRaw => route !== null);
    console.log("menuData", menuData);
    return menuData;
  } catch (error) {
    console.error("Failed to fetch menus:", error);
    return [];
  }
}
