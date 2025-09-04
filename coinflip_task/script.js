function btn(){
    let coinimage_ele = document.getElementById("coinimage")
    let random_num = Math.random()*100
    random_num=Math.ceil(random_num)
    if (random_num%2==0){
        let head_ele=document.getElementById("headcount")
        let head_count=parseInt(head_ele.textContent)
        head_ele.textContent=head_count+1
        coinimage_ele.src="https://tools360.net/tool-assets/fun-tools/images/head_coin.png"
    }
    else {
        let tail_ele=document.getElementById("tailcount")
        let tail_count=parseInt(tail_ele.textContent)
        tail_ele.textContent=tail_count+1
        coinimage_ele.src="https://tools360.net/tool-assets/fun-tools/images/tail_coin.png"
    }
}