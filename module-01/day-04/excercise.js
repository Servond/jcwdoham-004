// 1

function triangle(n) {
  let count = 1;
  let message = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      message += count > 9 ? `${count} ` : `0${count} `;
      count++;
    }
    message += i == n ? "" : "\n";
  }

  return message;
}

console.log(triangle(10));
