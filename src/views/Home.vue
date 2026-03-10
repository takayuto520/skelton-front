<template>
  <div class="home">
    <h1>ホーム</h1>
    <p>ようこそ！ 今日の日付: {{ currentDate }}</p>
    <UserCard
      v-for="user in users"
      :key="user.id"
      :user="user"
      @update-user="handleUpdateUser"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import UserCard from "@/components/UserCard.vue";
import type { User } from "@/types/User.type";
import { formatDate, getCurrentDate } from "@/utils/dateUtils";

const users = ref<User[]>([
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
]);

const currentDate = formatDate(getCurrentDate());

const handleUpdateUser = (user: User) => {
  console.log("User updated:", user);
  console.log("Current date:", currentDate);
};
</script>

<style scoped>
.home {
  padding: 2rem;
}
</style>
