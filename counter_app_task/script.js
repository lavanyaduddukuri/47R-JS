function onIncrement() {
    let get_ele = document.getElementById("count")
    let number = parseInt(get_ele.textContent)
    number=number+1
    get_ele.textContent = number
    value=parseInt(get_ele.textContent)
    if (value>0)
        get_ele.style.color="green"
    else if (value<0)
        get_ele.style.color="red"
    else
        get_ele.style.color="black"
}
function onDecrement() {
    let get_ele = document.getElementById("count")
    let number = parseInt(get_ele.textContent)
    number=number-1
    get_ele.textContent = number
    value=parseInt(get_ele.textContent)
    if (value>0)
        get_ele.style.color="green"
    else if (value<0)
        get_ele.style.color="red"
    else
        get_ele.style.color="black"
}