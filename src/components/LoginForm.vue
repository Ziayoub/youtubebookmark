<template>
    <div class="app mx-auto my-0">
        <h1 class="">Youtube Bookmark</h1>
        <form >
            <input type="email" class="form-control w-100 " id="exampleInputEmail1" placeholder="Email address" aria-describedby="emailHelp">
            <input type="password" class="form-control my-2" placeholder="Password" id="exampleInputPassword1">
            <button type="submit" class="btn btn-outline-primary w-100 mb-2">Sign in</button>
            <small><router-link to="/Register">Create an account?</router-link></small>
        </form>
        
    </div>    
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>