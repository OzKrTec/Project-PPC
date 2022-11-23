let total_element = document.getElementById('total'); 

function sumar () {
  let total_value = parseInt(total_element.innerHTML);
  total_element.innerHTML = total_value + 1;
}


function restar () {
  let total_value = parseInt(total_element.innerHTML);
  if (total_value == 0) return;
  total_element.innerHTML = total_value - 1;
}

document.getElementById('mas').addEventListener('click', sumar);

document.getElementById('menos').addEventListener('click', restar);