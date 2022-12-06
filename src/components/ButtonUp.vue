<template>
  <div   class="button">
    <button @click="scrollToTop()"  class="btn btn-primary">
        <img src="../img/up.svg" alt="">
    </button>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
export default {
    name:"ButtonUp",
    data(){
        return {

        }
    },
    setup(){
        onMounted(()=>{
            window.addEventListener("scroll",()=>{
                if(window.scrollY==0){
                    document.querySelector(".button").style.display='none';
                }else{
                    document.querySelector(".button").style.display='block';
                }
            })
        })
    },
    methods:{
        scrollToTop(){
            window.scrollTo(0,0);
        },
        
    },
    
}
</script>

<style lang="scss">
.button{
    position: fixed;
    bottom: 2%;
    right: 1%;
    button{
        border-radius: 50%;
        width: 60px;
        height: 60px;    
        img{
            width: 100%;
        }    
    }
}
</style>