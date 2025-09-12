arr=["biryani","pizza","burger","pasta","salad","cheesecake","kunafa","apricot delight"] ;

let items_con_ele=document.getElementById("items_container")

function displayitems(){
    for(let i=0;i<arr.length;i++){
    let item=document.createElement("p")
    let del_btn=document.createElement("button")
    del_btn.textContent="Delete"
    del_btn.style.border="1px solid red"
    del_btn.style.color="red"
    del_btn.onclick=function() {
        arr.splice(i,1)
        items_con_ele.textContent=""
        displayitems()
    }
    item.textContent=arr[i]
    item.appendChild(del_btn)
    items_con_ele.appendChild(item)
}
}
displayitems()
function additems(){
    let ele=document.getElementById("user_input")
    let cur_value=ele.value
    arr.push(cur_value)
    ele.value=""
    items_con_ele.textContent=""
    displayitems()
}