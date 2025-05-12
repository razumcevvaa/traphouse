<template>
  <div class="main-container">
    <Main></Main>
    <Events />
    <Info />
    <Contact />
    <footer>
      <a class="footer-link" href="https://qtickets.ru/refund" target="_blank" rel="noopener noreferrer">возвраты</a>
      <a class="footer-link" href="https://t.me/traphouseevents" target="_blank"
        rel="noopener noreferrer">сотрудничество</a>
      <a class="footer-link" href="https://t.me/traphouseevents" target="_blank" rel="noopener noreferrer">поддержка</a>
    </footer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'TRAPHOUSE - лучшие вечеринки Сочи',
  ogTitle: 'Концерты и вечеринки в сочи',
  description: 'Устраиваем лучшие вечеринки и концерты в Сочи',
  ogDescription: 'Устраиваем лучшие вечеринки и концерты в Сочи',
  ogImage: 'https://traphouse.ru/public/logo.png',
  twitterCard: 'summary_large_image',
  ogUrl: 'https://traphouse.ru',
  ogType: 'website',
})
</script>

<style lang="scss">
@use "~/assets/css/style.css";

.main-container {
  background-color: black;
}

footer {
  max-width: 1150px;
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 40px;
  gap: 20px;
}

.footer-link {
  font-family: 'SF Pro Text', BlinkMacSystemFont, sans-serif;
  color: #dedede;
}

/* Десктоп версия */
@media (min-width: 768px) {
  footer {
    max-width: 1150px;
    margin: 0 auto;
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 40px;
    gap: 50px;
  }

  .footer-link {
    font-size: 20px;
  }
}
</style>