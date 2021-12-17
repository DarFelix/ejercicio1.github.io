function permutar()
{
    var m = document.getElementById('m').value;
    var n = document.getElementById('n').value;

    if ((m == "")||(n == "")) {
        swal("Completa los campos", " Existen campos vacíos ", "error");
    
    }
    else if ((m<0)||(n<0)) {
        swal("Números negativos", " No se permiten valores negativos en el cálculo ", "error");
    }else
    {

    var m = parseFloat(m);
    var n = parseFloat(n);


   if (m>n) {

        d = m-n;
        
        var factm = 1; 
        for (i=1; i<=m; i++) {
        factm = factm * i; 
         }
         
        var factd = 1; 
        for (i=1; i<=d; i++) {
        factd = factd * i; 
         }

        perm = factm / factd;

        swal("Permutación válida", "Teniendo "+m+" elementos para colocar en "+n+" posiciones, existen "+perm+" formas.", "success");


   }else if (m<n) {
     
    swal("Error matemático", "El número de elementos a tomar n debe ser menor o igual que el total de elementos disponibles m.", "error");
    
   } else if (m=n) {

        var factn = 1; 
        for (i=1; i<=n; i++) {
        factn = factn * i; 
         }
         perm = factn;


     swal("Permutación válida", "Teniendo "+n+" elementos para colocar en "+n+" posiciones, existen "+perm+" formas.", "success");


   }

}

}

function intercambio() {



    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;

    
    if ((a == "")||(b == "")) {
        swal("Completa los campos", " Existen campos vacíos ", "error");
    
    }else {

    var a = parseFloat(a);
    var b = parseFloat(b);
    b = [a, a = b][0];
    swal("Permutación realizada", "Ahora la variable A tiene un valor de "+a+", y la variable B tiene un valor de "+b+".", "info");


    }

    

}