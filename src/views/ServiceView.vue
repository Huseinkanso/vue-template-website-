<template>
  <div class="service">
    <div class="landing pt-4 my-4">
      <div class="container mb-5">
        <headLanding :img="require('../img/service/head.png')" title="services" par="find all our services here"/>
      </div>
      <div class="link ">
        <a href="#content">
          <img class="" src="../img/service/link.png" alt="">
        </a>
      </div>
    </div>
    <div class="content my-5" id="content">
      <div class="container">
        <div :class="(i==0)?'mt-5':''" v-for="(ct,i) in state.service" :key="ct" class="row my-3 justify-content-center align-items-center">
          <div data-aos="fade-down" class="col-sm-6 col-10">
            <div class="img text-end">
              <a href="">
                <img :src="ct.img" class="img-fluid" alt="">
              </a>
            </div>
          </div>
          <div data-aos="fade-up" class="col-sm-6 col-10 text-start">
            <a href="">
              <h3 class="fw-bold fs-3">{{ct.title}} </h3>
            </a>
            <p>{{ct.par}} </p>
            <p class="text-primary fs-3 fw-bold">$ {{ct.price}} </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headLanding from '@/components/headLanding';
import { reactive } from '@vue/reactivity';
export default {
  setup(){
    const state=reactive({
      service:[
        {
          img:require("../img/service/ct1.jpg"),
          title:"website design",
          par:"Build a unique Website with Sapiens Webflow Template",
          price:"3500",
          link:"",
        },
        {
          img:require("../img/service/ct2.jpg"),
          title:"Webflow Development",
          par:"We can turn your design into a Webflow site",
          price:"4200",
          link:"",
        },
        {
          img:require("../img/service/ct3.jpg"),
          title:"Social Media",
          par:"Let our team take care of your Social Networks",
          price:"1300",
          link:"",
        },                
      ],
    })
    return {state}
  },
  name:"ServiceView",
  components:{
    headLanding,
  }
}
</script>

<style lang="scss">
@import "../scss/utilities/mixins";
.landing{
  .link{
    background-color: white;
    padding: 30px;
    position: relative;
    a{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top:-30px;
      background-color: white;
      width: 150px;
      height: 70px;
      border-radius: 50%;
      img{
        @include  animationTR;
      }
    }
  }
}
.content{
  .row{
    .col-sm-6{
      .img{
        overflow: hidden;
        a{
          img{
            transition: 0.4s;
            &:hover{
              transform: scale(1.3);
            }  
          }
        }
      }
      h3{
        transition: 0.4s;
        &:hover{
          color:purple;
        }
      }
    }
  }
}
</style>