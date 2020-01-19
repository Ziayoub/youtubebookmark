<template>
  <div class="header d-flex justify-content-between align-items-center">
    <form class="form-inline w-75">
      <input class="form-control mr-sm-2 w-75" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-primary my-2 my-sm-0" type="submit"><i class="eva eva-search-outline"></i></button>
    </form>

    <div class="d-flex align-items-center">
      <i class="eva eva-person mr-2"></i>
      <span>user@gmail.com</span>
    </div>

  </div>
</template>

<style>
.header {
  height: 60px;
  padding: 0 10px;
  background-color: white;
  border-bottom: 1px solid #ccc;
}

</style>