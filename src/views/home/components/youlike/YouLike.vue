<template>
    <div class="wrapper">
        <div class="titleWrapper">
            <div class="middleline"></div>
            <h3 class="title">猜你喜欢</h3>
        </div>
        <ul class="youlike-list">
            <li class="youlike-item" v-for="product in youlike_list" :key="product.id">
                <a href="#" class="youlike-link">
                    <div class="img">
                        <img :src="product.small_image" class="youlike-image" alt="">
                    </div>
                    <div class="youlike-description">
                        <p class="youlike-name">{{product.name}}</p>
                        <div class="divide"></div>
                        <div class="youlike-bottom">
                            <div class="youlike-left">
                                <span class="youlike-price">&yen;15.90</span>
                                <span class="youlike-origPrice"><del>&yen;15.90</del></span>
                            </div>
                            <div class="youlike-right">
                                <div class="iconCartWrapper">
                                    <svg viewBox="0 0 52 52" class="icon icon-60">
                                        <defs>
                                            <radialGradient cx="27.0288363%" cy="10.3693483%" fx="27.0288363%" fy="10.3693483%" r="93.8427229%" id="radialGradient-1"><stop stop-color="#4ECA75" offset="0%"></stop><stop stop-color="#39B460" offset="100%"></stop></radialGradient>
                                        </defs>
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g transform="translate(-678.000000, -2742.000000)">
                                                <g transform="translate(678.000000, 2742.000000)">
                                                    <rect fill="url(#radialGradient-1)" x="0" y="0" width="51.8699976" height="51.8699976" rx="25.9349988"></rect>
                                                    <path fill="#FFFFFF" d="M20.3666667,39 C19.1700497,39 18.2,38.0299503 18.2,36.8333333 C18.2,35.6367164 19.1700497,34.6666667 20.3666667,34.6666667 C21.5632836,34.6666667 22.5333333,35.6367164 22.5333333,36.8333333 C22.5333333,38.0299503 21.5632836,39 20.3666667,39 Z M33.3666667,38.1333333 C32.1700497,38.1333333 31.2,37.1632836 31.2,35.9666667 C31.2,34.7700497 32.1700497,33.8 33.3666667,33.8 C34.5632836,33.8 35.5333333,34.7700497 35.5333333,35.9666667 C35.5333333,37.1632836 34.5632836,38.1333333 33.3666667,38.1333333 Z"></path>
                                                    <path stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round" d="M12.1333333,13.8666667 L13.6768756,13.8666667 C15.4621209,13.8666667 16.9554584,15.222463 17.1274221,16.9994069 L18.2224287,28.314386 C18.4068512,30.2200702 20.1012175,31.6154285 22.0069016,31.431006 C22.0111286,31.4305969 22.0153548,31.4301801 22.0195802,31.4297555 L33.2997819,30.296256 C34.7947282,30.1460352 36.0227397,29.0499108 36.3411182,27.581556 L37.8958814,20.4110205 C38.0987345,19.4754663 37.5047629,18.5526049 36.5692087,18.3497518 C36.3853963,18.3098964 36.1963225,18.3002236 36.0094025,18.3211126 L22.8968424,19.7864909"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        youlike_list:Array || []
    }
}
</script>
<style lang="less" scoped>
    .wrapper{
        margin-top: .625rem;
    }
    .titleWrapper{
        position: relative;
        padding: 0 .625rem;
        height: 2.1875rem;
        text-align: center;
    }
    .middleline{
        padding-top: 1.09375rem;
        border-bottom: 1px solid #d8d8d8;
    }
    .title{
        position: relative;
        top: -1rem;
        line-height: 1.75rem;
        height: 1.75rem;
        display: inline-block;
        padding: 0 .4rem;
        background: #f5f5f5;
        font-size: 1rem;
    }
    .icon{
        width: 30px;
        height: 30px;
    }
    .youlike-list{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
    .youlike-item{
        display: flex;
        width: 48%;
        background: #fff;
        margin: .2rem;
    }
    .youlike-link{
        display: flex;
        flex-direction: column;
        margin: .3125rem;
        color: #000;
        font-size: .75rem;

    }
    .youlike-name{
        font-size: .85rem;
        margin-bottom: 1rem;
        white-space: normal;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;

    }
    .youlike-bottom{
        display: flex;
        justify-content: space-between;
        line-height: 1.75rem;
        height: 1.75rem;
    }
    .youlike-bottom span{
        padding-left: .4rem;
    }
    .youlike-price{
        color: #fe6263;
        font-size: .9rem;
    }
    .youlike-origPrice{
        color: #b2b2b2;
    }
    .youlike-image{
        width: 100%;
        height: 100%;
    }
    .youlike-item:last-child,.youlike-item:nth-last-of-type(2){
        margin-bottom: 60px;
    }
</style>