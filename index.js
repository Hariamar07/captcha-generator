var input1 = document.getElementById("input1")
var input2 = document.getElementById("input2")

var image1 = document.getElementById("image1")
var image2 = document.getElementById("image2")
var valid = document.getElementById("valid")
 
image1.addEventListener("click",function(){
    
    let result = '';
for (let i = 0; i < 5; i++) {
  result += String.fromCharCode(97 + Math.floor(Math.random() * 26));
}

input1.value=result

})


image2.addEventListener("click",function(){
    if(input1.value != input2.value)
    {
       valid.style.display="block"; 
    }
    else{
        alert("Entered captcha is correct");

    }
})

