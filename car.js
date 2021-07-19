$(document).ready(function() {
    //variables
    $surface = $(".surface");
    $car = $(".car");
    $img = $(".car img");
    let flag = true
    //keypress event
    // e.which tells the key code of resp key when pressed 
    // pressing enter starts the car
    // pressing w switches the lights off
   
   const cars = ['./assets/Img_05.png','./assets/Img_06.png'];
  //movement in car  
    $(document).on("keypress",function(e){
        if(e.which == 32){
           $($surface).toggleClass("moveRight");
            $($car).toggleClass("suspension");
        }
    })
//lights
    $(document).on("keypress",function(e){
        if(e.which == 119){
           if(flag){
               flag = false;
               $img.attr('src',cars[0]);
           } else{
               flag = true;
               $img.attr('src',cars[1]);
           }
        }
    })
});