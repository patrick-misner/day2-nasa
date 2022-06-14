<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-12">
      <div class="card m-3 text-center">
        <h1 class=""><span class="border-bottom border-3 border-dark">NASA Picture of the Day</span></h1>
        <span>{{ pod?.copyright }}</span>
        <span>

        </span>
        <div class="d-flex justify-content-center">
          <form>
           <input name="date" v-model="newDate" id="date" class="form-control form-control-sm" type="date" placeholder="" required aria-label=".form-control-sm example" @change="getDate">
          </form>
        </div>

        <img class="img-fluid p-5" :src="pod?.hdurl" alt="">=
      </div>
    </div>
  </div>
</div>


</template>

<script>
import { computed, onMounted, ref } from "@vue/runtime-core";
import { podService } from "../services/PodService"
import { AppState } from "../AppState";
export default {
  name: 'Home',
  setup() {
    const newDate = ref('')
    onMounted(async() =>{
      await podService.getPod()
    });
      return {
        pod: computed(() => AppState.pod),

        async getDate(){
          await podService.getDate(newDate.value)
        },
        newDate
      }
  }
}
      
</script>

<style scoped lang="scss">
.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
