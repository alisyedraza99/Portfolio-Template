
const filterButtons = document.querySelectorAll(".btn");

/* function filterContent(){
    for (var i= 0; i < filterButtons.length; i++){

    }
} */


function HideItems(tag)
{
    var x = document.getElementsByClassName(tag);
    var i;
    for (i = 0; i < x.length; i++){
        x[i].className += " " + "hide";
    }
}

function ShowItem(tag){
    var x = document.getElementsByClassName(tag);
    var i;
    for (i = 0; x.length; i++){
        if (x[i].className.includes("hide")){
            let remove = x[i].className.indexOf("hide");
            x[i].className = x[i].className.slice(0, remove);
        }
    }
}
HideItems("item-1");
ShowItem("items-1");
