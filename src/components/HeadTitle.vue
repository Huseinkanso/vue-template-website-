<template>
    <div data-aos="fade-down-left" class="head my-5">
        <div class="row w-100 my-4 justify-content-between align-items-center">
          <div class="col-8">
            <div class="heading text-start my-4">
              <p class="text-uppercase">{{ par }} </p>
              <h2 class="text-capitalize">{{title}} </h2>
              <p class="">sapiens is webflow non code template for <br> creative like you</p>
            </div>
          </div>
          <div class="col-2  ">
            <div class="img w-100">
              <img :src="source" alt="" class="">
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  props:["par","title","source"],
}
</script>

<style lang="scss">
@import '../scss/utilities/mixins';
.head{
    .row{
      @include borderBottom;
      @media (max-width:620px){
        .heading{
          h2{
            font-size: 20px !important;
          }
        }
        .img img{
          width: 60px !important;
        }
      }
      .img{

        img{
          width: 100px;
          animation: up-down 3s infinite;
        }
      }
  }
  }
</style>