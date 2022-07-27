/* 

⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⠛⠛⢻⡻⠿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣟⣫⡾⠛⠛⠛⠛⠛⠛⠿⣾⣽⡻⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡟⣼⠏⠀ ⠀⠀⠀⠀⠀⣀⣀⡀⣙⣿⣎⢿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⢹⡟⠀⠀⠀⣰⡾⠟⠛⠛⠛⠛⠛⠛⠿⣮⡻⣿⣿⣿
⣿⡿⢟⣻⣟⣽⠇⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠈⢿⡹⣿⣿⣿
⡟⣼⡟⠉⠉⣿⠀⠀⠀⠀⢿⡄⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⣼⢟⣿⣿⣿
⡇⣿⠁⠀⠀⣿⠀⠀⠀⠀⠘⢿⣦⣄⣀⣀⣀⣀⣤⡴⣾⣏⣾⣿⣿
⡇⣿⠀⠀⠀⣿⠀⠀⠀⠀ ⠀⠀⠈⠉⠛⠋⠉⠉⠀ ⠀⢻⣿⣿⣿⣿
⡇⣿⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⠀⠀⠀⢸⣧⣿⣿⡻
⡇⣿⠀ ⠀⣿⠀⠀  ⠀Yara Zain⠀  ⠀⣸⣧⣿⣿⣿
⡇⣿ ⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   ⠀ ⠀⠀⣿⢹⣿⣿⣿
⡇⢷⣤⣤⣿⡀⠀⠀⠀⠀⢠⣤⣄⣀⣀⣀ ⠀   ⢠⣿⣿⣿⣿
⣿⣿⣷⣿⣷⣿⡇⠀⠀ ⠀⢸⡏⡍⣿⡏⠀ ⠀ ⠀⢸⡏⣿⣿⣿
⣿⣿⣿⣿⣿⢼⡇⠀⠀⠀⠀⣸⡇⣷⣻⣆⣀ ⣀⣀⣼⣻⣿⣿⣿
⣿⣿⣿⣿⣿⣜⠿⢦⣤⣤⡾⢟⣰⣿⣷⣭⣯⣭⣯⣥⣿⣿⣿⣿ 

*/

//😎start click Sound

var snd = new Audio("./sound/page.mp3");

//end of click sound ---------------------------------------------------------------------

//Start of no right click!

// document.onmousedown = click;
// var times = 0;
// var times2 = 10;
// function click() {
//   if (event.button == 2 || event.button == 3) {
//     if (times >= 1) {
//       bye();
//     }
//     alert("شما اجازه راست کلیک را ندارید 😎");
//     times++;
//   }
// }
// function bye() {
//   alert(
//     "من که گفتم بودم اجازه این رو کار رو ندارید لطفا دوباره وارد وبسایت شوید!"
//   );
//   bye();
// }
// //end of no right click ---------------------------------------------------------------------

//😎start LOADING PAGE
setTimeout(() => {
  const box = document.getElementById("#load");
  load.style.display = "none";
}, 1000);
//end of LOADING PAGE ---------------------------------------------------------------------

//😎start Bubblelles (this section not belong to me- i just edited it for using on my website)
(function () {
  window.addEventListener("load", function () {
    var canvas = document.getElementById("canvas");
    if (!canvas || !canvas.getContext) {
      return false;
    }
    function rand(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    var ctx = canvas.getContext("2d");
    var X = (canvas.width = window.innerWidth);
    var Y = (canvas.height = window.innerHeight);
    var shapeNum = 50;
    var shapes = [];
    function Shape(ctx, x, y) {
      this.ctx = ctx;
      this.init(x, y);
    }
    Shape.prototype.init = function (x, y) {
      this.x = x;
      this.y = y;
      this.r = rand(25, 1);
      this.ga = Math.random() * Math.random() * Math.random() * Math.random();
      this.v = {
        x: Math.random(),
        y: -1,
      };
      this.l = rand(0, 100);
      this.sl = this.l;
    };
    Shape.prototype.updateParams = function () {
      var ratio = this.l / this.sl;
      this.l -= 1;
      if (this.l < 1) {
        this.init((X * (Math.random() + Math.random())) / 2, rand(0, Y));
      }
    };
    Shape.prototype.updatePosition = function () {
      this.x += Math.random();
      this.y += -Math.random();
    };
    Shape.prototype.draw = function () {
      var ctx = this.ctx;
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.globalAlpha = this.ga;
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.restore();
    };
    Shape.prototype.render = function (i) {
      this.updatePosition();
      this.updateParams();
      this.draw();
    };
    for (var i = 0; i < shapeNum; i++) {
      var s = new Shape(
        ctx,
        (X * (Math.random() + Math.random())) / 2,
        rand(0, Y)
      );
      shapes.push(s);
    }
    function render() {
      ctx.clearRect(0, 0, X, Y);
      for (var i = 0; i < shapes.length; i++) {
        shapes[i].render(i);
      }
      requestAnimationFrame(render);
    }
    render();
    function onResize() {
      X = canvas.width = window.innerWidth;
      Y = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", function () {
      onResize();
    });
    window.addEventListener(
      "mousemove",
      function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
      },
      false
    );
  });
})();
// End of Bubbles ---------------------------------------------------------------------

// Start return button page to top
window.addEventListener("scroll", function (e) {
  let a = document.documentElement.scrollTop;
  if (a >= 600) {
    document.querySelector(".ret-btn").style.cssText = `
    z-index: 777;
    display: inline-block; 
    position: fixed;
    bottom: 5%;
    right: 6%;
  `;
  } else {
    document.querySelector(".ret-btn").style.display = "none";
  }
});
// End of return button page to top ---------------------------------------------------------------------

//Start Auto scroll
function start_scroll_down() {
  scroll = setInterval(function () {
    scrollBy(0, 1);
  }, 100);
}
function stop_scroll_down() {
  location.reload();
}
// End of Auto scrool ---------------------------------------------------------------------

// Start of back to home mover
window.addEventListener("scroll", function (e) {
  let a = document.documentElement.scrollTop;
  if (a <= 600) {
    document.querySelector(".back-to-home").style.cssText = `
  `;
    document.querySelector(".back-to-home img").style.cssText = `
    width:100%;
`;
  } else {
    document.querySelector(".back-to-home").style.cssText = `
    opacity:.6;
    top:45%;
    right:-75px;
    position: fixed;
    z-index: 777;
    margin-top: 0px;
    transition: .5s;
    `;
    document.querySelector(".back-to-home img").style.cssText = `
    width:50%;
  `;
  }
});
//End of back to home mover ---------------------------------------------------------------------

//start auto copy book links
