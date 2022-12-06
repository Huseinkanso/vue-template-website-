<template>
    <div data-aos="fade-down-right" class="image-fade position-relative">
        <img data-aos="fade-left" :src="source" alt="" class="img-fluid">
      </div>
</template>

<script>
export default {
    name:"ImageFade",
    props:["source"],
}
</script>

<style lang="scss">
.image-fade{
    &::before{
      content: "";
      width: 100%;
      height: 97%;
      position: absolute;
      left: 0;
      z-index: -1;
      bottom: 10%;
      border-top-right-radius: 50%;
      border-top-left-radius: 50%;            
    }
    &::before{
      
      left: -3%;
      top: -5%;            
    }
  img{
    &:first-of-type{
      width: 400px;
      height: 500px;
      @media (max-width:767px) {
        height: 550px;
      }
    }
  }
  }
</style>