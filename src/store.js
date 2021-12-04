import { createStore } from "vuex";

const store = createStore({
    state(){
        return{
            currentComponent:'',
            categoryDetail:{}
        }
    },
    mutations:{
        setCurrentComponent(state, payload){
            state.currentComponent = payload.currentComponent
        },
        setCategory(state, payload){
            state.categoryDetail = payload
        }
    },
    actions:{
        async actionGetCategories(context){
           let categoryDetail = await new Promise((resolve)=>{
            setTimeout(()=>{
                let categoryDetail = {title:'Erectile Dysnfunction treatments', data:[
                    {feature1:'Fast acting', short_txt:'A pill that works in 15-30 minutes and lasts for 4 hours.'},
                    {feature1:'Stress relief', short_txt:'relief in short time'},
                ]};
                resolve(categoryDetail)
            },1000)
           })
           context.commit('setCategory', categoryDetail)
        }
    }
})

export default store;