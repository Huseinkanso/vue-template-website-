<template>
  <div class="blog py-5 mt-4">
    <div class="container">
      <div class="row justify-content-center align-items-center my-5">
        <div data-aos="fade-left" class="col-md-5 col-10">
          <div class="img">
            <a href="">
              <img src="../img/blog2.jpg" class="img-fluid" alt="" />
            </a>
          </div>
        </div>
        <div data-aos="fade-left" class="col-md-5 col-10">
          <div class="txt p-2 m-2 text-start  align-items-center">
            <div class="fs-3">
              <a href="" class=" fw-bold">update</a>
            </div>
            <div class="info text-start ">
              <h2 class="fw-bold ">
                <a href=""> We Launch Sapiens Template this Week!</a>
              </h2>
              <p>
                Sapiens is a Webflow Non Code Template for Creatives like you
              </p>
            </div>
            <button class="btn btn-primary button-1 ">continue reading
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right " viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
              </span>
            </button>            
          </div>
        </div>
      </div>
      <div class="post">
        <h2 class="text-start p-2">latest post</h2>
        <div v-show="state.postError"  class="text-danger fw-bold fs-3">sorry,there is an error showing the posts </div>
        <div v-for="(post,i) in state.posts.post" :key="i" class="row justify-content-center align-items-center my-5">
          <div data-aos="fade-left" class="col-md-5 col-10">
            <div class="img">
              <a :href="post.link">
                <img :src="post.img" class="img-fluid" alt="" />
                <!-- <img :src="require('../img/blog/post'+(i+1)+'.jpg')" class="img-fluid" alt="" /> -->
              </a>
            </div>
          </div>
          <div data-aos="fade-left" class="col-md-5 col-10">
            <div class="txt p-2 m-2 text-start  align-items-center">
              <div class="fs-3">
                <a href="" class=" fw-bold">{{post.par}} </a>
              </div>
              <div class="info text-start ">
                <h2 class="fw-bold ">
                  <a class="" :href="post.link"> {{post.title}} </a>
                </h2>
                <p>
                  {{post.par2}}
                </p>
              </div>
              <a class="text-primary" :href="post.link">learn more</a>      
            </div>
          </div>
        </div>
      </div>
    </div>
    <InstaView/>
  </div>
</template>

<script>
import { onMounted,  reactive } from '@vue/runtime-core';
// import PostView from '../json/post.json';
import InstaView from '@/components/InstaView';
import axios from 'axios';

export default {
  name:"BlogView",
  setup(){
    const state=reactive({
      posts:[],
      postError:false,
    })
    // console.log(state.posts.post);
    onMounted(async()=>{
      // const res=await axios.get('https://raw.githubusercontent.com/Huseinkanso/some-json-file/804f08bb68b0966c760df08c23777b3004e06b19/post.json');
      // state.posts=res.data;    
      await axios.get('https://raw.githubusercontent.com/Huseinkanso/some-json-file/804f08bb68b0966c760df08c23777b3004e06b19/post.json')
      .then((response)=>{
        state.posts=response.data; 
      }).catch((error)=>{
        console.log("there is an "+ error);
        state.postError=true;
      })
    })
    
    return {state}
  },
   
    components:{
      InstaView
    }
  }

</script>

<style lang="scss">
@import '@/scss/utilities/mixins';
.blog{
  background-image: url('../img/back.jpg');
  background-size: cover;
  .row{
    a{
      transition: 0.4s;
    }
    .img{
      img{
        border:15px solid white;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.486) ;
        transition: 0.4s;
        overflow: hidden;
        &:hover{
          box-shadow: none;
          transform: scale(1.01);
        }
      }
    }
    .txt{
      .fs-3{
        a{
          color: purple !important;
          &:hover{
            color:gainsboro !important;
          }
        }
      }
      h2{
        @media (max-width:992px){
          font-size: 25px !important;
        }
        a{
          &:hover{
            color:purple !important;
          }
        }
      }
    }
  }
  .post{
    background-color: rgb(255 255 255 / 69%);
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    padding: 30px 0;    
  }
}
</style>