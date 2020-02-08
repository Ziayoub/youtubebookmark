<template>
    <div class="app mx-auto my-0">
        <h1 class="mb-5">Youtube Bookmark</h1>
        <form>
            <input type="text" class="form-control w-100 " id="name" placeholder="Full name">
            <input type="email" class="form-control w-100 mt-2" id="email" placeholder="Email address" aria-describedby="emailHelp">
            <input type="password" class="form-control my-2" placeholder="Password" id="password">
            <button type="submit" class="btn btn-outline-dark w-100 mb-2">Sign up</button>
        </form>
        <small><router-link to="/Login">Already have an account?</router-link></small>
    </div>    
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>