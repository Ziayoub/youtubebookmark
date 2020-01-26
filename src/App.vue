<template>
  <router-view/>
</template>

<style>
body {
  font-family: 'Lato', sans-serif !important;
}
* {
  box-sizing: border-box;
}
a {
  color: #007bff !important;
  text-decoration: none !important; /* no underline */
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
