<template>
  <div class="content-box">
    <div class="box-item">
      <p class="bg-pink">5 лет</p>
      <p class="description">работаем для вас</p>
    </div>
    <div class="box-item">
      <p class="bg-pink">25 000</p>
      <p class="description">посетителей за год</p>
    </div>
    <div class="box-item">
      <p class="bg-pink">500+</p>
      <p class="description">ивентов за все время</p>
    </div>
  </div>
  <div class="artists">
    <p class="upp">Провели концерты:</p>
    <div>
      <p>OG Buda,Big Baby Tape,Mayot,<br>Yanix,Lizer,Платина,Toxi$,
        Uglystephan, <br>Heronwater,Scally Milano, <br>Pinq,Nkeeei,Uniqe,Artem Shilovets,Xxxmanera,Lildrughill,
        <br>Aygust,
        Pepel Nahudi,Hofmannita
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.content-box {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
  font-family: 'SF Pro Text', BlinkMacSystemFont, sans-serif;
  margin: 0 20px;
}

.box-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bg-pink {
  font-size: 25px;
  color: rgb(255, 59, 203);
}

.description {
  font-size: 15px;
  text-align: center;
}

.artists {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 20px 0 20px;
  font-family: 'SF Pro Text', BlinkMacSystemFont, sans-serif;
}

.artists p {
  text-align: center;
  padding: 10px;
  font-size: 20px;
}

/* Десктоп версия */
@media (min-width: 768px) {
  .bg-pink {
    font-size: 40px;
    color: rgb(255, 59, 203);
  }

  .description {
    font-size: 25px;
    text-align: center;
  }

  .artists div,
  .artists p {
    text-align: center;
    padding: 10px 0;
    font-size: 25px;
  }

  .content-box {
    max-width: 1150px;
    margin: 0 auto;
  }
}
</style>