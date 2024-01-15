
<script lang="ts">
import { stat } from 'fs';
import { defineComponent, onMounted, reactive } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

export default defineComponent({
  setup() {

    const state = reactive({
      cssTheme: 'light',
    })

    const onClickMode = () => {
      const changeCssThemeName = state.cssTheme === 'light' ? 'dark' : 'light';
      document.body.classList.remove(state.cssTheme);
      state.cssTheme = changeCssThemeName;
      changeCssTheme(changeCssThemeName);
    };

    const changeCssTheme = (theme: string) => {
      document.body.classList.add(theme);
    }

    onMounted(() => {
      changeCssTheme(state.cssTheme)
    });

    return {
      onClickMode
    }
  },
})
</script>


<template>
  <div class = 'btn-medium' @click="onClickMode"> 다크모드 </div>
  <div class ='w-fit h-fit wrapper'>
    <header class = 'bg-bg-base'> 
      <div class ="text-2xl text-text-base"> 테마테스트  </div>
      <!-- <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div> -->
    </header>
    <RouterView />
  </div>
</template>


<style>
#app {
  height: 100vh;
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @apply bg-base;
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;
}


</style>
