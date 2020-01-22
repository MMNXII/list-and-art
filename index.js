var headerContainer = document.getElementById("headerContainer");
    headerContainer.style.opacity = "0";
    headerContainer.style.marginLeft = "-50%";
    headerContainer.style.marginTop = "5%";

var artText = document.getElementById("artText");
    artText.style.color = "yellow";
    artText.style.marginLeft = "15%";
    artText.style.opacity = "0";

var formContainer = document.getElementById("formContainer");
    formContainer.style.opacity = "0";
    formContainer.style.marginTop = "-60%";  

var input = document.getElementById("addItem");
var submit = document.getElementById("submit");
    submit.addEventListener("click", add);
    submit.addEventListener("click", createCirc);

var clear = document.getElementById("clear");
    clear.addEventListener("click", clearList);

var list = document.getElementById("list");
var listItem;

    function headerAppear() {
      headerContainer.style.opacity = "1";
      headerContainer.style.marginLeft = "5%";
      headerContainer.style.transition = "all 2s";
      formContainer.style.opacity = "1";
      formContainer.style.marginTop = "3%";
      formContainer.style.transition = "all 2s";
      artText.style.opacity = "1";
      artText.style.transitionProperty = "opacity";
      artText.style.transitionDelay = "2s";
      artText.style.transitionDuration = "2s";

    }


    function add() {

      listItem = document.createElement("li");
      listItem.innerText = input.value;
      list.appendChild(listItem);

        if (input.value == " ") {
          alert("enter a value please");
          list.removeChild(listItem);
        }

        input.value = " ";
    }


    function clearList() {
      list.innerHTML = " ";
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function printWindow() {
      window.print();
    }

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


    function createCirc() {
      var x = Math.floor(Math.random() * 230);
      var y = Math.floor(Math.random() * 150);
      var r = Math.floor(Math.random() * 50);
      var sA = Math.floor(Math.random() * 10);

        ctx.beginPath();
        ctx.arc(x, y, r, 0, 3 * Math.PI);
        ctx.fillStyle = randomColor();
        ctx.fill();
        ctx.strokeStyle = randomColor();
        ctx.stroke();

    }

    function randomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }