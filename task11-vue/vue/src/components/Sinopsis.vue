<script>
export default {
  methods: {
    read_more(event) {
      var dots = document.getElementById("dots");
      var moreText = document.getElementById("more");
      var btnText = document.getElementById("read_more_btn");
        if (dots.style.display === "none") {
           dots.style.display = "inline";
           btnText.innerHTML = "Read All";
           moreText.style.display = "none";
         } else {
           dots.style.display = "none";
           btnText.innerHTML = "Read less";
           moreText.style.display = "inline";
         }
      }
  }
}
</script>

<template>
  <div class="section_container tablet_container">
    <h3 class="sinopsis_title">Sipnosis</h3>
    <p class="sinopsis">Dawn Island is an island located in the East Blue and where the Goa Kingdom is situated.</p>
    <p class="sinopsis">It is the home island of Monkey D. Luffy and the starting point of his journey into piracy, as well as the home island of his father, Monkey D. Dragon.
    <span id="dots">...</span></p>
    <!-- <button onclick="read_more()" id="read_more_btn">Read more</button> -->
      <!-- fdgdfgsd -->
    <span id="more">
      <p class="sinopsis">This is also the adopted home of Portgas D. Ace after the death of his mother and the home of Sabo and his family.</p>
      <p class="sinopsis">Reverse Mountain is an extremely tall mountain at one of the points where the four Blues meet and is one of the two known entrances to the Grand Line.</p>
      <p class="sinopsis">It is located in the Red Line and is the geographical antipode of Mary Geoise.</p>
    </span>
    <span @click="read_more()" id="read_more_btn">Read All</span>
  </div>
</template>
