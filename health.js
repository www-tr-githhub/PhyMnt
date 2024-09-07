let save  = document.getElementById("Save");
let Fullname=document.getElementById("Name");
save.addEventListener("click",(event)=>{
    let Name=Fullname.value;
    alert(`Thanks for Joining Us Mr ${Name}`);
    console.log(Name);

})
var darkMode = document.getElementById("sunimg");
darkMode.addEventListener("click",()=>{
    console.log(document.body.style.backgroundColor);
   if(document.body.style.backgroundColor === "black")
   {
    document.body.style.backgroundColor = "white"
    darkMode.src = "sun.png";
   }
    else
    {
        document.body.style.backgroundColor = "black"
        darkMode.src = "moon.png";
    }
})