let pontos = prompt("Insira uma pontuação entre 0 e 10")

if (pontos===0 || pontos <=2){
    console.log("Muito fraco")
}else if(pontos >=3 && pontos <=4){
    console.log("Insuficiente")

}else if(pontos >=5 && pontos <=6){
    console.log("Suficiente")

}else if(pontos >=7 && pontos <=8){
    console.log("Bom")

}else if(pontos >=9 && pontos <=10){
    console.log("Excelente")

}
else{
    console.log("Pontuação inválida")
}