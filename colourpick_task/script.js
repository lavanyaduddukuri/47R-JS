let btn0 = document.getElementById("Red")
let btn1 = document.getElementById("Blue")
let btn2 = document.getElementById("Green")
let btn3 = document.getElementById("Purple")

arr=["Red","Blue","Green","Purple"]
btn0.style.backgroundColor=arr[0];
btn1.style.backgroundColor=arr[1];
btn2.style.backgroundColor=arr[2];
btn3.style.backgroundColor=arr[3];

function allinone(color){
    document.body.style.backgroundColor=color
}