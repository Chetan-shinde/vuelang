<template>
    <div class="en-language">
        <p>Hello DE domain</p>
        <component v-bind:is="currentComponent"></component>
    </div>
</template>

<script>
import Category from "../components/Category.vue"
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    components:{
        Category,
        HelloWorld
    },
    computed:{
        currentComponent(){
            return this.$store.state.currentComponent
        }
    }
}
</script>