<script setup>
const bgColor = useIconColorBg();
const iconColor = bgColor || "bg-indigo-500";
</script>

<template>
  <div>
    <svg
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      class="w-8 h-8 text-white p-2 rounded-full"
      :class="iconColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    </svg>
  </div>
</template>
