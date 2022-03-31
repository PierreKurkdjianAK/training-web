<script>
export default {
  methods: {
    open_menu(event){
      var img = document.getElementById("menu");
      var menu_items = document.getElementById("menu_items");
      if (menu_items.style.display == "inline") {
        img.src = "../src/assets/img/hamburger.png"
        menu_items.style.display = "none"
      }
      else {
        img.src = "../src/assets/img/close.png"
        menu_items.style.display = "inline"
      }
    }
  }
}
</script>

<template>
  <div class="section_container header_container">
    <img src="../assets/img/hamburger.png" id="menu" @click="open_menu()" class="hamburger_img">
    <img src="../assets/img/logo.png" class="logo_img">
  </div>
</template>
