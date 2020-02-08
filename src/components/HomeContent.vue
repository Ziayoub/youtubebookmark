<template>
    <div class="app">
        <div class="content">
            <div class="main-title">
                <h3> Join Us And Create Your Own Youtube Bookmark.</h3>
            </div>
            <div class="subtitle">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor Saepe veniam labore, alias error maxime temporibus eum.</p>
            </div>
            <div class="buttons">
                <router-link to="/register"><button type="submit" class="btn btn-outline-light mr-2">Sign up</button></router-link>
                <router-link to="/login"><button type="submit" class="btn btn-outline-light ">Sign in</button></router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>

.app {
   background-image: linear-gradient(25deg, #163e6e, #1d587c, #20728b, #1e8e99);
   height: 100vh;
   width: 100vw;
   
}
.subtitle {
    color: white;
    position: absolute;
    top: 25%;
    left: 10%;
    font-size: 18px; 
}
.content h3 {

    position: absolute;
    top: 20%;
    left: 10%;
    font-size: 40px;
    color: white;
    font-weight: 700;
}

.buttons {
    position: absolute;
    top: 33%;
    left: 10%;
}
</style>