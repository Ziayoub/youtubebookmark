<template>
    <div class="menu">
        <div class="menu-header">Menu</div>
        <div class="menu-list">
          <div class="menu-item">
            <router-link to="/">Categories</router-link>
          </div>
          <div class="menu-item">
            <router-link to="/all-videos">All Videos</router-link>
          </div>
        </div>
    </div>

</template>

<style>
.menu {
    padding: 20px 0px;;
    text-align: left;
    height: 100%;
    /* border-right: 1px solid #ccc; */
}

.menu-header {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 12px;
    color: gray;
    padding: 20px;
}

.menu-item {
    padding: 15px 20px;
    /*background-color: yellow;*/
    border-bottom: 1px solid whitesmoke;
    cursor: pointer;
}

.menu-item:hover {
    background-color: aqua;
}
</style>