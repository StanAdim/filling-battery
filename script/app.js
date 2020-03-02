 var id = 7;
 var timed = 1000 ;


// FUNCTION THAT START AS PAGE LOADS
function start() {
    run();
    //A FUNCTION THAT SHOULD BE ABLE TO CHANGE THE BARS MOVEMENT

}
function run() {

    document.getElementById("bar-"+id).classList.toggle("bar-change");
    //SETTING THE TIMER BEFORE MOVEMENT TO ANOTHER BAR SHADING
    setTimeout("start()",timed);
    if(id > 0)
    {
        id = id - 1;
    }else{
        id = 7;
    }
    //POINTING AN ID BAR

}