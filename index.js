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

