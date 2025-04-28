<template>
  <div class="container">
    <div class="content-wrapper">
      <div v-for="(event, index) in events" :key="index" class="content-box" :class="`animate-box-${index}`"
        ref="animatedBoxes">
        <div :class="`${event.boxClass}`">
          <div class="gradient-overlay"></div>
        </div>
        <div class="box-item">
          <h3 class="name-event upp">{{ event.title }}</h3>
          <p class="name-place upp" v-if="event.venue">Место проведения: <span class="upp pink">{{ event.venue }}</span>
          </p>
          <p class="name-place upp" v-if="event.ticketsSold">Продано билетов: <span class="upp pink">{{
            event.ticketsSold }}</span></p>
          <p class="description upp" v-if="event.description">{{ event.description }}</p>
          <a :href="event.link" target="_blank" class="ticket-link upp">{{ event.linkText }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const events = [
  {
    boxClass: 'first-box',
    title: 'Lovv66 - 19 июня',
    venue: 'Зеленый театр',
    ticketsSold: '1200+',
    link: 'https://qtickets.ru/event/163414',
    linkText: 'Купить билет'
  },
  {
    boxClass: 'third-box',
    title: 'toxis - 13 июля',
    venue: 'Зеленый театр',
    ticketsSold: '1500+',
    link: 'https://sochi.qtickets.events/163796-bolshoy-solnyy-kontsert-toxi',
    linkText: 'Купить билет'
  },
  {
    boxClass: 'fird-box',
    title: '2к17',
    venue: 'Мандарин',
    ticketsSold: '500+',
    link: 'https://qtickets.ru/event/162036',
    linkText: 'Купить билет'
  },
  {
    boxClass: 'five-box',
    title: 'Bushido Zho',
    venue: 'vinograd',
    ticketsSold: 'N/O',
    link: 'https://t.me/traphouserussia',
    linkText: 'Купить билет'
  },
  {
    boxClass: 'second-box',
    title: 'dj control',
    description: 'Школа диджеинга в Сочи от резидентов TrapHouse',
    link: 'https://t.me/controlschool',
    linkText: 'Узнать больше'
  }
]

const animatedBoxes = ref<HTMLElement[]>([])

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, {
    threshold: 0.1
  })

  animatedBoxes.value.forEach(box => {
    observer.observe(box)
  })
})
</script>

<style scoped>
.container {
  background-color: black;
  padding: 20px 0;
  width: 100%;
  font-family: 'SF Pro Text', BlinkMacSystemFont, sans-serif;
  overflow-x: hidden;
}

.content-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 15px;
}

.content-box {
  border: 1px solid rgb(255, 0, 200);
  border-radius: 38px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transform: translateX(-50px);
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.content-box:nth-child(even) {
  transform: translateX(50px);
}

.content-box.animate-in {
  opacity: 1;
  transform: translateX(0) !important;
}

.gradient-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: linear-gradient(to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.7) 54%,
      rgba(0, 0, 0, 1) 100%);
  pointer-events: none;
}

.first-box,
.second-box,
.third-box {
  position: relative;
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.fird-box,
.five-box {
  position: relative;
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.first-box {
  background-image: url(/public/lovv66.jpg);
}

.second-box {
  background-image: url(/public/dj.jpg);
}

.third-box {
  background-image: url(/public/toxis.jpg);
}

.fird-box {
  background-image: url(/public/2017.jpg);
}

.five-box {
  background-image: url(/public/bsh.png);
}

.box-item {
  background-color: black;
  padding: 15px;
  color: white;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.name-event {
  font-size: 16px;
  margin-bottom: 10px;
  text-align: center;
  font-family: 'SF Pro Text', BlinkMacSystemFont, sans-serif;
  font-weight: 700;
}

.description {
  font-size: 12px;
  margin-bottom: 10px;
  text-align: center;
}

.name-place {
  font-size: 12px;
  margin-bottom: 8px;
  text-align: center;
}

.pink {
  color: rgb(255, 59, 203);
  font-size: 14px;
}

.upp {
  text-transform: uppercase;
}

.ticket-link {
  display: block;
  margin-top: 15px;
  padding: 8px 15px;
  background-color: rgb(255, 59, 203);
  color: white;
  text-decoration: none;
  border-radius: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 12px;
  transition: all 0.3s;
}

.ticket-link:hover {
  background-color: rgb(255, 0, 200);
  transform: scale(1.03);
}

/* Десктоп версия */
@media (min-width: 768px) {
  .content-wrapper {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1200px;
    gap: 30px;
  }

  .fird-box,
.five-box {
  height: 350px;
}

  .first-box,
  .second-box,
  .third-box {
    height: 400px;
  }

  .name-event {
    font-size: 22px;
  }

  .description {
    font-size: 16px;
  }

  .name-place {
    font-size: 16px;
  }

  .ticket-link {
    padding: 12px 25px;
    font-size: 16px;
  }

  /* Анимации для десктопа */
  .content-box {
    transform: translateX(-100px);
  }

  .content-box:nth-child(even) {
    transform: translateX(100px);
  }

  .content-box.animate-in {
    transform: translateX(0) !important;
  }
}
</style>