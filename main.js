var gameData = {
  money: 0,
  moneyps: 1,
  upcost: 100
}
function init(){
  document.getElementById("money").innerHTML = "Constant: "+gameData.money
  document.getElementById("cost").innerHTML = "upgrade Cost: " + gameData.upcost
}
function getmoney(){
  gameData.money+=gameData.moneyps
  document.getElementById("money").innerHTML ="Constant: "+gameData.money
}
function upgrade() {
  if (gameData.money >= gameData.upcost) {
    gameData.money -= gameData.upcost
    gameData.moneyps = parseFloat((gameData.moneyps+2).toFixed(4))
    gameData.upcost = upcost((gameData.upcost*2).toFixed(4))
    document.getElementById("money").innerHTML = "Constant: "+gameData.money
    document.getElementById("cost").innerHTML = "upgrade Cost: " + gameData.upcost
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