<template>
    <div class="en-language">
        <p class="para">Hello UK domain</p>
        <component v-bind:is="currentComponent"></component>
        <!--<Category>
            <p>This is slot content {{ item }}</p>
        </Category>-->
        <!--<Compositioncomp />-->
    </div>
</template>

<script>
import Category from "../components/Category.vue"
import HelloWorld from '@/components/HelloWorld.vue'
//import Compositioncomp from "../components/Compositioncomp.vue";
import { defineAsyncComponent } from 'vue'

export default {
    data(){
        return{
            item:'data property'
        }
    },
    components:{
        //Compositioncomp : () => import('@/components/Compositioncomp.vue') ,
        HelloWorld,
        //Compositioncomp,
        Category,
        Compositioncomp:defineAsyncComponent(() =>
            import('../components/Compositioncomp.vue')
        )
    },
    computed:{
        currentComponent(){
            console.log(this.$store.state.currentComponent);
            return this.$store.state.currentComponent
        }
    }
    
}
</script>