let heading=document.createElement("h1")
heading.textContent="Without html and css"
document.body.appendChild(heading)


let image_ele=document.createElement("img")
image_ele.src="https://ik.imagekit.io/j83rchiauw/A_List_Star/mahesh-babu-facts.jpg"
image_ele.style.width="300px"
image_ele.style.height="200px"
document.body.appendChild(image_ele)

document.body.appendChild(document.createElement("br"));

let btn=document.createElement("Button")
btn.textContent="Click here to change image"
document.body.appendChild(btn)


let count=0
btn.onclick=function() {
    if (count%2!=0) {
        image_ele.src="https://s.yimg.com/fz/api/res/1.2/b3kkgEIhuDTiLes6cHjtSg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjg7cHhvZmY9MDtweW9mZj0wO3E9ODA7dz00MDA-/https://s.yimg.com/am/60d/ebec32fe9652792908adfce0dab08a70"
        count+=1
    }
    else {
        image_ele.src="https://ik.imagekit.io/j83rchiauw/A_List_Star/mahesh-babu-facts.jpg"
        count+=1
    }

}
btn.style.marginLeft="40%"
btn.style.marginTop="5%"
heading.style.marginLeft="37%"
heading.style.marginTop="5%"
image_ele.style.marginLeft="37%"
image_ele.style.marginTop="5%"
document.body.appendChild(btn)
