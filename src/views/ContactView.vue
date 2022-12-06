<template>
  <div class="">
    <div class="landing pt-4 my-4">
      <div class="container mb-5">
        <headLanding :img="require('../img/service/head.png')" title="contact us" par="Drop us your message!"/>
      </div>
      <div class="link ">
        <a href="#content">
          <img class="" src="../img/service/link.png" alt="">
        </a>
      </div>
    </div>
    <div class="content" id="content">
      <div class="container">
        <div class="row align-items-center  justify-content-center">
          <div class="col-sm-4 col-8 mx-sm-0 mx-auto text-sm-start text-center">
            <SideInfo/>
          </div>
          <div data-aos="fade-up-right" class="col-8 mx-sm-0 mx-auto  text-sm-start text-center">
            <div class="head text-start">
              <h2>We are Here to Help</h2>
              <p>Sapiens is the perfect Business Webflow Template you need for your Company or Startup.</p>
            </div>
            <form action="">
              <div  class="info my-2">
                <input type="text" placeholder="your name" class="">
                <input type="text" placeholder="your last name" class="">
                <input type="email" placeholder="email" class="">
                <input type="tel" placeholder="mobile" class="">
              </div>
              <div  class="select my-2">
                <div class="">
                  <input type="checkbox" name="webDesign">
                <label for="webDesign">webDesign</label>
                </div>
                <div class="">
                  <input type="checkbox" name="webflow">
                <label for="webflow">webflow development</label>
                </div>
                <div class="">
                  <input type="checkbox" name="other">
                <label for="other">other</label>
                </div>
              </div>
              <div  class="option my-2">
                <select name="" id="">
                  <option value="">budget</option>
                  <option value="">$900-1900$</option>
                  <option value="">$2000-4900$</option>
                  <option value="">$4900-9900$</option>
                </select>
              </div>
              <textarea  name="" id="" cols="30" rows="10">your message</textarea>
              <button  class="btn btn-primary d-block w-100" type="submit">submit</button>
            </form>
          </div>
        </div>
      </div>
    </div> 
    <InstaView/>   
  </div>
</template>

<script>
import headLanding from '@/components/headLanding'
import SideInfo from '@/components/SideInfo'
import InstaView from '@/components/InstaView'
export default {
  name:"ContactView",
  components:{
    headLanding,
    SideInfo,
    InstaView
  }
}
</script>

<style lang="scss">
@import '@/scss/utilities/mixins';
.content{
  input,
  select,
  textarea{
    &::placeholder{
      font-size: 15px;
      text-transform: capitalize;
    }
  &:focus{
    outline:2px solid #d8dfe2;
  } 
  
  height: 45px;
  }  
  .info{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
    input{
      width: 49%;
    }
    @media (max-width:600px){
      flex-direction: column;
      justify-content: center;
      input{
        width: 100%;
      }
    }
  }
  .select{
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 16px;
    text-transform: capitalize;   
    @media (max-width:600px){
      flex-direction: column;
      justify-content: center;
    } 
    input{
      height: fit-content;
    }
    div{
      @include flexCenter;
    }
  }
  .option{
    select{
      width: 100%;
    }
  }
  textarea{
    width: 100%;
    height: 200px;
  }
}
</style>