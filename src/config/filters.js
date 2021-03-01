import Vue from 'vue'

Vue.filter('moneyFormat',(value)=>{
    return '￥'+Number(value).toFixed(2)
})