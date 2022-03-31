<script>
export default {
  methods: {
    search_bar(event){
      var input_text = document.getElementById("search-form");
      if(event == "on")
      {
        input_text.value = "";
        input_text.style.color = "black";
        console.log("ici");
      }
      else
      {
        input_text.value = "  Search Characters, Islands or Objects";
        input_text.style.color = "grey";
        console.log("la");
      }
    }
  }
}
</script>

<template>
  <div class="section_container search_container tablet_container">
    <input type="text" value="  Search Characters, Islands or Objects" @focus="search_bar('on')" @blur="search_bar('off')" id="search-form" name="fname">
  </div>
</template>
