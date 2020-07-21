for(var i=0;i < document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",clicked);
}
function clicked()
{
    var a = this.innerHTML;
    makeSound(a);
}
document.addEventListener("keydown",function(event){
    makeSound(event.key);
})
function makeSound(ab)
{
    switch (ab) 
    {
        case "w":
            var b = new Audio("sounds/tom-1.mp3");
            b.play();
            
            break;
        case "a":
            var b = new Audio("sounds/tom-2.mp3");
            b.play();
            
            break;
        case "s":
                var b = new Audio("sounds/tom-3.mp3");
                b.play();
                
                break;
        case "d":
                var b = new Audio("sounds/tom-4.mp3");
                b.play();
                
                break;
        case "j":
            var b = new Audio("sounds/snare.mp3");
            b.play();
            
            break;
        case "k":
                var b = new Audio("sounds/crash.mp3");
                b.play();
                
                break;
        case "l":
                var b = new Audio("sounds/kick-bass.mp3");
                b.play();
                
                break;
        
        default:
            break;
    }
}