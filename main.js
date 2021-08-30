let cheese = 0
let pickaxButton = document.getElementById("pickaxButton")
let shovelButton = document.getElementById("buyShovelButton")
let spaceCraftButton = document.getElementById("buySpaceCraftButton")
let roverButton = document.getElementById("buyRoverButton")
let multiplyer = document.getElementById("multiplyer")
let passiveIncome = document.getElementById("passiveIncome")
// let pickax = 0
// let rover = 0

let clickUpgrades = {
    pickaxes: {
      price: 10,
      quantity: 0,
      multiplier: 1
    },
    shovel: {
        price: 15,
        quantity: 0,
        multiplier: 3
    }
  }

  let automaticUpgrades = {
    rovers: {
      price: 20,
      quantity: 0,
      multiplier: 10
    }, 
    spaceCraft: {
        price: 30,
        quantity: 0,
        multiplier: 50
    }
  }

  

function mine(){
     cheese += (1 + ((clickUpgrades['pickaxes'].quantity * clickUpgrades['pickaxes'].multiplier) + (clickUpgrades['shovel'].quantity * clickUpgrades['shovel'].multiplier)))
    update(onScreenCheeseCount)
    hidePickaxButton()
    hideShovelButton()
    hideSpaceCraftButton()
    hideRoverButton()
}



function update(onScreenCheeseCount){
    onScreenCheeseCount = document.getElementById("onScreenCheeseCount").innerText = cheese
}

function updateMultiplyer(){
    multiplyer = 1 + ((clickUpgrades["pickaxes"].quantity * clickUpgrades["pickaxes"].multiplier) + (clickUpgrades["shovel"].quantity * clickUpgrades["shovel"].multiplier))
    document.getElementById("multiplyer").innerText = multiplyer

}
function updatePassiveIncome(){
    passiveIncome =  ((automaticUpgrades["rovers"].quantity * automaticUpgrades["rovers"].multiplier)+(automaticUpgrades["spaceCraft"].quantity * automaticUpgrades["spaceCraft"].multiplier))
    document.getElementById("passiveIncome").innerText = passiveIncome
}



function updatePickax(pickaxCount){
    document.getElementById("pickaxCount").innerText = clickUpgrades['pickaxes'].quantity
}
function updateShovel(shovelCount){
    document.getElementById("shovelCount").innerText = clickUpgrades['shovel'].quantity
}

function updateRover(roverCount){
    document.getElementById("roverCount").innerText = automaticUpgrades['rovers'].quantity
}
function updateSpaceCraft(spaceCraftCount){
     document.getElementById("spaceCraftCount").innerText = automaticUpgrades['spaceCraft'].quantity
}






function updateShovelPrice(){
    clickUpgrades['shovel'].price =  clickUpgrades['shovel'].price * 2   
}

function updatePickaxPrice(){
  clickUpgrades['pickaxes'].price = clickUpgrades['pickaxes'].price * 2
}

function updateRoverPrice(){
    automaticUpgrades['rovers'].price = automaticUpgrades['rovers'].price * 2
}

function updateSpaceCraftPrice(){
     automaticUpgrades['spaceCraft'].price = automaticUpgrades['spaceCraft'].price * 2
}




function updatePickaxCost(){
    document.getElementById ("pickaxCost").innerText = clickUpgrades['pickaxes'].price
}
function updateShovelCost(){
    document.getElementById ("shovelCost").innerText = clickUpgrades['shovel'].price
}
function updateRoverCost(){
    document.getElementById ("roverCost").innerText = automaticUpgrades['rovers'].price
}
function updateSpaceCraftCost(){
    document.getElementById ("spaceCraftCost").innerText = automaticUpgrades['spaceCraft'].price
}



function buyPickax(str){
    if (cheese>= clickUpgrades[str].price){
        clickUpgrades[str].quantity += 1
        cheese = cheese - clickUpgrades[str].price
        update()
        updatePickax()
        updatePickaxPrice()
        updatePickaxCost()
        hidePickaxButton()
        hideShovelButton()
        hideSpaceCraftButton()
        hideRoverButton()
        updateMultiplyer()
        console.log("You bought a pickax")
        console.log(clickUpgrades[str].quantity)
    } 
}

function buyShovel(str){
    if (cheese>= clickUpgrades[str].price){
        clickUpgrades[str].quantity += 1
        cheese = cheese - clickUpgrades[str].price
        update()
        updateShovel()
        updateShovelPrice()
        updateShovelCost()
        hidePickaxButton()
        hideShovelButton()
        hideSpaceCraftButton()
        hideRoverButton()
        updateMultiplyer()
        console.log("You bought a Shovel")
        // console.log(clickUpgrades[str].quantity)
    } 
}




function buyRover(str){
    if (cheese>= automaticUpgrades[str].price){
        automaticUpgrades[str].quantity += 1
        cheese = cheese - automaticUpgrades[str].price
        update()
        updateRover()
        updateRoverPrice()
        updateRoverCost()
        hidePickaxButton()
        hideShovelButton()
        hideSpaceCraftButton()
        hideRoverButton()
        updatePassiveIncome()
        console.log("You bought a rover")
        
    } 
}
function buySpaceCraft(str){
    if (cheese>= automaticUpgrades[str].price){
        automaticUpgrades[str].quantity += 1
        cheese = cheese - automaticUpgrades[str].price
        update()
        updateSpaceCraft()
        updateSpaceCraftPrice()
        updateSpaceCraftCost()
        hidePickaxButton()
        hideShovelButton()
        hideSpaceCraftButton()
        hideRoverButton()
        updatePassiveIncome()
        console.log("You bought a SpaceCraft")
       
    } 
}

function collectAutoUpgrades(){
    cheese  += ((automaticUpgrades['rovers'].quantity * automaticUpgrades['rovers'].multiplier) + (automaticUpgrades['spaceCraft'].quantity * automaticUpgrades['spaceCraft'].multiplier))
    update()
}

let collectionInterval

function startInterval() {
    collectionInterval = setInterval(collectAutoUpgrades, 3000);
  }




//   This is to hide button before it is availible

function hidePickaxButton(){
    if (cheese < clickUpgrades["pickaxes"].price){
        document.getElementById("pickaxButton").className = "unclickable";
    } else if (cheese >= clickUpgrades["pickaxes"].price){ 
        document.getElementById("pickaxButton").className = "is-visible";
    }
}
function hideShovelButton(){
    if (cheese < clickUpgrades["shovel"].price){
        document.getElementById("buyShovelButton").className = "unclickable";
    } else if (cheese >= clickUpgrades["shovel"].price){ 
        document.getElementById("buyShovelButton").className = "is-visible"}

}

function hideSpaceCraftButton(){
    if (cheese < automaticUpgrades["spaceCraft"].price){
        document.getElementById("buySpaceCraftButton").className = "unclickable";
    } else if (cheese >= automaticUpgrades["spaceCraft"].price){ 
        document.getElementById("buySpaceCraftButton").className = "is-visible"}
}

function hideRoverButton(){
    if (cheese < automaticUpgrades["rovers"].price){
        document.getElementById("buyRoverButton").className = "unclickable";
    } else if (cheese >= automaticUpgrades["rovers"].price){ 
        document.getElementById("buyRoverButton").className = "is-visible";
    return
    }
}



function hideButtons(){
  document.getElementById("pickaxButton").className = "is-hidden";
  document.getElementById("buyShovelButton").className = "is-hidden";
  document.getElementById("buySpaceCraftButton").className = "is-hidden";
  document.getElementById("buyRoverButton").className = "is-hidden";
}

  startInterval()
  hideButtons()
 


//   function startGame(){

//     clickUpgrades['pickaxes'].price = 10
//     document.getElementById ("spaceCraftCost").innerText = automaticUpgrades['spaceCraft'].price

//     clickUpgrades['shovel'].price = 15
//     automaticUpgrades['rovers'].price = 20
//     automaticUpgrades['spaceCraft'].price = 30
//   }