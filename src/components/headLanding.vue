<template>
    <div data-aos="fade-down-right" data-aos-duration="1000" class="land my-4 py-3">
        <div class="img bg-primary mt-4 mb-2 mx-auto">
            <img :src="img" alt="">
        </div>
        <h2 class="py-2"> {{title}} </h2>
        <p>{{par}} </p>
    </div>
</template>

<script>
export default {
    name:"headLanding",
    props:["img","title","par"],
}
</script>

<style lang="scss">
.land{
    .img{
        border-radius: 30px;
        width: fit-content;
        padding: 5px 20px ;
        img{
            width: 70%;
            height: 70%;
            
        }
    }
}
</style>