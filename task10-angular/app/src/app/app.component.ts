import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  team          = "assets/img/team.jpeg";
  hamburger     = "assets/img/hamburger.png";
  close         = "assets/img/close.png";
  logo          = "assets/img/logo.png";
  monkeydluffy  = "assets/img/monkeydluffy.svg";
  ace           = "assets/img/ace.svg";
  zoro          = "assets/img/zoro.svg";
  nico          = "assets/img/nico.svg";
  dawn          = "assets/img/dawn.svg";
  reverse       = "assets/img/reverse.svg";
  object        = "assets/img/object.svg";
  pngwing       = "assets/img/pngwing.png";
  lorem         = "assets/img/lorem.png";

  // constructor() {
  //   this.dots = this.dots.nativeElement;
  // }



  @ViewChild("dots") dots!: ElementRef;
  @ViewChild("moreText") moreText!: ElementRef;
  @ViewChild("btnText") btnText!: ElementRef;
  read_more()
  {
    var dots = this.dots!.nativeElement;
    var moreText = this.moreText!.nativeElement;
    var btnText = this.btnText!.nativeElement;

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


  @ViewChild("menu") menu!: ElementRef;
  @ViewChild("menu_items") menu_items!: ElementRef;
  open_menu()
  {
    // var img = document.getElementById("menu");
    // var menu_items = document.getElementById("menu_items");
    var menu = this.menu!.nativeElement;
    var menu_items = this.menu_items!.nativeElement;
    if (menu_items.style.display == "inline") {
      menu.src = this.hamburger
      menu_items.style.display = "none"
    }
    else {
      menu.src = this.close
      menu_items.style.display = "inline"
    }
  }

  // var input_text = document.getElementById("search-form");
  @ViewChild("input_text") input_text!: ElementRef;
  search_bar(change_type: string)
  {
    // alert(window.width)
    // var input_text = document.getElementById("search-form");
    var input_text = this.input_text!.nativeElement;
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

}
