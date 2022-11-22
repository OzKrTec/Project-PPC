let total_element = document.getElementById('total'); // obtenemos el elemento

function sumar () {
  let total_value = parseInt(total_element.innerHTML);
  total_element.innerHTML = total_value + 1;
}


function restar () {
  let total_value = parseInt(total_element.innerHTML);
  if (total_value == 0) return; // validamos que el valor no sea menor a 0
  total_element.innerHTML = total_value - 1;
}

// asignamos funcion click a cada Div
document.getElementById('mas').addEventListener('click', sumar);

document.getElementById('menos').addEventListener('click', restar);