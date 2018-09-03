<template>
    <div class="final">
        <div class="header">
           <p class="final_score">20分！</p>
           <p class="final_text">你说，是不是吧知识都还给小学老师了？</p>
        </div>
        <div class="share" @click="share"></div>
        <div class="center">关注扫码点赞</div>
        <div class="scan"></div>
        <div class="hide" ref="show" @click="hidden">
            <img src="../images/5-2.png" >
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Final',
        methods: {
            share() {
                  this.$refs.show.style.display = 'block'
            },
            hidden() {
                  this.$refs.show.style.display = 'none'
            }
        }
    }
</script>

<style lang="stylus" scoped>
 .final
     position:absolute
     top:0
     left:0
     right:0
     bottom:0
     background:url('../images/4-1.jpg')
     .header
         width:12rem
         height:12rem
         margin:0 auto
         background:url('../images/4-2.png')
         background-size:100% 100%
         position:relative
         margin-top:2rem
         .final_score
             position:absolute
             font-size:2rem
             color:red
             text-align:center
             top:6.5rem
             left:3.8rem
         .final_text
             position:absolute
             text-align:center
             top:9.5rem
             left:1rem
             font-size:0.8rem
     .share
         width:8rem
         height:3.5rem
         margin: 0 auto
         background:url('../images/4-3.png')
         background-size:100% 100%
         margin-top:2rem
     .scan
         width:10rem
         height:10rem
         margin: 0 auto
         background:url('../images/4-4.png')
         background-size:100% 100%
     .center
         text-align:center
         margin-top:2rem
     .hide
         position:fixed
         top:0
         right:0
         left:0
         bottom:0
         background:url('../images/5-1.png')
         background-size:100% 100%
         opacity: 0.92
         display:none
         img
             height: 10.975rem;
             width: 11.95rem;
             position: fixed;
             top: .5rem;
             left: 50%;
             margin-left: -5.975rem;


</style>