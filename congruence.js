function RaiseToPower(form) {
    var a = form.a.value;
    var b = form.b.value;   
    var n = form.n.value;
    
    var result = (a**b)%n
    document.getElementById("demo").innerHTML = result;
}
