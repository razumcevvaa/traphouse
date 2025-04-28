<template>
  <div class="social-container">
    <a class="social-link" href="https://vk.com/traphouserussia" target="_blank" rel="noopener noreferrer">
      <img src="/public/vk.png" alt="Вконтакте" width="150" height="150">
    </a>
    <a class="social-link" href="https://www.instagram.com/traphouse.sochi?igsh=aWE1ajZscnpnZmE=" target="_blank" rel="noopener noreferrer">
      <img src="/public/inst.png" alt="Instagram" width="150" height="150">
    </a>
    <a class="social-link" href="https://t.me/traphouserussia" target="_blank" rel="noopener noreferrer">
      <img src="/public/tg.png" alt="Telegram" width="150" height="150">
    </a>
  </div>
</template>

<script setup lang="ts">
// Логика компонента (если нужна)
</script>

<style scoped>
.social-container {
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 10px 20px 20px 20px;
}

.social-link {
  display: block;
  width: 60px;
  height: 60px;
  transition: transform 0.3s ease;
}

.social-link:hover {
  transform: scale(1.05);
}

.social-link img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
/* Десктоп версия */
@media (min-width: 768px) {
  .social-link {
  width: 100px;
  height: 100px;
}
}
</style>