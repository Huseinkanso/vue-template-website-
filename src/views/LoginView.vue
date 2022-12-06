<template>
  <div class="login">
    <div class="container">
      <div class="row ">
        <div data-aos="fade-down-left" data-duration="2000" class="col-md-6 col-11  bg-white my-5 mx-auto">
          <headLanding :img="require('../img/head2.png')" title="Sign in" par="fill up this form to sign in"/>
          <form action="">
            <div  class="fill w-75 mx-auto d-flex flex-column text-start my-3 p-2">
              <label for="name">Name</label>
              <input type="text" value="" placeholder="name">
              <label for="email">email</label>
              <input type="email" value="" placeholder="email">
              <label for="password">password</label>
              <input type="password" value="" placeholder="password">              
            </div>
            <button   class="btn btn-primary d-block mx-auto w-75" type="submit">submit</button>
            <p data-aos="fade-left" class="my-2">
              don't have an account? 
              <a href="">sign up</a> or 
              <a href="">forgot your password</a>
            </p>
            <div  class="sign-other">
              <button class="btn my-2 btn-light d-block w-75 mx-auto">
                <img src="../img/google.png" alt="">
                sign in with google
              </button>
              <button class="btn my-2 btn-light d-block w-75 mx-auto">
                <img src="../img/facebook.png" alt="">
                sign in with facebook
              </button>
            </div>
          </form>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import headLanding from '@/components/headLanding.vue';
export default {
  name:"LoginView",
  components:{
    headLanding
  }
}
</script>

<style lang="scss">
.login{
  background-image: url('../img/back.jpg');
  background-size: cover;
  .col-md-6{
    border-radius: 70px;    
  }
  .fill{
    width: 90%;
    margin: auto;
    label{
      font-size: 25px;
      font-weight: bold;
      text-transform: capitalize;
      padding: 5px 0;
    }
    input{
      height: 40px;
      &::placeholder{
        font-size: 20px;
        text-transform: capitalize;
      }
      &:focus{
        outline: 1px solid purple;
      }
    }
    
  }
  button{
    border-radius: 100px !important;
    min-height: 50px;
  }
  a{
    color:purple !important;
    transition: 0.4s;
    &:hover{
      color:gainsboro !important;
    }
  }
  .sign-other{
    button{ 
      color:purple;
      transition: 0.4s;
      border:1px solid purple;
      &:hover{
        background-color: purple;
        color:white;
      }  
      img{
        width: 35px;
        margin-right: 15px;
      }
    }
  }
}
</style>