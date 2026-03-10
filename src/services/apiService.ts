import type { User, ApiResponse } from "@/types/User.type";

const API_BASE_URL = "https://api.example.com";

/**
 * ユーザー一覧を取得する
 * @returns ユーザー一覧
 */
export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data: ApiResponse<User[]> = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

/**
 * ユーザーを取得する
 * @param id - ユーザーID
 * @returns ユーザー情報
 */
export const fetchUser = async (id: number): Promise<User> => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }
    const data: ApiResponse<User> = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
