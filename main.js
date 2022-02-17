var gameData = {
  money: 0,
  moneyps: 1,
  upcost: 100
}
function init(){
  document.getElementById("money").innerHTML = gameData.money
  document.getElementById("upgradecost").innerHTML = "upgrade Cost: " + gameData.upcost
}
function getmoney(){
  gameData.money+=gameData.moneyps
  document.getElementById("money").innerHTML = gameData.money
}
function upgrade() {
  if (gameData.money >= gameData.upcost) {
    gameData.money -= gameData.upcost
    gameData.moneyps *= 2
    gameData.upcost *= 2.2
    document.getElementById("money").innerHTML = gameData.gold + " Gold Mined"
    document.getElementById("upgradecost").innerHTML = "upgrade Cost: " + gameData.upcost
  }
}
var mainloop = window.setInterval(function() {
  getmoney()
},100)
var saveloop = window.setInterval(function() {
  localStorage.setItem("save", JSON.stringify(gameData))
}, 30000)
var savegame = JSON.parse(localStorage.getItem("save"))
if (savegame !== null) {
gameData = savegame
}