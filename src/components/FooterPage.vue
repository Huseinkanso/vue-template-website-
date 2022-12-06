<template>
  <div class="footer pt-5">
    <div class="container text-start mt-5 bg-white">
      <div class="link ">
        <a href="#header">
          <img src="../img/service/up.png" alt="">
        </a>
      </div>
        <div class="row justify-content-between position-relative">
            <div data-aos="fade-left" class="col-lg-4 col-sm-5 col-8 ">
                <h2>sapiens</h2>
                <p>Sapiens is the Agency Webflow Template that you were looking for, the perfect fit for your next project full of useful and modern designed sections.</p>
                <button class="btn btn-primary button-1 ">buy template
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right " viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                      </svg>
                    </span>
                </button>
            </div>
            <div data-aos="fade-right" class="col-lg-2 col-sm-3 col-8">
                <ul class="list-unstyled">
                    <h3>links</h3>
                    <li :class="i==0? 'text-primary':''" class="p-1" v-for="(link,i) in links" :key="link" >{{link}}</li>
                </ul>
            </div>
            <div data-aos="fade-left" class="col-lg-2 col-sm-3 col-8">
                <ul class="list-unstyled">
                    <h3>pages</h3>
                    <li  class="p-1" v-for="(p,i) in pages" :class="i==pages.length-1? 'text-primary':''" :key="i" >{{p}}</li>
                </ul>
            </div>
            <div data-aos="fade-right" class="col-lg-2 col-sm-3 col-8">
                <h3>address</h3>
                <h5>{{info.street}}</h5>
                <h5>{{info.country}} </h5>
                <a class="active" href="">view on map </a>
                <h3 class="my-3">inquiries</h3>
                <a class="active">{{info.phone}} </a>
                <a class="active">{{info.email}} </a>
            </div>
            <div data-aos="fade-left" class="col-lg-2 col-sm-3 col-8">
                <socialMedia/>
            </div>

        </div>
    </div>
  </div>
</template>

<script>
import socialMedia from '@/components/socialMedia'
export default {
    name:"FooterPage",
   setup(){
       const links=['home','about us','services','works','pricing','blog','FAQ','contact us','log in'];
       const pages=['login','404','licensing','style guide','changelog','more templaes!'];
       const info={
        street:'riverside 25',
        country:'san francisco,california',
        phone:'800 234 567',
        email:"hello@website.com",
       }
       return {links,pages,info}
   },
   components:{
    socialMedia
   }
}
</script>

<style lang="scss">
@import '../scss/utilities/mixins';
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
    @include flexCenter;
    img{
      @include  animationTR;
      
    }
  }
}
    .footer{
        background-image: url('../img/back.jpg');
        background-size: cover;
        .container{
            border-top-left-radius: 40px;
            border-top-right-radius: 40px;
            padding-top: 10px;
        }
        .row{
            .active{
                color:purple !important;
            }
            padding: 50px;
            ul{
                li{
                    cursor: pointer;
                    transition: 0.4s;
                    &:hover{
                        color:rgb(202, 202, 202);
                    }
                }
            }
            
        }

        
    }
</style>