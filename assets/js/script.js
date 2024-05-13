

let buttons = document.querySelectorAll(".button");
let body = document.querySelector("body");

// Solution 1 with IF Else
buttons.forEach( (button)=> {
  button.addEventListener("click", (e)=>{
    if(e.target.id === "gray"){
      body.style.backgroundColor = e.target.id;
    }else if(e.target.id === "yellow"){
      body.style.backgroundColor = e.target.id;
    }else if(e.target.id === "white"){
      body.style.backgroundColor = e.target.id;
    }else if(e.target.id === "black"){
      body.style.backgroundColor = e.target.id;
    }else if(e.target.id === "BlueViolet"){
      body.style.backgroundColor = e.target.id;
    }else if(e.target.id === "DarkCyan"){
      body.style.backgroundColor = e.target.id;
    } else {
      console.log("Color not Defined")
    }
  })
} )

// Solution 2 with Switch Statement
buttons.forEach( (button) => {
  button.addEventListener("click", (e)=>{
    let colorName = e.target.id;
    switch (colorName) {
      case "gray":       
        console.log(colorName);
        body.style.backgroundColor = e.target.id; 
        break;
      case "yellow":     
      console.log(colorName);  
        body.style.backgroundColor = e.target.id; 
        break;
      case "white":     
      console.log(colorName);  
        body.style.backgroundColor = e.target.id; 
        break;
      case "black":     
      console.log(colorName);  
        body.style.backgroundColor = e.target.id; 
        break;
      case "BlueViolet":       
        body.style.backgroundColor = e.target.id; 
        break;
      case "DarkCyan":     
      console.log(colorName);  
        body.style.backgroundColor = e.target.id; 
        break;    
      default:
        break;
    }
  })
})

// Solution 3 without IF-ELSE and SWITCH CASE
buttons.forEach( (button) => {
  button.addEventListener("click", function(e){
    body.style.backgroundColor = e.target.id;
  })
})

// Solution 4 on HOVER
buttons.forEach( (button) => {
  button.addEventListener("mouseover", function(e){
    body.style.backgroundColor = e.target.id;
  })
})