<template>
  <div class="user-card">
    <h3>{{ user.name }}</h3>
    <p>{{ user.email }}</p>
    <button @click="updateUser">更新</button>
  </div>
</template>

<script setup lang="ts">
import type { User } from "@/types/User.type";

interface Props {
  user: User;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  updateUser: [user: User];
}>();

const updateUser = () => {
  emit("updateUser", props.user);
};
</script>

<style scoped>
.user-card {
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem 0;
}
</style>
