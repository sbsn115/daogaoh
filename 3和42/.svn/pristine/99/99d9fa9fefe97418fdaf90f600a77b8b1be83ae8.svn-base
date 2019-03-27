<template>
 <div >
  <div class="retiv">
    <i class="el-icon-search iconColor"></i>
    <input type="text" :placeholder="placeH" class="inputS"
           v-model="searchText">
  </div>
 </div>
</template>
<script>
    export default {
      name:'placeH2',
      data(){
        return{
          searchText:""
        }
      },
      watch:{
        searchText(val){
          this.$emit('getSearchText',val)
        }
      },
      props:['placeH'],

    }
</script>
<style scoped>
  .inputS{
    height: 28px;
    width: 150px;
    border-radius: 30px;
    border: 1px solid #ccc;
    padding: 0 0 0 30px;
    line-height: 28px;
  }

  input:focus{outline: none}
  input::-webkit-input-placeholder{
    font-size: 12px;
    color: #ccc;
  }
  .retiv{
    width: 200px;
    height: 40px;
    position: relative;
  }
.iconColor{
  color: rgba(0, 0, 0, 0.77);
  position: absolute;
  top: 7px;
  left: 20px;
}
</style>
