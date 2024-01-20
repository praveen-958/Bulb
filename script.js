var bulb = document.querySelector("#bulb");

var btn =  document.querySelector("#btn");

var flag = 0 ;

btn.addEventListener("dblclick" , function() {

    if(flag==0){
        bulb.style.backgroundColor = "yellow";
        flag = 1;
        btn.innerHTML = "OFF"

    }else{
        bulb.style.backgroundColor = "transparent";
        flag = 0;
        btn.innerHTML = "ON"
    }
})