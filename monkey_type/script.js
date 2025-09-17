let sentence_ele=document.getElementById("sentence")
let formatted_text=sentence_ele.textContent.split("").map(function(each){
    return `<span>${each}</span>`
})
sentence_ele.innerHTML=formatted_text.join("")
let all_span_ele=document.querySelectorAll("span")



let input_text_ele=document.getElementById("input_text")
document.body.addEventListener("keydown",function(e){
    if(e.key=="Backspace"){
        input_text_ele.value=input_text_ele.value.slice(0,-1)
        let i=input_text_ele.value.length
        all_span_ele[i].style.color="black"
    }
    if(e.key!="tab" && e.key!="shift" && e.key!="Backspace"){
        input_text_ele.value=input_text_ele.value+e.key
    }

    let curr_val=input_text_ele.value
    for(let i=0;i<curr_val.length;i++) {
        if(curr_val[i]==all_span_ele[i].textContent){
            all_span_ele[i].style.color="green"
        }
        else{
            all_span_ele[i].style.color="red"
        }
    }
    for(let i=curr_val.length;i<sentence_ele.textContent.length;i++){
        all_span_ele[i].style.color="black"
    }
})