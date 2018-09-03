<template>
  <div>
      <div v-if="fatherComponent == 'home'" class="home-logo item-container">
      </div>
      <div v-if="fatherComponent == 'item'" class="item-logo item-container" >
      <ul v-for="(item, index) of data.question"
          v-if="index == currentItem"
          class="item-question">
          <li v-for="(innerItem,index) of item.topic_answer"
              v-bind:class="{clickColor: currentIndex==index}"
              @click="changeColor(index)">{{index}} : {{innerItem.answer_name}}</li>
      </ul>
      </div>

      <header v-if="fatherComponent == 'home'" class="top-tips">
          <span class="num-tip">第一周</span>
      </header>
      <header v-if="fatherComponent == 'item'" class="top-tips">
          <span class="num-tip">{{data.question[currentItem].topic_name}}</span>
      </header>
      <div class="button home" v-if="fatherComponent == 'home'" @click="transfer"></div>
      <div v-if="fatherComponent == 'item'">
      <div class="button item"  v-if="currentItem < data.question.length-1" @click="nextItem(data.question.length)"></div>
      <div class="button final"  else @click="nextItem(data.question.length)"></div>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
        name:'Common',
        props:{
            fatherComponent: String
        },
        data: function(){
            return {
                currentItem: 0,
                currentIndex: null,
                isTrue: false
            }
        },
        computed: {
            ...mapState({
              data: 'data'
            })
        },
        methods: {
            transfer () {
                 this.$router.push('item')
            },
            nextItem (length) {
              if(this.currentIndex == null){
                alert('你还没有选择答案')
              }else{
                this.currentItem++
                this.currentIndex = null
                console.log(this.currentItem)
              }
              if(this.currentItem >= length){
                this.$router.push('final')
              }
            },
            getDataSucc () {
                this.$store.dispatch('getData')
            },
            changeColor (type) {
                this.currentIndex = type
            }
        },
        mounted () {
          this.getDataSucc()
        }
    }
</script>

<style lang="stylus" scoped>
  .home-logo
      background-position:right center
      background-size:22.142rem 100%
      background-image: url('../images/1-2.png')
  .item-logo
      background-position:right center
      background-size:22.142rem 100%
      background-image: url('../images/2-1.png')
      position:relative
      .item-question
        list-style:none
        color:white
        position:absolute
        left:5rem
        top:5rem
        font-size:1.3rem
        .clickColor
          background-color:red
  .item-container
      width:22.15rem
      height:19.125rem
      position:absolute
      top:7.35rem
      left:1.0rem
  .top-tips
      position:absolute
      top:-2rem
      height:12.35rem
      width:6.25rem
      right:1rem
      background:url('../images/1-3.png') no-repeat
      background-size:100% 100%
      .num-tip
          position:absolute
          left:1.7rem
          bottom:1.7rem
          height:1.2rem
          width:3.3rem
          background-color:rgb(131, 240, 186)
          padding-left:0.15rem
          color:#a57c50
          font-weight:600
  .button
      height:3rem
      width:7rem
      position:absolute
      bottom:14rem
      left:50%
      margin-left:-3.5rem
  .item
      background:url('../images/2-2.png')
      background-size:100% 100%
  .home
      background:url('../images/1-4.png')
      background-size:100% 100%
  .final
      background:url('../images/3-1.png')
      background-size:100% 100%


</style>