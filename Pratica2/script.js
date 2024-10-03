let raio = prompt("Insira o valor do raio da esfera")

let volume = (4/3) * Math.PI * Math.pow(raio,3)

const mensagem = `O volume da esfera é igual a (4/3 * PI * ${raio}³), portanto uma esfera de raio ${raio} tem um volume de ${volume.toFixed(2)}`;

document.getElementById('resultado').innerText = mensagem;