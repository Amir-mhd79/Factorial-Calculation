function factorial(){
    let mul=1
    for(let i=1;i<=x;i++){
        mul*=i
    }
    document.querySelector("h1").innerHTML=`The Answer is: ${mul}`
}
let x=Number(prompt("Please Enter The Number"))
factorial(x)