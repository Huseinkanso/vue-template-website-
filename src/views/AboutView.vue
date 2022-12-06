<template>
  <div class="about pt-0">
    <div class="landing position-relative mb-5">
      <div class="container ">
        <div class="row  justify-content-center align-items-center">
          <IntroText par1="about" head="we're sapiens none code webflow template" par2="Let's do this!" />
          </div>
          <div class="row  justify-content-center  justify-content-md-between align-items-center align-items-md-end">
            <div v-for="i in 3" :key="i" class="col-md-4 my-md-0 my-4 col-8">
              <ImageFade :source="require('../img/about/land'+i+'.png')" />
            </div>
          </div>
          </div>
    </div>
    <div  class="intro1 my-5">
      <div data-aos="fade-left" class="heading text-center my-5">
        <p class="text-uppercase mt-5">features</p>
        <h2 class="text-capitalize">the best features <br> a reallity</h2>
        <p class="">sapiens is webflow non code template for <br> creative like you</p>
      </div>
      <div class="container">
        <div class="row justify-content-center justify-content-md-between align-items-center">
          <div data-aos="fade-down-left" class="col-lg-4 col-md-6 my-3  col-8 " v-for="(txt,i) in state.introData  " :key="i">
            <div class="box p-5">
              <div data-aos="flip-up" data-aos-duration="2000" class="image my-3">
                <img :src="require('../img/about/intro'+(i+1)+'.webp')" alt="">
              </div>
              <h3>{{txt}} </h3>
              <p>Sapiens is your Creative Agency Webflow template we can build anything your dream.</p>
              <button class="button-2 shadow">
                <a :href="'#system-'+(i+1)">learn more</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="system" id="system-1">
      <div class="container">
        <HeadTitle par="system" title="Making your Ideas a Reality" :source="require('../img/about/headTitle1.webp')" />
        <div class="row justify-content-center">
          <div data-aos="fade-down-left" class="col-10 col-md-6 mb-5 d-flex   justify-content-center align-items-center text-start">
            <div class="txt">
              <h2 class="fw-bold">digital era</h2>
              <p>
                Sapiens is your Creative Agency Webflow template we can build anything your dream.
              </p>
              <div v-for="i in 2" :key="i" class="q">
                <h3>
                  <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                  </svg> we are in a new digital era stay updated
                </h3>
                <p>Sapiens is your Creative Agency Webflow template we can build anything your dream.</p>
              </div>
            </div>
          </div>
          <div data-aos="fade-down-right" class="col-10 col-md-6  ">
            <div class="box ">
              <div class="img position-relative">
                <img class="img-fluid" src="../img/about/system1.webp" alt="">
                <img data-aos="fade-up" data-aos-duration="2000" class="img-fluid" src="../img/about/system2.webp" alt="">
              </div>
            </div>
          </div>
        </div>

        <div class="row  justify-content-center">
          <div data-aos="fade-down-right" class="col-10 col-md-6  ">
            <div class="table-box position-relative">
              <div class="img ">
                <img class="img-fluid" src="../img/about/system3.png" alt="">
              </div>
            </div>
          </div>
          <div data-aos="fade-down-left" class="col-10 col-md-6 mb-5 d-flex   justify-content-center align-items-center text-start">
            <div class="txt-modern">
              <h2 class="fw-bold">modern design</h2>
              <p>
                Sapiens is your Creative Agency Webflow template we can build anything your dream.
              </p>
              <p>
                Our clients are the companies and startups who make the world go round — create virtually unlimited designs with Sapiens.
              </p>
              <div class="ctn">
                <div class="img">
                  <img src="../img/about/sysP1.jpg" alt="" class="">
                  <img src="../img/about/sysP2.jpg" alt="" class="">
                  <img src="../img/about/sysP3.jpg" alt="" class="">
                </div>
                <div class="name">
                  <h5 class="fw-bold">tim,marisa and leo smith</h5>
                  <p>founders</p>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
    <div data-aos="fade-down-left" class="more-info my-5">
        <div class="carousel">
          <div class="buttons flex-direction-column flex-direction-md-row">
            <button  @click="makeActive(i)"  v-for="(t,i) in state.carousel" :key="t" :class="(curentBut==i?'active':'')">
              <img :src="require('../img/about/idea'+(i+1)+'.webp')" alt="">
              <p>{{t.title}} </p>
            </button>
          </div>
          <div  v-show="currentSlide==ii" :style="'background-color:'+content.bgColor+';'" :data-go="content"  v-for="(content,ii) in state.carousel" :key="ii" class="content">
            <div class="container">
              <div class="row justify-content-center align-items-center">
                <div class="col-md-6 col-10">
                  <div class="img">
                    <img :src="require('../img/about/idea'+(ii+1)+'.webp')" alt="">
                  </div>
                </div>
                <div class="col-md-6 col-10">
                  <div class="txt text-white text-start">
                    <h2> {{content.title}}</h2>
                    <h5>we are in new digital era stay updated</h5>
                    <p class="fw-normal text-white mb-2">Sapiens is your Creative Agency Webflow template we can build anything your dream.</p>
                    <p class="fw-normal text-white ">Our clients are the companies and startups who make the world go round — create virtually unlimited designs.</p>
                    <button  class="button-2 shadow">
                      <a href="">learn more</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="num">
        <div class="container">
          <HeadTitle par="numbers" title="some of our latest numbers" :source="require('../img/about/headTitle2.webp')" />
          <div class="row justify-content-center align-items-center">
            <div class="col-md-3 col-8">
              <div class="boxx">
                <div class="imgg">
                  <img src="../img/about/latest.webp" alt="">
                </div>
              </div>
            </div>
            <div class="col-8">
              <div class="row justify-content-center align-items-center">
                <div data-aos="fade-down-left" v-for="lat in state.latest" :key="lat" class="col-md-6 col-10 box p-3 text-start">
                  <h1 data-aos="fade-up" data-aos-duration="2000">{{lat.number}}</h1>
                  <h3 data-aos="fade-down" data-aos-duration="2000">{{lat.title}}</h3>
                  <p>Our clients are the companies and startups who make the world go round, choose Sapiens Template.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="step">
        <div class="container">
          <div class="row  justify-content-center align-items-center">
            <div v-for="(step,ii) in state.steps" :key="step" class="step1 my-4  row justify-content-center align-items-center">
              <div data-aos="fade-down-left" :style="'background-color:'+step.bgColor+';'" class="col-md-6 col-10">
                <div class="txt">
                  <p>{{step.par}} </p>
                <h3 class="fw-bold">{{step.title}} </h3>
                <p>Sapiens is your Creative Agency Webflow template we can build anything your dream.</p>
                <p>Our clients are the companies and startups who make the world go round.</p>
                </div>
              </div>
              <div data-aos="fade-down-right" :style="'background-color:'+step.bgColor+';'" class="col-md-6 col-10">
                <div data-aos="fade-up" data-aos-duration="2000" class="img">
                  <img v-if="(ii<3)" :src="require('../img/about/step'+(ii+1)+('.webp' || '.png'))" alt="">
                  <img v-if="(ii==3)" :src="require('../img/about/step'+(ii+1)+('.png'))" alt="">
                </div>
              </div>  
            </div>
            
        </div>
      </div>
      </div>
      <div class="reality pb-5">
        <div class="container">
          <HeadTitle par="numbers" title="some of our latest numbers" :source="require('../img/about/headTitle3.webp')" />
          <div class="row justify-content-center align-items-center">
            <div data-aos="fade-up" data-aos-duration="1000" class="col-md-6 col-10">
              <div class="image">
                <img src="../img/about/reality1.webp" alt="">
              </div>
            </div>
            <div data-aos="fade-down" data-aos-duration="1000" class="col-md-6 col-10 text-start">
              <div class="boxes">
                <h3 class="fw-bold">work smarter</h3>
              <h5>we are in new digital era stay updated</h5>
              <div class="r mt-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe-americas" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/>
                </svg>
                <div class="txt">
                  <h5>pixel perfect</h5>
                  <p>a design that is crisp on all the devices</p>
                </div>
              </div>
              <div class="r mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heptagon-half" viewBox="0 0 16 16">
                  <path d="M7.779.052a.5.5 0 0 1 .442 0l6.015 2.97a.5.5 0 0 1 .267.34l1.485 6.676a.5.5 0 0 1-.093.415l-4.162 5.354a.5.5 0 0 1-.395.193H4.662a.5.5 0 0 1-.395-.193L.105 10.453a.5.5 0 0 1-.093-.415l1.485-6.676a.5.5 0 0 1 .267-.34L7.779.053zM8 15h3.093l3.868-4.975-1.383-6.212L8 1.058V15z"/>
                </svg>
                <div class="txt">
                  <h5>digital era</h5>
                  <p>stay ahead of your competitors</p>
                </div>
            </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center align-items-center">
            <div data-aos="fade-down" data-aos-duration="1000" class="col-md-6 col-10 text-start">
              <div class="boxes">
                <h3 class="fw-bold">reach our goals!</h3>
                <h5>we are in new digital era stay updated</h5>
                <p>
                  Sapiens is your Creative Agency Webflow template we can build anything your dream.
                </p>
                <p>
                  Our clients are the companies and startups who make the world go round — create virtually unlimited designs with Sapiens.
                </p>
                <button class="button-2 shadow">
                  <a :href="'#system-'+(i+1)">learn more</a>
                </button>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" class="col-md-6 col-10">
              <div class="image">
                <img src="../img/about/reality2.webp" alt="">
              </div>
            </div>
          </div>
      </div>
  </div>
  <div class="skills">
    <div class="container">
      <HeadTitle par="skills" title="Our clients are the companies who make the world go round today" :source="require('../img/intro2.webp')" />
      <div v-for="skl in state.skills" :key="skl" class="row my-2 p-2 border border-bottom align-items-center justify-content-start justify-content-md-center">
        <div data-aos="fade-down-left" class="col-md-3 col-6 text-start">
          <h3 class="fw-bold">{{skl.sk}}</h3>
        </div>
        <div data-aos="fade-down-right" class="col-md-8 col-10">
          <div class="progress">
            <div class="progress-bar p-2" role="progressbar" :style="'width:'+skl.hundop+';background-color:'+skl.bgColor+';'" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="find">
    <div class="container">
      <div class="row py-5 align-items-center justify-content-lg-between justify-content-center">
        <div class="col-lg-5 col-8  text-lg-start text-center  ">
          <div data-aos="fade-up" data-aos-duration="1000" class="txt">
            <p class="text-uppercase">find us</p>
            <h2>make your project a succes with us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatem rerum deserunt inventore beatae ex.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quod reprehenderit! Eos nemo fugiat suscipit?</p>
            <div class="r ">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
              </svg>
                <p>riverside 25, san francisco ,call</p>
              </div>
            <div class="r ">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </svg>
                <p>800-234-567</p>
              </div>
            <div class="r ">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar4" viewBox="0 0 16 16">
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/>
              </svg>
                <p>visit our store</p>
              </div>
          </div>
        </div>
        <div class="col-lg-5 col-8 ">
          <div data-aos="fade-down-right" class="img position-relative">
            <img data-aos="fade-left"  src="../img/about/loc1.webp" alt="" class="img-fluid">
            <img data-aos="fade-right" src="../img/about/loc.webp" class="position-absolute" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="work">
    <div class="container">
      <HeadTitle par="work" title="our latest work" :source="require('../img/about/headTitle4.webp')" />
      <div class="row justify-content-center justify-content-sm-between">
        <WorkView title="Social Media" :img="require('../img/work3.jpg')" />
        <WorkView title="branding" :img="require('../img/work2.jpg')" />
      </div>
    </div>
  </div>
  <InstaView/>
  </div>
</template>
<script>
import IntroText from '@/components/IntroText';
import ImageFade from '@/components/ImageFade';
import HeadTitle from '@/components/HeadTitle';
import { reactive } from '@vue/reactivity';
import WorkView from '@/components/WorkView.vue';
import InstaView from '@/components/InstaView.vue';

export default{
  name:"AboutView",
  components:{
    IntroText,
    ImageFade,
    HeadTitle,
    WorkView,
    InstaView,
  },
  data(){
    return {
      currentSlide:0,
      curentBut:0,

    }
  },
  setup(){
    const state=reactive({
      skills:[
      {
        sk:"webflow",
        hundop:"80%",
        bgColor:"#1a76d2",
      },
      {
        sk:"design",
        hundop:"95%",
        bgColor:"#905ee6",
      },
      {
        sk:"development",
        hundop:"70%",
        bgColor:"#ec7a50",
      },
      ],
      introData:['Perfect Balance for Businesses','Designs that Saves you Time','Created by Expert Designers'],
      carousel:[
        {
          title:"happy start",
          bgColor:"#1a76d2",
          buttonColor:"#ccf1f6",
        },
        {
          title:"learn basics",
          bgColor:"#905ee6",
          buttonColor:"#bb96e3",
        },
        {
          title:"best idea",
          bgColor:"#ec7a50",
          buttonColor:"#ffe7de",
        }],
        latest:[
          {
            title:"sales",
            number:"59X"
          },
          {
            title:"visitors",
            number:"46M"
          },
          {
            title:"signup",
            number:"97X"
          },
          {
            title:"views",
            number:"68M"
          }
        ],
        steps:[
          {
            par:"step 1",
            title:"first step is to create something amazing",
            bgColor:"#fde7b9",
          },
          {
            par:"step 2",
            title:"Provoke Emotions in your Clients",
            bgColor:"#f0eefe",
          },
          {
            par:"step 3",
            title:"Send the Right Message on Time",
            bgColor:"#ccf1f6 ",
          },
          {
            par:"step 4",
            title:"first step is to create something amazing",
            bgColor:"#d8dee3 ",
          },
        ]
    })
    return {state}
  },
  methods:{
    makeActive(i){
      this.currentSlide=i;
      this.curentBut=i;
    }
  },
  
}

</script>
<style lang="scss">
@import "../scss/utilities/mixins";
$beige:#ffde99;
$beige2:#fde7b9;
$blueLight:#addfe5;
$blueLight2:#ccf1f6;
$purpleLight:#bb96e3;
$purpleLight2:#d8b7fc;
.landing{
  height: 100%;
  .col-md-4{
    &:first-of-type{
      .image-fade{
        &::before{
          background-color: $beige !important;
        }
      }
    }
    &:last-of-type{
      .image-fade{
        &::before{
          background-color: $blueLight!important;
        }
      }
    }
    &:first-of-type,
    &:last-of-type{
      .image-fade{
        img{
          width:160px ;
          height: 420px;
        }
        ::before{
          left: 0;
          top:-7%;
        }
      }
    }
    img{
      width: 200px;
      height: 500px;
    }
    .image-fade{
      &::before{
        background-color:$purpleLight!important;
      }
    }
  }
}
.intro1{
  .row{
    .col-8{
      &:first-of-type{
        .box{
          background-color: $purpleLight2;
          .image{
            background-color: $purpleLight;
          }
          button{
            &:hover{
              background-color: $purpleLight;
            }
          }
        }
      }
      &:last-of-type{
        .box{
          background-color: $blueLight2;
          .image{
            background-color: $blueLight;
          }
          button{
            &:hover{
              background-color: $blueLight;
            }
          }          
        }
      }
      .box{
        border-radius: 20px;
        background-color: $beige2;
        background: bisque;
        @include flexCenter;
        flex-direction: column;        

      }
      .image{
        background-color:$beige;
        border-radius: 50%;
        width: 200px;
        height: 200px;
        @include flexCenter;
        img{
          width: 150px;
          height: 150px;
        }
        
      }
      button{
        border-color:black ;
          &:hover{
            background-color: $beige;
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.486) !important;
          }

      }
    }
  }
}
.system{
  .row{
    .col-md-6{
      height: 470px;
      .txt{

      }
      .box{
        background-color: $beige;
        border-radius: 20px;
        padding: 20px;

        .img{
          bottom: -20px;
          img{
            &:first-of-type{
              width:310px ;
              height: 470px;
            }
            &:last-of-type{
              width: 374px;
              height: 116px;
              @include absoluteCenter;
            }
          }
        }
      }
    }
    .table-box{
      background-color: $beige;
      border-radius: 20px;
      padding: 20px;
      height: 100%;  
      @include flexCenter;    
      .img{
        @include flexCenter;
        img{
          width: 300px;
          height: 400px;
        }
        
      }
      
    }
    .txt-modern{
      .ctn{
        display: flex;
        align-items: center;
        .img{
          margin: 20px;
          img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: -20px;
            
              border:4px solid white;
            
          }
        }
        .name{

        }
      }
    }
  }
}
$orange:#ec7a50;
$orangeBut:#ffe7de;
$purple:#905ee6;
$purpleBut:#f0eefe;
$bluef:#1a76d2;
.more-info{
  .carousel{
    a{
      color:purple !important;
    }
    position: relative;
    .buttons{
      position: absolute;
      top:-5%;
      left:50%;
      transform: translate(-50%);
      @include flexCenter;
      @media (max-width:767px) {
        flex-direction: column;
        top:-15%;
        button{
          border-radius: 30px;
          width: 300px!important;
        }
      }
      button{
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border:1px solid #addfe5;
        width: 200px;
        &:first-of-type{
          border-top-left-radius: 30px;
          border-bottom-left-radius: 30px;
        }
        &:last-of-type{
          border-top-right-radius: 30px;
          border-bottom-right-radius: 30px;
        }        
        &:first-of-type{
          &:hover,
          &.active{
            background-color: $blueLight;
          }
        }
        &:last-of-type{
          &:hover,
          &.active{
            background-color: $orangeBut;
          }
        }
        &:hover,
          &.active{
            background-color: $purpleLight;
          }
        img{
          width: 60px;
          height: 65px;
        }
        p{
          font-size: 20px;
          color:black !important;
          margin: 0;
        }
      }
    }
    .content{
      
      .row{
        padding: 80px 0;
        .img{
          img{
            width:264px;
            height: 400px;
          }
        }
        .txt{
          button{
            &:hover{
              background-color: $blueLight;
            }
          }
        }
      }  
    }
  }
}
.num{
  .container{
    .row{
      .col-md-3{
        .boxx{
          .imgg{
            img{
              width: 130px;
              height: 330px;
            }
          }
        }
      }
      .col-8{
        .box{
          @include borderBottom;
        }
      }

    }
  }
}
.step{
  .row{
    
    
    .step1{
      .col-md-6{
        border-radius: 30px;
        padding: 30px;
        min-height: 440px;
        .txt{
          padding: 53px;
          text-align: start;
        }
        .img{
          img{
            width: 245px;
            height: 380px;
            @media (max-width:576px) {
              width: 200px;
              height: 350px;              
            }
          }
        }
      }
    }
  }
}
.reality{
  background-image:url('../img/back.jpg') ;
  background-size: cover;
  .row{
    .col-md-6{

      .image{
        img{
          width: 240px;
          height: 380px;
        }
      }
      .boxes{
        border-radius: 30px;
        background-color: white;;
        padding: 30px;
        .r{
          display: flex;
          align-items: center;
          @include borderBottom;
          svg{
            width:30px ;
            height: 30px;
            color:$purple;
            margin-right: 15px;
          }
        }
      }
    }
  }
}
.find{
  background-color: #f1f5f9;
  .col-lg-5{
    .img{
      margin-top:60px;
      img{
        &:first-of-type{
          width:350px  !important;
          height: 550px!important;
        }  
          &:last-of-type{
            @media (max-width:576px){
              width: 90px !important ;
            }
          }
        
      }
    }
    .r{
      display: flex;
      align-items: center;
      @include borderBottom;
      svg{
        width:30px ;
        height: 30px;
        color:$purple;
        margin-right: 15px;
      }
    }
  }
}
</style>
