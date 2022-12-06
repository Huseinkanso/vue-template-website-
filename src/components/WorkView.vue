<template>
    <div data-aos="zoom-out-left" class="col-sm-6 col-10">
        <div class="img">
          <img class="img-fluid" :src="img" alt="">
          <div class="back">
            <button class="button-2 ">learn more</button>
          </div>
        </div>
        <div class="txt text-start my-3">
          <a href=""><h3 class="text-uppercase fw-bold">{{title}} </h3></a>
          <p>Build a unique Website with Sapiens Webflow Template</p>
        </div>
      </div>
</template>

<script>

export default {
    name:"WorkVue",
    props:["img","title"],
}
</script>

<style lang="scss">
@import "../scss/utilities/_mixins.scss";
.col-sm-6{
    margin: 20px 0;
    .img{
      position: relative;
      overflow: hidden;
      cursor: pointer;
      &:hover{
        .back{
          left: 0;
          button{
            display: block;
            margin:0;
          }
        }
      }
      .back{
        position: absolute;
        left: -100%;
        transition: 0.6s;
        top:0;
        width: 100%;
        height: 100%;
        background-color:#8b8b8beb;
        @include flexCenter;
        button{
          display: none;
          margin-top:30px;
          transition: 0.6s;
          background-color: transparent;
          color:black;
          border-color:gray;
          &:hover{
            background: rgb(143, 139, 139);
            color:white;
            box-shadow: 0 0.5rem 1rem rgba(81, 79, 79, 0.7) !important;
          }
        }
      }
    }
    .txt{
      @include borderBottom;
      a{
        transition: 0.5s;
        &:hover{
          color:#d0b8ea !important ;
        }
      }
    }
  }
</style>