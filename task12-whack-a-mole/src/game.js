const game = new Game();
game.initialize();

function Game() {
    const holes = document.querySelectorAll('.hole');
    const scoreBoard = document.querySelector('.score');
    const moles = document.querySelectorAll('.mole');
    const minPeepTime = 200;
    const maxPeepTime = 1000;
    let lastHole;
    let timeUp = false;
    let score = 0;
    let level = 1;
    let records_array = [0, 0, 0, 0, 0, 0];

    this.initialize = () => {
        moles.forEach(mole => mole.addEventListener('click', this.bonk));
        holes.forEach(hole => hole.addEventListener('click', this.out));
        this.restore_records();
    }

    this.save_records = () => {
      records_array[5] = score;
      records_array.sort().reverse();
      records_array.splice(5, 1);
      alert("saving " + records_array.join('/'));
      localStorage.setItem("records", records_array.join('/'));
      document.getElementById("record1").textContent = records_array[0];
      document.getElementById("record2").textContent = records_array[1];
      document.getElementById("record3").textContent = records_array[2];
      document.getElementById("record4").textContent = records_array[3];
      document.getElementById("record5").textContent = records_array[4];
    }

    this.restore_records = () => {
      records = localStorage.getItem("records");
      alert("recovering " + records);
      records_array = records.split('/')
      document.getElementById("record1").textContent = records_array[0];
      document.getElementById("record2").textContent = records_array[1];
      document.getElementById("record3").textContent = records_array[2];
      document.getElementById("record4").textContent = records_array[3];
      document.getElementById("record5").textContent = records_array[4];
    }

    this.randomTime = (min, max) => {
        return Math.round(Math.random() * (max - min) + min);
    }

    this.randomHole = holes => {
        const idx = Math.floor(Math.random() * holes.length);
        const hole = holes[idx];
        if (hole === lastHole) return this.randomHole(holes);
        lastHole = hole;
        return hole;
    }

    this.peep = () => {
        console.log(timeUp);
        const time = this.randomTime(minPeepTime, maxPeepTime);
        const hole = this.randomHole(holes);
        hole.classList.add('up');
        setTimeout(() => {
            hole.classList.remove('up');
            if (!timeUp)
              this.peep();
            else
            {
              if(score >= 5)
                this.level = 2;
              else
                this.level = 1;
              this.save_records();
            }
        }, time);
    }

    this.startGame = () => {
        scoreBoard.textContent = 0;
        timeUp = false;
        score = 0;
        this.restore_records();
        // records = localStorage.getItem("records");
        // alert("recovering " + records);
        // records_array = records.split('/')
        // // records[1] = localStorage.getItem("record2");
        // // records[2] = localStorage.getItem("record3");
        // // records[3] = localStorage.getItem("record4");
        // // records[4] = localStorage.getItem("record5");
        // document.getElementById("record1").textContent = records_array[0];
        // document.getElementById("record2").textContent = records_array[1];
        // document.getElementById("record3").textContent = records_array[2];
        // document.getElementById("record4").textContent = records_array[3];
        // document.getElementById("record5").textContent = records_array[4];
        this.peep();
        if(this.level == 1)
          setTimeout(() => timeUp = true, 10000)
        else
          setTimeout(() => timeUp = true, 7000)
    }

    this.bonk = e => {
        if (!e.isTrusted) return;
        score++;
        var kick = new Audio('src/assets/sounds/kick.wav');
        kick.play();
        e.target.classList.remove('up');
        scoreBoard.textContent = score;
    }

    this.out = e => {
        if (!e.isTrusted) return;
        var hihat = new Audio('src/assets/sounds/hihat.wav');
        hihat.play();
    }
}

document.addEventListener('mousemove', function(e) {
  let mouse = document.getElementById('mouse');
  mouse.style.left = e.pageX + 'px';  //left + 'px';
  mouse.style.top  = e.pageY + 'px';  //top + 'px';
});

function input_key_pressed(name) {
    if(event.key === 'Enter') {
        document.getElementById("player").textContent = name; //.innerHTML = "I have changed!";
        // localStorage.setItem("lastname", "Smith");
        // alert(localStorage.getItem("name"));
    }
}
