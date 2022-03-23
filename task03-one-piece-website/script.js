function read_more()
{
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

function open_menu()
{
  var img = document.getElementById("menu");
  var menu_items = document.getElementById("menu_items");
  if (menu_items.style.display == "inline") {
    img.src = "../img/hamburger.png"
    menu_items.style.display = "none"
  }
  else {
    img.src = "../img/close.png"
    menu_items.style.display = "inline"
  }
}

function search_bar(change_type)
{
  // alert(window.width)
  var input_text = document.getElementById("search-form");
  if(change_type == "on")
  {
    input_text.value = "";
    input_text.style.color = "black";
  }
  else
  {
    input_text.value = "  Search Characters, Islands or Objects";
    input_text.style.color = "grey";
  }
}
