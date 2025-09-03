function btn(){
    let coinimage_ele = document.getElementById("coinimage")
    let random_num = Math.random()*100
    random_num=Math.ceil(random_num)
    if (random_num%2==0){
        coinimage_ele.src="https://tools360.net/tool-assets/fun-tools/images/head_coin.png"
    }
    else {
        coinimage_ele.src="https://tools360.net/tool-assets/fun-tools/images/tail_coin.png"
    }
}