// //the addEventlistener method by logging out "I want to open the box"

// let boxOpen = document.getElementById("box")

// boxOpen.addEventListener ("click", function() {
//     console.log("I want to open the box")
// })


//// Use .innerHTML to render a Buy! button inside the div container

// let containerEl = document.getElementById("container")
// containerEl.innerHTML += "<button onclick='buy()'>BUY !</button>"

///// When clicked, render a paragraph under the button (in the container)
//// that says "Thank you for buying!"

// function buy(){
//     containerEl.innerHTML += "<p>Thank you for buying!</p>"// on the previous exersise add the onclick btn
// }


/*log out items in Array
let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

function logItems(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

logItems(myCourses)*/


/*generate sentence 
// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are`
    const last = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        if (i === last) {
            baseString += arr[i]
        } else {
            baseString += arr[i] + ","
        }
    }
    return baseString
}
const sentence = generateSentence("highest mountain", [" mount everest", "k2"])
console.log(sentence)*/


/*render images
Create a function that renders the three team images
 Use a for loop, template strings (``), plus equals (+=)
.innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const container = document.getElementById("container")

function renderImages() {
    let imgsDOM = ""
    for (let i = 0; i < imgs.length; i++) {
        imgsDOM += `<img alt="Employee in the company" class="team-img" src="${imgs[i]}">`
    }
    container.innerHTML = imgsDOM
}
renderImages()*/


/*rounding numbers
// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

const totalPrice = 420.69235632455
const btn = document.getElementById("purchase-btn")
btn.textContent = `Buy €${totalPrice.toFixed(2)}`*/

