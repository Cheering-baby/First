<template>
    <div>
        <common father-component="item"></common>
    </div>
</template>

<script>
import Common from '../components/common'
import axios from 'axios'
    export default {
        name: 'Item',
        components: {
            Common
        }
    }
</script>

<style lang="stylus" scoped>
</style>