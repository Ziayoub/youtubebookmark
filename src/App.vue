<template>
  <router-view/>
</template>

<style>
* {
  box-sizing: border-box;
}

.sidebar-layout {
  flex: 1;
}
.right {
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  border-left: 1px solid rgb(220, 220, 220);
  flex: 5;
}
.content {
  display: flex;
  flex-direction: row;
}
.content > .content-container {
  flex: 4;
  min-height: 60vh;
}
</style>
