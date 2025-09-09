arr=["Mahesh", "Samantha", "Kajal", "Vijay", "Alluarjun" ,"Rashmika"];
index=Math.random()*arr.length
index=Math.round(index)
system_gen_name=arr[index]

function Checkresult() {
    let ele=document.getElementById("input_name")
    if (ele.value==system_gen_name) {
        alert("your answer is correct you got gold medal")
    }
}
document.body.style.textAlign="center"
document.body.style.marginTop="10%"