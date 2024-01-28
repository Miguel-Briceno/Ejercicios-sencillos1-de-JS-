document.addEventListener("DOMContentLoaded", ()=>{
    //obtenemos el elemento html table por el id
    let tabla= document.getElementById("tabla");
    //creamos una variable contador
    var contador=0;
    //creamos el array imagenes que contiene las 15 imagenes
    let imagenes=['img1.jpg','img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg', 'img7.jpg', 'img8.jpg','img9.jpg','img10.jpg', 'img11.jpg', 'img12.jpg', 'img13.jpg', 'img14.jpg', 'img15.jpg'];
    //con un for iteramos y creamos en el primer for anidado los tr
    for(let i=0;i<3;i++){
        let tr= document.createElement('tr');//creamos tr
        tabla.appendChild(tr);// lo hacemos hijo de la tabla
        //segundo for anidado para crear los td
        for(let j=0;j<5;j++){
            let td= document.createElement('td')//creamos td
            tr.appendChild(td);// hijo de los tr
            let img = document.createElement('img');//creamos el elemento imagen
            td.appendChild(img);// lo hacemos hio de td
            img.src=("img/assets/"+imagenes[contador]);//asignamos a cada elemento img la imagen
            img.style.width=('100px');//asignamos estilos
            img.style.height=('100px');//asignamos estilos
            contador++;// sumo 1 antes de la condicion
            if(contador%2==0){//asinamos a los elementos 
                img.className = 'par';// asignacion de la clase par
            }else{
                img.className = 'impar';// asignacion de la clase impar
            }            
        }
    }
    // se seleciona el boton por id y se le agrega en evento click que a traves de una funcion
    // anonima llama a la fucion respectiva(inpar, par o mostrar todas).
    document.getElementById('par').addEventListener('click',()=>mostrarPar());
    document.getElementById('impar').addEventListener('click',()=>mostrarImpar());
    document.getElementById('todas').addEventListener('click',()=>mostrarTodas());
    function mostrarPar(){// funciones que los que hacen es llamar los elementos que tienen la clase par o impar, por la 
        //clase y cambiar la opacidad de los elementos.
        document.querySelectorAll('.par').forEach((imagen)=>imagen.style.opacity ='1');
        document.querySelectorAll('.impar').forEach((imagen)=>imagen.style.opacity ='0');
    }
    function mostrarImpar(){
        document.querySelectorAll('.par').forEach((imagen)=>imagen.style.opacity ='0');
        document.querySelectorAll('.impar').forEach((imagen)=>imagen.style.opacity ='1');
    }
    function mostrarTodas(){
        document.querySelectorAll('.par').forEach((imagen)=>imagen.style.opacity ='1');
        document.querySelectorAll('.impar').forEach((imagen)=>imagen.style.opacity ='1');
    }
});