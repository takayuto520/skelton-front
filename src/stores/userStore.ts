import { defineStore } from "pinia";
import { ref } from "vue";
import type { User } from "@/types/User.type";

export const useUserStore = defineStore("user", () => {
  const currentUser = ref<User | null>(null);
  const users = ref<User[]>([]);

  const setCurrentUser = (user: User) => {
    currentUser.value = user;
  };

  const addUser = (user: User) => {
    users.value.push(user);
  };

  const fetchUsers = async () => {
    // API呼び出しのシミュレーション
    const mockUsers: User[] = [
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Smith", email: "jane@example.com" },
    ];
    users.value = mockUsers;
  };

  return {
    currentUser,
    users,
    setCurrentUser,
    addUser,
    fetchUsers,
  };
});
