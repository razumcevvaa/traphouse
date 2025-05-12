<template>
  <div class="parallax-container">
    <div class="parallax-bg"></div>
    <div class="parallax-content">
      <div class="content-wrapper">
        <img class="logo" src="/public/logo.png" alt="logo">
        <div class="text-block">
          <h1 class="responsive-text">lovv66 - 19 июня</h1>
          <div class="countdown-container">
            <h2 class="timer">Осталось: </h2>
            <div class="countdown-grid">
              <div class="countdown-item">
                <span class="countdown-value">{{ days }}</span>
                <span class="countdown-label">дней</span>
              </div>
              <div class="countdown-item">
                <span class="countdown-value">{{ hours }}</span>
                <span class="countdown-label">часов</span>
              </div>
              <div class="countdown-item">
                <span class="countdown-value">{{ minutes }}</span>
                <span class="countdown-label">минут</span>
              </div>
              <div class="countdown-item">
                <span class="countdown-value">{{ seconds }}</span>
                <span class="countdown-label">секунд</span>
              </div>
            </div>
          </div>
          <a class="link-tg" href="https://t.me/traphouseevents">розыгрыш билетов</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const targetDate = new Date('2025-06-19T00:00:00')
const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)
let interval


const updateCountdown = () => {
  const now = new Date()
  const diff = targetDate - now

  if (diff <= 0) {
    days.value = 0
    hours.value = 0
    minutes.value = 0
    seconds.value = 0
    clearInterval(interval)
    return
  }

  days.value = Math.floor(diff / (1000 * 60 * 60 * 24))
  hours.value = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  minutes.value = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  seconds.value = Math.floor((diff % (1000 * 60)) / 1000)
}

onMounted(() => {
  updateCountdown()
  interval = setInterval(updateCountdown, 1000)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>

<style scoped>
/* Мобильная версия (по умолчанию) */
/* .parallax-container {
  position: relative;
  width: 100%;
  height: 40vh;
  overflow: hidden;
  color: white;
} */

.parallax-container {
  position: relative;
  width: 100%;
  height: 47vh;
  /* Для мобильной версии */
  overflow: hidden;
  color: white;
  perspective: 1px;
  /* Важно для параллакс-эффекта */
  transform-style: preserve-3d;
}

.parallax-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('/public/mobile-bg.jpg') center/cover;
  z-index: 1;
  will-change: transform;
  /* Оптимизация анимации */
  transform: translateZ(-1px) scale(2);
}

.parallax-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  transform: translateZ(0);
}

.content-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 10%;
}

.logo {
  width: 50px;
  margin-bottom: 20px;
}

.text-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.responsive-text {
  font-family: 'SF Pro Text', BlinkMacSystemFont, sans-serif;
  font-weight: 800;
  font-size: 35px;
  text-align: center;
}

.countdown-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.countdown-grid {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 100%;
  max-width: 300px;
}

.countdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* изменить шриыт на тонкий */
.countdown-value,
.timer {
  font-size: 20px;
  font-family: 'SF Light Text', BlinkMacSystemFont, sans-serif;
  font-weight: 100;
}

.countdown-label {
  font-size: 14px;
  font-family: 'SF Light Text', BlinkMacSystemFont, sans-serif;
  font-weight: 100;
}

.link-tg {
  margin-top: 20px;
  color: white;
  text-decoration: none;
  background-color: black;
  padding: 10px 50px;
  border: 1px solid rgb(255, 59, 203);
  border-radius: 38px;
  font-size: 20px;
  text-transform: uppercase;
  font-family: 'SF Pro Text', BlinkMacSystemFont, sans-serif;
  font-weight: 500;
  -webkit-box-shadow: 0px 0px 55px 0px rgba(255, 255, 255, 0.5);
-moz-box-shadow: 0px 0px 55px 0px rgba(255, 255, 255, 0.5);
box-shadow: 0px 0px 55px 0px rgba(255, 255, 255, 0.5);
transition: all 0.3s;
}

.link-tg:hover {
  box-shadow: 0px 0px 65px 0px rgba(255, 255, 255, 0.5);
  transform: scale(1.03);
}

/* Десктоп версия */
@media (min-width: 768px) {
  .parallax-container {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    color: white;
  }

  .parallax-bg {
    height: 100%;
    background-image: url('/public/back.jpg');
    transform: translateZ(-1px) scale(2.2);
    /* Усиленный эффект для десктопа */
  }

  .content-wrapper {
    justify-content: center;
    padding-top: 0;
  }

  .logo {
    width: 120px;
  }

  .responsive-text {
    font-size:90px;
  }

  .countdown-grid {
    grid-template-columns: repeat(4, 1fr);
    max-width: 600px;
    gap: 25px;
  }

  .countdown-value {
    font-size: 42px;
  }

  .countdown-label {
    font-size: 18px;
  }

  .countdown-value,
  .timer {
    font-size: 35px;
    font-family: 'SF Light Text', BlinkMacSystemFont, sans-serif;
    font-weight: 100;
  }

  .link-tg {
    margin-top: 50px;
    /* color: rgb(255, 59, 203); */
    color: white;
    text-decoration: none;
    background-color: black;
    padding: 25px 100px;
    border: 1px solid rgb(255, 59, 203);
    border-radius: 45px;
    font-size: 42px;
    text-transform: uppercase;
    font-family: 'SF Pro Text', BlinkMacSystemFont, sans-serif;
    font-weight: 500;
  }
}
@media (min-width: 800px) and (max-width: 900px) {
  .responsive-text {
    font-size:70px;
  }
}
</style>