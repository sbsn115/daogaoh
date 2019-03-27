<template>
  <div id="app">
    <div :class="selfModalStyle" @touchmove.stop.prevent>
      <!-- 自定义内容 -->
      <slot name="modelContent"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'selfModal',
    data() {
      return {
        showModal: ""
      }
    },
    props:['selfModalStyle']
  }

</script>

<style scoped>
  .self-modal {
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(21, 21, 21, 0.3);
    z-index: 3000;
  }

  .mySlot {
    width: 300px;
    height: 200px;
    background-color: #fff;
  }

</style>
