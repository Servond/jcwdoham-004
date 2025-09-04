// TRUTHY OR FALSY

// TRUTHY
console.log(Boolean("3"));
console.log(Boolean(50));
console.log(Boolean([]));

// FALSY
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

function greet(message) {
  console.log(message);
  // ! ARTINYA NEGASI, JIKA TRUE DIBALIK JADI FALSE, JIKA FALSE DIBALIK JADI TRUE
  if (!message) {
    return "INPUT TIDAK SESUAI";
  }

  return message;
}

console.log(greet());

// SHORT CIRCUITING && OPERATOR
// JIKA VALUE / OPERAND DIKIRI BERUPA FALSY, MAKA AMBIL VALUE DIKIRI
// TAPI JIKA VALUE / OPERAND DIKIRI BERUPA TRUTHY, MAKA AMBIL VALUE DIKANAN
console.log(true && "KANAN JALAN", "OPERAND KANAN JALAN");
console.log(false && "KANAN JALAN", "OPERAND KIRI JALAN");

// SHORT CIRCUITING || OPERATOR
function showName(name) {
  // JIKA VALUE / OPERAND DIKIRI BERUPA TRUTHY, MAKA AMBIL VALUE DIKIRI
  // TAPI JIKA VALUE / OPERAND DIKIRI BERUPA FALSY, MAKA AMBIL VALUE DIKANAN
  const nama = name || "";
  return nama.toUpperCase();
}

console.log(showName());
