<template>
    <div class="menu">
        <div class="menu-header">Menu</div>
        <div class="menu-list">
            <div class="menu-item">Categories</div>
            <div class="menu-item">All Videos</div>
        </div>
    </div>

</template>

<style>
.menu {
    padding: 20px 0px;;
    text-align: left;
    /*background-color: red;*/
}

.menu-header {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 10px;
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