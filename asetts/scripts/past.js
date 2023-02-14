import { printCardsPast, printChecks, checkboxCategory, filterSearch } from "./module/functions.js"

const cards = document.getElementById("div-cards")
let info = data.events

const check = document.getElementById("div-checkbox")
const categoryRepeat = info.map(eventmap => eventmap.category)
const categorySet = new Set (categoryRepeat)
const categorySetArray = [...categorySet]

const search = document.getElementById("input-search")


printCardsPast(info, cards)

printChecks(categorySetArray, check)


check.addEventListener('change',(e)=>{
  let searchValue = search[0].value.toLowerCase()
  let arrayFilterSearch = filterSearch(searchValue, info)
  let checksAndSearchFilter = checkboxCategory(arrayFilterSearch)
  printCardsPast(checksAndSearchFilter, cards)
})


search.addEventListener('keyup', (e)=>{
  let searchValue = search[0].value.toLowerCase()
  let arrayFilterSearch = filterSearch(searchValue, info)
  let checksAndSearchFilter = checkboxCategory(arrayFilterSearch)
  printCardsPast(checksAndSearchFilter, cards)
})
