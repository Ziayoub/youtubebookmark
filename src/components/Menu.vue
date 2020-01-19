<template>
    <div class="menu">
        <div class="menu-header">Menu</div>
        <div class="menu-list">
            <router-link to="/">
              <div class="menu-item">Categories</div>
            </router-link>
            <router-link to="/all-videos">
              <div class="menu-item">All Videos</div>
          </router-link>
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
    background-color: rgb(245, 245, 245);
}
</style>