<template>
    <nav id="header" class="navbar container navbar-expand-lg navbar-light  p-3 mt-4 position-relative ">
        <div class="container align-items-center">
          <a class="navbar-brand fw-bold fss-2 pb-2" href="#">
            <router-link  class="" to="/">sapiens</router-link> 
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  mb-2 mb-lg-0 ms-auto align-items-center ">
              <li class="nav-item p-2" v-for="link in state.routes" :key="link.title">
                <router-link :to="link.path">
                  <span v-if="link.title=='login'" class="m-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mb-1 bi bi-lock-fill" viewBox="0 0 16 16">
                      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                    </svg>
                  </span>
                  {{link.title}}  </router-link> 
              </li>
              <li class="nav-item p-2">
                <button class="btn btn-primary button-1 ">buy template
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right " viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                  </span>
                </button>
              </li>
              
              
            </ul>
            
          </div>
        </div>
        
      </nav>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
  setup(){
    
    const state=reactive({
      routes:[
        
        {path:"/AboutView",title:"about"},
        {path:"/ServiceView",title:"service"},
        {path:"/WorkPage",title:"work"},
        {path:"/PriceView",title:"pricing"},
        {path:"/FaqView",title:"FAQ"},
        {path:"/BlogView",title:"Blog"},
        {path:"/ContactView",title:"contact"},
        {path:"/LoginView",title:"login"},
      ]
    })



    return {state}
  },
    name:"HeaderVue",
}
</script>

<style lang="scss">
nav {
  padding: 30px;
  border-radius: 40px;
  background: #fda8f9;

  
  a {
    font-weight: bold;
    color: white;
    text-decoration: none;
    font-size: 20px;

    &.router-link-exact-active {
      color: #9926f0 !important;
    }
  }
  .button-1{
    padding: 12px 15px;
    border-radius: 40px;
    font-size: 18px;
    text-transform: capitalize;
    svg{
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }
  }
}
</style>