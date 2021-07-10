function validateData() {
    const name = document.getElementById("name").value;
    const numberAccount=document.getElementById("numberAccount").value;
    const dpto=document.getElementById("dpto").value;
    const town=document.getElementById("town").value;
    const address=document.getElementById("address").value;
    const phone=document.getElementById("phone").value;
    
     if (isEmpty(name, numberAccount, dpto, town,address,phone)) {
        alert("Hay espacios en blanco");
    } 
    else
    {
        alert("Puedes revisar la factura de tus productos en la parte inferior de la pagina");
     info.innerHTML='<p> Nombre:'+name+'</p><p> Departamento:'+dpto+'</p><p> Municipio:'+town+'</p><p> Dirección:'+address+'</p><p> Telefono:'+phone+'</p>';
    }
}



function isEmpty(name, numberAccount, dpto, town,address,phone) {
    return name.length === 0 ||numberAccount.length === 0||dpto.length === 0||town.length === 0||address.length === 0||phone.length === 0;
}

function loadDPtos() {
    const slDPto = document.getElementById("dpto");
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'runner.php?opt=1', true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const dptos = JSON.parse(xhr.responseText);
            for (dpto of dptos) {
                const options = document.createElement('option');
                options.setAttribute('value', dpto.code);
                options.appendChild(document.createTextNode(dpto.name));
                slDPto.appendChild(options);
            }
        }
    };
    xhr.send(null);


}

function loadTowns() {
    const slDPto = document.getElementById("dpto").value;
    const town = document.getElementById("town");
    town.length = 0;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'runner.php?opt=2&code=' + slDPto, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const dptos = JSON.parse(xhr.responseText);
            for (dpto of dptos) {
                const options = document.createElement('option');
                options.setAttribute('value', dpto.code);
                options.appendChild(document.createTextNode(dpto.name));
                town.appendChild(options);
            }
        }
    };
    xhr.send(null);
    const error = document.getElementById('error');
    const info = document.getElementById('info');

    error.style.display = "none";
    info.style.display = "none";

}
function on(name,brand)
{
    var cantidad=parseInt(prompt("Ingrese la cantidad"),10);
    var fila='<tr><td>'+name+'</td><td>'+brand+'</td><td>'+cantidad+'</td><td>'+cantidad*brand+'</td><tr>';
    $('#toy').append(fila);
    
}

