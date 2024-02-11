// document.getElementById("count").innerText = 5

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

console.log(countEl)

let count = 0
console.log(count)


function increase() {
    count += 1
    countEl.innerText = count
    console.log(count)
}




function save() {
    let countKeeper = count + " - "
    saveEl.textContent += countKeeper
    count = 0
    countEl.textContent = count
    // console.log(count, " - ")
   // console.log("Count has been saved!")
}

// let myAge = 29
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// Create a variable, bonusPoints. Initialize it as 50.
// let bonusPoints = 50
// console.log(bonusPoints)
// // Increase it to 100
// bonusPoints = bonusPoints + bonusPoints
// console.log(bonusPoints)

// // Decrease it down to 25
// bonusPoints = bonusPoints / 4
// console.log(bonusPoints)

// // Increase to 70
// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

function increment() {
    console.log("The button was clicked")

}

function galaxyAnswer() {
    console.log("42")

}

/*
let lap1 = 34
let lap2 = 33
let lap3 = 36

function loggedLaps() {
    console.log(lap1 + lap2 + lap3)

}
*/
/*
function incrementLap() {
    lapsCompleted = lapsCompleted +1


}
incrementLap()
incrementLap()
incrementLap()

console.log(lapsCompleted)
*/

// let username = "person"

// let notificationMessage = "You have 3 new notifications"

// let messageToUser = notificationMessage + ", " +username + "!"

// console.log(messageToUser)

// Create two variables, name and greeting. The name variable should store your name,

// let personName = "Human"
// let greeting = "Hi, my name is "

// let myGreeting = greeting + personName + "!"
// // and the greeting should store e.g. "Hi, my name is "
// // Create a third variable, myGreeting, that contatenates the two strings
// // Log myGreeting to the console

// console.log(myGreeting)
