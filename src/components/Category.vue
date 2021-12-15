<template>
    <div class="category-header">
        <div class="left"><h4>{{ categoryDetail.title }}</h4></div>
        <div class="right">
            <div v-for="(feature, index) in categoryDetail.data" :key="index" class="feature-box">
                <h4>{{ feature.feature1 }}</h4>
                <p class="para">{{ feature.short_txt }}</p>
            </div>
            <div class="slot-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            categoryDetail:{}
        }
    },
    mounted(){
        this.categoryDetail = this.$store.state.categoryDetail
    }
}
</script>
<style scoped>
p.para{
    font-size:41px;    
}
</style>