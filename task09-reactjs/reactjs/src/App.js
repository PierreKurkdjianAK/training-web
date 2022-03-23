// import logo from './logo.svg';
// import './App.css';
import './style.css';
import hamburger from './img/hamburger.png';
import close from './img/close.png';
import logo from './img/logo.png';
import team from './img/team.jpeg';
import zoro from './img/zoro.svg';
import monkeydluffy from './img/monkeydluffy.svg';
import ace from './img/ace.svg';
import nico from './img/nico.svg';
import dawn from './img/dawn.svg';
import reverse from './img/reverse.svg';
import object from './img/object.svg';
import pngwing from './img/pngwing.png';
import lorem from './img/lorem.png';

import React from "react";

class App extends React.Component {
   open_menu()
  {
      console.log("open_menu called");
      var img = document.getElementById("menu");
      var menu_items = document.getElementById("menu_items");
      console.log(img.src);
      if (menu_items.style.display === "inline") {
        img.src = require(`./img/hamburger.png`)
        menu_items.style.display = "none"
      }
      else {
        img.src = require(`./img/close.png`)
        menu_items.style.display = "inline"
      }
      console.log(img.src);
  }

   read_more()
  {
      console.log("read_more called");
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

   search_bar(change_type)
  {
    console.log("search_bar called");
    var input_text = document.getElementById("search-form");
    if(change_type === "on")
    {
      // input_text.value = "";
      this.setState({search_input_value: ""});
      input_text.style.color = "black";
    }
    else if(change_type === "off")
    {
      input_text.value = "  Search Characters, Islands or Objects";
      input_text.style.color = "grey";
    }
  }

  state = {
    search_input_value: "  Search Characters, Islands or Objects"
  }  

  update_input_text(val) {
    console.log("_handleChangeEvent called");
    this.setState({search_input_value: val.target.value});
  }

  render() {
    return (

      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    
      <html>
        <head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          {/* <script src="https://unpkg.com/react@17/umd/react.development.js" crossOrigin></script>
          <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossOrigin></script> */}
          <script type="text/javascript" src="script.js"></script>
          {/* <link rel="stylesheet" href="style.css"> */}
        </head>
      
        <body>
      
          <div className="page_container">
      
            <div className="section_container header_container">
              <img src={hamburger} alt="" id="menu" onClick={() => { this.open_menu();}} className="hamburger_img" />
              <img src={logo} alt="" className="logo_img" />
            </div>
      
            <div id="menu_items">
              <div className="menu_item"> Home </div>
              <div className="menu_item"> Characters </div>
              <div className="menu_item"> Islands </div>
              <div className="menu_item"> Mist Objects </div>
              <div className="menu_item"> Flags </div>
            </div>
      
            <div className="section_container illustration_container">
              <img src={team} alt="" className="illustration_img" />
              <div className="gradient"></div>
            </div>
      
            <div className="section_container tablet_container">
              <h3 className="sinopsis_title">Sipnosis</h3>
              <p className="sinopsis">Dawn Island is an island located in the East Blue and where the Goa Kingdom is situated.</p>
              <p className="sinopsis">It is the home island of Monkey D. Luffy and the starting point of his journey into piracy, as well as the home island of his father, Monkey D. Dragon.
              <span id="dots">...</span></p>
              <span id="more">
                <p className="sinopsis">This is also the adopted home of Portgas D. Ace after the death of his mother and the home of Sabo and his family.</p>
                <p className="sinopsis">Reverse Mountain is an extremely tall mountain at one of the points where the four Blues meet and is one of the two known entrances to the Grand Line.</p>
                <p className="sinopsis">It is located in the Red Line and is the geographical antipode of Mary Geoise.</p>
              </span>
              <span onClick={() => { this.read_more(); }} id="read_more_btn">Read All</span>
            </div>
      
            <div className="section_container search_container tablet_container">
              <input type="text" 
                    // value="  Search Characters, Islands or Objects" 
                    onFocus={() => { this.search_bar('on'); }} 
                    onBlur={() => { this.search_bar('off'); }} 
                    onChange={word =>{this.update_input_text(word);}} 
                    value={this.state.search_input_value}
                    id="search-form" 
                    name="fname" />
            </div>
      
            <div className="section_container tablet_container">
              <div className="section_header">
                <span className="section_title">Characters</span>
                <span className="section_more">See all</span>
              </div>
              <div className="character_container">
                <img src={monkeydluffy} alt="" className="character_img" />
                <h3 className="character_title">Monkey D. Luffy</h3>
              </div>
              <div className="character_container">
                <img src={ace} alt="" className="character_img" />
                <h3 className="character_title">Portgas D. Ace</h3>
              </div>
              <div className="character_container char_3">
                <img src={zoro} alt="" className="character_img" />
                <h3 className="character_title">Roronoa Zoro</h3>
              </div>
              <div className="character_container char_3">
                <img src={nico} alt="" className="character_img" />
                <h3 className="character_title">Nico Robin</h3>
              </div>
            </div>
      
            <div className="section_container tablet_container">
              <div className="section_header">
                <span className="section_title">Islands</span>
                <span className="section_more">See all</span>
              </div>
              <div className="island_container">
                <img src={dawn} alt="" className="character_img" />
                <div className="island_location">
                  <span className="island_name">Dawn Island</span>
                  <span className="island_place">East Blue</span>
                </div>
              </div>
              <div className="island_container">
                <img src={reverse} alt="" className="character_img" />
                <div className="island_location">
                  <span className="island_name">Reverse Mountain</span>
                  <span className="island_place">Red line</span>
                </div>
              </div>
              <div className="island_container island_3">
                <img src={reverse} alt="" className="character_img" />
                <div className="island_location">
                  <span className="island_name">Reverse Mountain</span>
                  <span className="island_place">Red line</span>
                </div>
              </div>
            </div>
      
            <div className="section_container tablet_container">
              <div className="section_header">
                <span className="section_title">Mist Objects</span>
                <span className="section_more">See all</span>
              </div>
            </div>
      
            <div className="section_container tablet_container mistobject_main_container">
              <div className="mistobject_container">
                <img src={object} alt="" className="character_img" />
              </div>
              <div className="mistobject_container">
                <div className="mistobject_item">
                  <span className="mistobject_name">Gomu Gomu No Mi</span>
                  <span className="mistobject_description">Is a Paramecia-type Devil Fruit that gives the user's body the properties of rubber, making the user a Rubber Human. It was then accidentally eaten by the series protagonist, Monkey D. Luffy.</span>
                </div>
              </div>
            </div>
      
            <div className="section_container tablet_container mistobject_main_container">
              <div className="mistobject_container">
                <img src={object} alt="" className="character_img" />
              </div>
              <div className="mistobject_container">
                <div className="mistobject_item">
                  <span className="mistobject_name">Gomu Gomu No Mi</span>
                  <span className="mistobject_description">Is a Paramecia-type Devil Fruit that gives the user's body the properties of rubber, making the user a Rubber Human. It was then accidentally eaten by the series protagonist, Monkey D. Luffy.</span>
                </div>
              </div>
            </div>
      
            <div className="section_container tablet_container mistobject_main_container">
              <div className="mistobject_container">
                <img src={object} alt="" className="character_img" />
              </div>
              <div className="mistobject_container">
                <div className="mistobject_item">
                  <span className="mistobject_name">Gomu Gomu No Mi</span>
                  <span className="mistobject_description">Is a Paramecia-type Devil Fruit that gives the user's body the properties of rubber, making the user a Rubber Human. It was then accidentally eaten by the series protagonist, Monkey D. Luffy.</span>
                </div>
              </div>
            </div>
      
            <div className="section_container tablet_container mistobject_main_container mistobject_3">
              <div className="mistobject_container">
                <img src={object} alt="" className="character_img" />
              </div>
              <div className="mistobject_container">
                <div className="mistobject_item">
                  <span className="mistobject_name">Gomu Gomu No Mi</span>
                  <span className="mistobject_description">Is a Paramecia-type Devil Fruit that gives the user's body the properties of rubber, making the user a Rubber Human. It was then accidentally eaten by the series protagonist, Monkey D. Luffy.</span>
                </div>
              </div>
            </div>
      
            <div className="section_container footer tablet_container">
                <img src={pngwing} alt="" className="bone" />
                <img src={lorem} alt="" className="lorem" />
            </div>
      
          </div>
      
        </body>
      </html>
      



    );
  }

}

export default App;
