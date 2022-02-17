var gameData = {
    money: 0,
    moneyc: 1
}
function getmoney(){
    gameData.money+= gameData.moneyc
    document.getElementById("money").innerHTML = gameData.money
}
