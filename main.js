var gameData = {
    money: 0,
    moneyc: 1
}
function getmoney(){
    gameData.money+=moneyc
    document.getElementById("money").innerHTML = gameData.money
}