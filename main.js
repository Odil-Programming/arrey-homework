let myConfirm = confirm("Savatga mahsulot qoshilsinmi")
let arr = ['Non', 'Tuhum', 'Yog', 'Shakar']
let product = 'coffee'
if (myConfirm === true){
    arr.push(product)
    console.log(arr);
}
else if(myConfirm === false){
    arr.pop(arr)
    console.log(arr);
}


else{
    console.log(arr);
}

































