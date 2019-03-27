<template>
    <div>
      <div class="me" id="me1">
  <el-checkbox :indeterminate="isIndeterminate" :v-model="mycheckAll" @change="handleCheckAllChange" class="cc">{{qxtext}}</el-checkbox>
    </div>
      <div class="me" id="me2">
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <el-checkbox v-for="city in cities" :label="city" :key="city" class="aa" >{{city1}}</el-checkbox>
  </el-checkbox-group>
      </div>
  </div>

</template>

<script>
  const cityOptions = ['查看', '新增', '编辑', '删除'];

    export default {
        name: "fxk",
      data() {
        return {
          city1:'',
          // mycheckAll: true,
          checkedCities: [],
          cities: cityOptions,
          isIndeterminate: false,

        };
      },
      props:["qxtext","mycheckAll"],
      methods: {
        handleCheckAllChange(val) {
          this.checkedCities = val ? cityOptions : [];
          this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
          let checkedCount = value.length;
          this.checkAll = checkedCount === this.cities.length;
          this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        }
      }
    }


</script>

<style scoped>

#me1{
  width: 140px;
  /*border: 1px solid black;*/
  /*margin-left: 20px;*/

}
.cc{
  margin-left: 62.5px;
  /*width: 140px;*/


}

  .me{
    float: left;
  }
  #me2{
    /*margin-left: 40px;*/
  }
.aa{
  margin-left: 120px;
}

</style>
