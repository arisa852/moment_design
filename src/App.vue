<script>
  
import logo from '@/assets/images/mdlogo.svg';
//import { App } from 'ant-design-vue';

export default {
  data() {
    return {
      imageUrl: logo
}  
  }
}


</script>

<template>

 <header>
  
 <div class="pageheader">

 <a-page-header
      class="demo-page-header"
      style="display: flex;justify-content: space-between;" 
      title="Moment-Design"
      sub-title="專屬你的時刻，由你來設計"
     
    >
   
    <a-input-search
      v-model:value="value"
      placeholder="input search text"
      style="width: 300px;margin-right: 300px;"
      @search="onSearch"
    />
  
     
    <a-button key="1" style="margin-right: 20px;font-size: 16px;"
    >登入</a-button>
   <a-button key="2"
        style="margin-right: 20px;font-size: 16px;">EN</a-button>
   <a-button key="3"
        style="margin-right: 20px;font-size: 16px;">白</a-button>
        
 </a-page-header>
 
</div>
 </header>

 <router-view></router-view>
 <footer></footer>

 




</template>

<style lang="scss" scoped>

header {
  background-color:#A9D4F1;
  color: #fff;
 
.pageheader{

  max-width: 1280px;
  margin:0 auto;
}


 
 }












</style>









