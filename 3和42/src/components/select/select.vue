<template>
  <el-select v-model="value" :placeholder='placeHolder' @change="searchEvent">
    <el-option
      v-for="item in options1"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    props:['placeHolder','options1'],
    data() {
      return {
        options: [],
        value: ''
      }
    },
    methods: {
      searchEvent(val) {
        this.$emit('searchEvent',val);
      }
    },


  }
</script>
<style>
  .el-input__inner{
    border-radius: 4px;
    height: 30px;
    width: 180px;

  }
  .el-input__icon{
    line-height: 30px;
  }
  input:focus{outline: none}
  input::-webkit-input-placeholder{
    font-size: 12px;
  }

  .el-select .el-input.is-focus .el-input__inner {
    border-color: #ccc;
  }

  .el-select-dropdown{
    margin: 19px 0;
  }
</style>
