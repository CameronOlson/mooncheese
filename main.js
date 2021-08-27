let cheese = 0
let pickax = 0
let rover = 0

let clickUpgrades = {
    pickaxes: {
      price: 10,
      quantity: 0,
      multiplier: 1
    },
    shovel: {
        price: 200,
        quantity: 0,
        multiplier: 5
    }
  }

  let automaticUpgrades = {
    rovers: {
      price: 15,
      quantity: 0,
      multiplier: 20
    }, 
    spaceCraft: {
        price: 1000,
        quantity: 0,
        multiplier: 40
    }
  }


function mine(){
     cheese += (1 + clickUpgrades['pickaxes'].quantity * clickUpgrades['pickaxes'].multiplier)
    update(onScreenCheeseCount)
}

function update(onScreenCheeseCount){
    onScreenCheeseCount = document.getElementById("onScreenCheeseCount").innerText = cheese
}

function updatePickax(pickaxCount){
    pickaxCount = document.getElementById("pickaxCount").innerText = clickUpgrades['pickaxes'].quantity
}

function updateRover(roverCount){
    roverCount = document.getElementById("roverCount").innerText = automaticUpgrades['rovers'].quantity
}

function buyClickUpgrades(str){
    if (cheese>= clickUpgrades[str].price){
        clickUpgrades[str].quantity += 1
        cheese = cheese - clickUpgrades[str].price
        update()
        updatePickax()
        console.log("You bought a pickax")
        console.log(clickUpgrades[str].quantity)
    } 
}



function buyAutomaticUpgrades(str){
    if (cheese>= automaticUpgrades[str].price){
        automaticUpgrades[str].quantity += 1
        cheese = cheese - automaticUpgrades[str].price
        rover += 1
        update()
        updateRover()
        startInterval()
        console.log("You bought a rover")
        console.log(rover)
    } 
}

function collectAutoUpgrades(){
    cheese  += (automaticUpgrades['rovers'].quantity * automaticUpgrades['rovers'].multiplier)
    update()
}

let collectionInterval

function startInterval() {
    collectionInterval = setInterval(collectAutoUpgrades, 3000);
  }

//   startInterval()