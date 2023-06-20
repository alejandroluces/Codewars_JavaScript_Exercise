// ELIMINAR VOCALES EN UNA CADENA


function shortcut (string) {
    return string.replace(/[aeiou]/g, '');
  }

  console.log(shortcut('hello'));

  console.log(shortcut("how are you today?"))
  console.log(shortcut('complain'))
  console.log(shortcut('never'))
  



