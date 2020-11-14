document.addEventListener("DOMContentLoaded", () => {

    let counter = 0;
    let div = document.getElementById("counter");
    setTimeout(function(){
        var st = setInterval(function(){
        div.innerHTML = ++counter;
        if (counter > 100){
            clearInterval(st);
        }
      },1000)
    },5000);

    document.getElementById("minus").addEventListener("click", function(event) {
      event.preventDefault();
    }, false);

    document.getElementById("plus").addEventListener("click", function(event) {
        event.preventDefault();
    }, false);

    document.getElementById("heart").addEventListener("click", function(event) {
        event.preventDefault();
    }, false);

    document.getElementById("pause").addEventListener("click", function(event) {
        event.preventDefault();
    }, false);
  
});