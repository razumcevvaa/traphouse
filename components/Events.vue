<template>
  <div class="container">
    <div class="content-wrapper">
      <div class="content-box">
        <div class="first-box">
          <div class="gradient-overlay"></div>
        </div>
        <div class="box-item">
          <h3 class="name-event upp">Lovv66 - 19 июня</h3>
          <p class="name-place upp">Место проведения: <span class="upp pink">Зеленый театр</span></p>
          <p class="name-place upp">Продано билетов: <span class="upp pink">1200+</span></p>
          <a href="https://qtickets.ru/event/163414" class="ticket-link upp">Купить билет</a>
        </div>
      </div>

      <div class="content-box">
        <div class="third-box">
          <div class="gradient-overlay"></div>
        </div>
        <div class="box-item">
          <h3 class="name-event upp">toxis - 13 июля</h3>
          <p class="name-place upp">Место проведения: <span class="upp pink">Зеленый театр</span></p>
          <p class="name-place upp">Продано билетов: <span class="upp pink">1000+</span></p>
          <a href="https://sochi.qtickets.events/163796-bolshoy-solnyy-kontsert-toxi" class="ticket-link upp">Купить билет</a>
        </div>
      </div>

      <div class="content-box">
        <div class="fird-box">
          <div class="gradient-overlay"></div>
        </div>
        <div class="box-item">
          <h3 class="name-event upp">2к17</h3>
          <p class="name-place upp">Место проведения: <span class="upp pink">Мандарин</span></p>
          <p class="name-place upp">Продано билетов: <span class="upp pink">500+</span></p>
          <a href="https://qtickets.ru/event/162036" class="ticket-link upp">Купить билет</a>
        </div>
      </div>

      <div class="content-box">
        <div class="five-box">
          <div class="gradient-overlay"></div>
        </div>
        <div class="box-item">
          <h3 class="name-event upp">Bushido Zho</h3>
          <p class="name-place upp">Место проведения: <span class="upp pink">vinograd</span></p>
          <p class="name-place upp">Продано билетов: <span class="upp pink">N/O</span></p>
          <a href="https://t.me/traphouserussia" class="ticket-link upp">Купить билет</a>
        </div>
      </div>

      <div class="content-box">
        <div class="second-box">
          <div class="gradient-overlay"></div>
        </div>
        <div class="box-item">
          <h3 class="name-event upp">dj control</h3>
          <p class="description upp">Школа диджеинга в Сочи от резидентов TrapHouse</p>
          <a href="https://t.me/controlschool" class="ticket-link upp">Узнать больше</a>
        </div>
      </div>


    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.container {
  background-color: black;
  padding: 20px 0;
  width: 100%;
  font-family: 'SF Pro Text', BlinkMacSystemFont, sans-serif;
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
  border: 1px solid rgbargb(255, 0, 200);
  border-radius: 38px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
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
.third-box{
  position: relative;
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.fird-box,.five-box {
  position: relative;
  width: 100%;
  height: 350px;
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

.fird-box{
  background-image: url(/public/2017.jpg);
}

.five-box{
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
}
</style>