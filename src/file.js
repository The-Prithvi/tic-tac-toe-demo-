document.getElementById("turn").innerHTML = "Player 1 Turn";
let i = 0;
function turn1(){
    i++;
    while(i<10){ 
        if(i%2==0){
            document.getElementById("turn").innerHTML = "Player 1 Turn";
            document.getElementById("d1c").style.opacity = "1";
        } 
        else{
            document.getElementById("turn").innerHTML  = "Player 2 Turn";
            document.getElementById("d1d").style.opacity = "1";
        }
        break;
    }
}
function turn2(){
    i++;
    while(i<10){ 
        if(i%2==0){
            document.getElementById("turn").innerHTML = "Player 1 Turn";
            document.getElementById("d2c").style.opacity = "1";
        } 
        else{
            document.getElementById("d2d").style.opacity = "1" 
            document.getElementById("turn").innerHTML  = "Player 2 Turn";
        }
        break;
    }
}
function turn3(){
    i++;
    while(i<10){ 
        if(i%2==0){
            document.getElementById("d3c").style.opacity = "1";
        } 
        else{
            document.getElementById("d3d").style.opacity = "1" 
            document.getElementById("turn").innerHTML  = "Player 2 Turn";
        }
        break;
    }
}
function turn4(){
    i++;
    while(i<10){ 
        if(i%2==0){
            document.getElementById("d4c").style.opacity = "1";
            document.getElementById("turn").innerHTML = "Player 1 Turn";
        } 
        else{
            document.getElementById("turn").innerHTML  = "Player 2 Turn";
            document.getElementById("d4d").style.opacity = "1" 
            let b=1;
        }
        
        break;
    }
}
function turn5(){
    i++;
    while(i<10){ 
        if(i%2==0){
            document.getElementById("d5c").style.opacity = "1";
            document.getElementById("turn").innerHTML = "Player 1 Turn";
        } 
        else{
            document.getElementById("d5d").style.opacity = "1" 
            document.getElementById("turn").innerHTML  = "Player 2 Turn";
        }
        
        break;
    }
}
function turn6(){
    i++;
    while(i<10){ 
        if(i%2==0){
            document.getElementById("d6c").style.opacity = "1";
            document.getElementById("turn").innerHTML = "Player 1 Turn";
        } 
        else{
            document.getElementById("d6d").style.opacity = "1" 
            document.getElementById("turn").innerHTML  = "Player 2 Turn";
        }
        break;
    }
}
function turn7(){
    i++;
    while(i<10){ 
        if(i%2==0){
            document.getElementById("turn").innerHTML = "Player 1 Turn";
            document.getElementById("d7c").style.opacity = "1";
        } 
        else{
            document.getElementById("d7d").style.opacity = "1" 
            document.getElementById("turn").innerHTML  = "Player 2 Turn";
        }
        
        break;
    }
}
function turn8(){
    i++;
    while(i<10){ 
        if(i%2==0){
            document.getElementById("d8c").style.opacity = "1";
            document.getElementById("turn").innerHTML = "Player 1 Turn";
        } 
        else{
            document.getElementById("d8d").style.opacity = "1" 
            document.getElementById("turn").innerHTML  = "Player 2 Turn";
        }
        
        break;
    }
}
function turn9(){
    i++;
    while(i<10){ 
        if(i%2==0){
            document.getElementById("d9c").style.opacity = "1";
            document.getElementById("turn").innerHTML = "Player 1 Turn";
        } 
        else{
            document.getElementById("turn").innerHTML  = "Player 2 Turn";
            document.getElementById("d9d").style.opacity = "1" 
        }
      
        break;
    }
}



 
