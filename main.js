let cheese = 0
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
}



function update(onScreenCheeseCount){
    onScreenCheeseCount = document.getElementById("onScreenCheeseCount").innerText = cheese
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

  startInterval()

//   function startGame(){

//     clickUpgrades['pickaxes'].price = 10
//     document.getElementById ("spaceCraftCost").innerText = automaticUpgrades['spaceCraft'].price

//     clickUpgrades['shovel'].price = 15
//     automaticUpgrades['rovers'].price = 20
//     automaticUpgrades['spaceCraft'].price = 30
//   }