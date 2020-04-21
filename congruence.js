function RaiseToPower(form) {
    var a = form.a.value;
    var b = form.b.value;   
    var n = form.n.value;
    console.log(a,b,n);
    
    var result = (a**b)%n


    if(isNaN(a) == false && isNaN(b) == false && isNaN(n) == false && isNaN(result) == false){
        if (a**b > 10**308){
            document.getElementById("demo").innerHTML = "Error, number is to big to calculate. Try a smaller one !"
        }else{
            document.getElementById("demo").innerHTML = a +'^' + b + ' ≡ ' + result + ' [' + n + ']';
        }
    }else{
        document.getElementById("demo").innerHTML = "Please insert a correct input !";
    }
}
