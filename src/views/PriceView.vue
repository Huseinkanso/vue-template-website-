<template>
  <div class="">
    <div class="landing pt-4 my-4">
      <div class="container mb-5">
        <headLanding
          :img="require('../img/service/head.png')"
          title="pricing"
          par="Find the latest changes made to this template"
        />
      </div>
      <div class="link ">
        <a href="#content">
          <img class="" src="../img/service/link.png" alt="">
        </a>
      </div>
    </div>
    <div class="price my-4 py-4">
      <div class="container"></div>
      
      <PriceComp />
    </div>
    <InfoPricing />
  </div>
</template>

<script>
import headLanding from "@/components/headLanding.vue";
import InfoPricing from "@/components/InfoPricing.vue";
import PriceComp from "@/components/PriceComp.vue";
export default {
  name: "PriceView",
  components: {
    headLanding,
    InfoPricing,
    PriceComp,
  },
};
</script>

<style>
</style>