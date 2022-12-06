<template>
    <div class="content" id="content">
        <div class="container">
          <div class="head text-start">
            <h2>pricing plans</h2>
            <p>sapiens is your creative agency webflow template we can build anything your dream</p>
          </div>
          <div class="row position-relative">
            <div data-aos="fade-down" data-aos-duration="1000" class="col-lg-3 col-md-3 col-8 position-relative col-5 mx-sm-3 mx-lg-0 text-start" v-for="(price,index) in state.pricingPlan" :key="price.title">
              <div class="box mx-1">
                <h4 :class="index!=0?'text-primary':''" class="text-capitalize">{{ price.title }}</h4>
              <h2 >{{price.price}} </h2>
              <p>{{price.par}} </p>
              <ul class="list-unstyled">
                <li class="py-2" v-for="get in price.gets" :key="get" >
                  {{get}}
                </li>
              </ul>
              <div class="plan position-absolute ">
                <button class="d-block w-100 btn text-white btn-primary ">
                  <a class="text-white" href="">choose plan</a>
                </button>
              </div>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" class="money position-absolute">
              <img src="../img/price3.webp" alt="">
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
    setup(){
        const state=reactive({
            pricingPlan:[
        {
          title:"basic",
          price:"$0",
          par:"get a professional website designed according to your need",
          gets:['get a fully designed website','webflow developpement','limited support']
        },
        {
          title:"Pro",
          price:"$499",
          par:"get a professional website designed according to your need",
          gets:['get a fully designed website','webflow developpement','limited support','get a fully designed website','webflow developpement','limited support']
        },
        {
          title:"enterprise",
          price:"$999",
          par:"get a professional website designed according to your need",
          gets:['get a fully designed website','webflow developpement','limited support','get a fully designed website','webflow developpement','limited support','get a fully designed website']
        },
        {
          title:"enterprise",
          price:"Custom",
          par:"get a professional website designed according to your need",
          gets:['get a fully designed website','webflow developpement','limited support','get a fully designed website','webflow developpement','limited support','get a fully designed website','webflow developpement']
        },
      ],
    })
        return {state} 
    }
}
</script>

<style lang="scss">
@import '../scss/utilities/mixins';
.content{
  button{
    a{
      color:white !important;
    }
  }
    margin: 30px;
    background: white;
    border-radius: 50px;
    .container{
      padding-top: 60px;
      .head{
        @include borderBottom;
        margin: 50px 0;
      }
    }
    .row{
      justify-content: center;
      @media (max-width:570px){
        flex-direction: column;
        .col-lg-3{
          margin:20px auto !important;
        }
      }
      .col-lg-3{
        background-color: #d4d5d7;
        margin: 20px 10px;
        padding: 30px 10px;
        border-radius: 10px;
        ul{
          li{

            &:not(:last-of-type){
              @include borderBottom;
            }
          }
        }
        .plan{
          bottom:10px;
          width: 90%;
        }
      }
      .money{
        bottom:0;
        right:0;
        img{
          position: absolute;
          width: 100px;
          height: 100px;
          @include animationTR;
          right: 0;
        }
      }
    }
  }    
</style>