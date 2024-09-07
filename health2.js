var darkMode = document.getElementById("sunimg");
var text = document.querySelectorAll(".lead");
darkMode.addEventListener("click",()=>{
    console.log(document.body.style.backgroundColor);
   if(document.body.style.backgroundColor === "black")
   {
    document.body.style.backgroundColor = "white"
    darkMode.src = "sun.png";
    for (i = 0;i<text.length;i++){

        text[i].style.color = "black";
    }
   }
    else
    {
        document.body.style.backgroundColor = "black"
        darkMode.src = "moon.png";
        // console.log(text.style)
        for (i = 0;i<text.length;i++){

            text[i].style.color = "white";
        }
    }
})
