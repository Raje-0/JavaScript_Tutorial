alert("enter your number")

let a= prompt("enter here")
a=Number.parseInt()
alert(" your enter number type is "+(typeof a))

let write = confirm("do you want to erite on the page")

if(write){
    document.write(a)
}
else{
    document.write("plz allow me to write")
}

