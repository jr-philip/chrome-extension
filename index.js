let myLeads = []
const inputEl = document.getElementById("input-el")
const inputButton = document.getElementById("input-btn")// grab the element from html you want to hook your addeventlistener
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const saveBtn = document.getElementById("save-btn")
//localStorage.setItem("myLeads", "meTooooooo")
//console.log(localStorage.getItem("myLeads"))
//localStorage.clear()

/*JSON.parse(localStorage.getItem (myLeads))
let leadsFromLocalStorage = myLeads
console.log(leadsFromLocalStorage)*/

//or
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

saveBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
        //console.log(tabs[0].url)
    })
})


function render(leads) {
    let listItems = " "
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li> 
                <a target='_blank' href=' ${leads[i]} '> 
                    ${leads[i]} 
                </a>
            </li> 
        ` // TEMPLETE STRING
    }
    ulEl.innerHTML = listItems
}

//how to clear out the localstorage, myleads and DOM
deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = [] // reassign it to empty array
    render(myLeads)//render ou leads which is now an empty array
})

inputButton.addEventListener("click", function () {// inside the addEventListener first specify what event you want to listen and then invoke it by writing a function 
    myLeads.push(inputEl.value)// these is how to push the value from inputEl to the array
    //console.log(myLeads)// inside the function you can write anything that the user can see when they click the input button 
    inputEl.value = " "// how to make the input box empty after saving input
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    //console.log(localStorage.getItem("myLeads"))
})
