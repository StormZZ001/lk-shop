<template>
    <div class="wrapper">
        <div class="iconWrapper">
            <svg viewBox="0 0 32 32" class="icon iconLocation">
                <path fill="#81838E" fill-rule="evenodd"
                      d="M14.521 30.445c.817.738 2.142.75 2.958 0 0 0 11.521-9.82 11.521-17.158C29 5.95 23.18 0 16 0S3 5.949 3 13.287c0 7.339 11.521 17.158 11.521 17.158zM16 18a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"></path>
            </svg>
            <span class="address">自动定位位置</span>
            <svg viewBox="0 0 32 32" class="icon iconArrow">
                <path fill="#81838E" fill-rule="evenodd"
                      d="M14.724 19.17c.783.784 2.05.788 2.837 0l5.047-5.047c1.173-1.172.776-2.123-.869-2.123H10.545c-1.652 0-2.04.952-.869 2.123l5.048 5.048z"></path>
            </svg>
        </div>
        <div class="searchWrapper">
            <div class="searchContent">
                <div class="iconSearchWrapper">
                    <svg viewBox="0 0 32 32" class="icon iconSearch">
                        <path fill="#999" fill-rule="evenodd"
                              d="M23.624 21.503c3.47-4.51 3.14-11.003-.992-15.135-4.491-4.49-11.773-4.49-16.264 0-4.49 4.491-4.49 11.773 0 16.264 4.132 4.131 10.625 4.462 15.135.992l4.66 4.66a1.5 1.5 0 1 0 2.121-2.121l-4.66-4.66zm-3.114-.993A8.5 8.5 0 1 0 8.49 8.49a8.5 8.5 0 0 0 12.02 12.02z"></path>
                    </svg>
                    <input type="text" placeholder="输入商品名称" class="iconSearchInput"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .wrapper{
      position: fixed;
      top: 0;
      left: 0;
      height: 3rem;
      line-height: 3rem;
      box-sizing: border-box;
      width: 100%;
      background: white;
      display: flex;
    }
    .icon{
      width: 1rem;
      height: 1rem;
    }
    .iconWrapper{
      flex: 0 0 8rem;
      position:absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      left: .3rem;
    }
    .searchWrapper{
      position: absolute;
      left: 8rem;
      top: .625rem;
      vertical-align: middle;
    }
    .searchContent{
      width: 100%;
      background: #f2f2f2;
      height: 1.875rem;
      line-height: 1.875rem;
      border-radius: 3.125rem;
    }
    .iconSearchInput{
      background: #f2f2f2;
      text-align: center;
      border-radius: 3.125rem;
    }
    .iconSearch{
      position: absolute;
      left: 25%;
      top: 25%;
    }
</style>