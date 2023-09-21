const accounts = [
    {
        id: 1,
        title: "Main Account",
        balance: "6700.56",
        spendings: [
            {
                category: "Rent",
                spent: "1450"
            },
            {
                category: "Groceries",
                spent: "564"
            },
            {
                category: "Restaurants",
                spent: "123"
            },
            {
                category: "Transport",
                spent: "81"
            },
            {
                category: "Internet",
                spent: "50"
            }
        ]
    },
    {
        id: 2,
        title: "Expenses",
        balance: "5134.63",
        spendings: [
            {
                category: "Netflix",
                spent: "19.99"
            },
            {
                category: "HBO Max",
                spent: "14.99"
            },
            {
                category: "Setapp",
                spent: "9.99"
            }
        ]
    },
    {
        id: 3,
        title: "Savings",
        balance: "36500.12",
        spendings: []
    }
]


//main buttons
const payBtnEl  = document.getElementById("pay-btn")
const transferBtnEl  = document.getElementById("transfer-btn")
//accounts buttons
const idOneBtnEl  = document.getElementById("id-one-btn")
const idTwoElBtnEl  = document.getElementById("id-two-btn")
const idThreeBtnEl  = document.getElementById("id-three-btn")
//account title
const idOneTitleEl = document.getElementById("id-one-title")
const idTwoTitleEl = document.getElementById("id-two-title")
const idThreeTitleEl = document.getElementById("id-three-title")
//account balance
const idOneBalanceEl = document.getElementById("id-one-balance")
const idTwoBalanceEl = document.getElementById("id-two-balance")
const idThreeBalanceEl = document.getElementById("id-three-balance")

//spending spent
const rentSpent = "$ " + accounts[0].spendings[0].spent
const grocerieSpent = "$ " + accounts[0].spendings[1].spent
const restaurantSpent = "$ " + accounts[0].spendings[2].spent
const transportSpent = "$ " + accounts[0].spendings[3].spent
const internetSpent = "$ " + accounts[0].spendings[4].spent

const netflixSpent = "$ " + accounts[1].spendings[0].spent
const HboMaxSpent = "$ " + accounts[1].spendings[1].spent
const setappSpent = "$ " + accounts[1].spendings[2].spent

// spending category
const rentCat = accounts[0].spendings[0].category
const groceriesCat = accounts[0].spendings[1].category
const restaurantsCat = accounts[0].spendings[2].category
const transportCat = accounts[0].spendings[3].category
const internetCat = accounts[0].spendings[4].category

const netflixCat = accounts[1].spendings[0].category
const HboMaxCat = accounts[1].spendings[1].category
const setappCat = accounts[1].spendings[2].category


// change the CC of accounts buttons
function changeCss(element) {
    element.style.backgroundColor = "#FFD18C"
}

// reset the background of unclicked buttons
function resetCss() {
    let buttons = document.querySelectorAll(".account-btn")
    for(let i = 0; i < accounts.length; i++) {
        buttons[i].style.backgroundColor = "#FFFFFF"
    }
}


function buttonsAction(reset, change, firstBtnEl, secondBtnEl, thirdBtnEl) {

    firstBtnEl.addEventListener("click", function() {
        reset()
        change(firstBtnEl)
        renderSpendingMain()
    })
    
    secondBtnEl.addEventListener("click", function() {
        reset()
        change(secondBtnEl)
        renderSpendingExpenses()
    })
    
    thirdBtnEl.addEventListener("click", function() {
        reset()
        change(thirdBtnEl)
        renderSpendingSavings()  
    })
}

buttonsAction(resetCss, changeCss, idOneBtnEl, idTwoElBtnEl, idThreeBtnEl)

// renders the default layout
function renderDefault() {
    idOneTitleEl.innerText = accounts[0].title
    idTwoTitleEl.innerText = accounts[1].title
    idThreeTitleEl.innerText = accounts[2].title

    idOneBalanceEl.innerText = "$ " + accounts[0].balance
    idTwoBalanceEl.innerText = "$ " + accounts[1].balance
    idThreeBalanceEl.innerText = "$ " + accounts[2].balance

    renderSpendingMain()
    changeCss(idOneBtnEl)
}

renderDefault()


// render main account's spending section
function renderSpendingMain() {
    const spendingContainer = document.getElementById("spending-container")
    spendingContainer.innerHTML = `
        <div class="spending-field">
            <p id="rent-cat">${rentCat}</p>
            <p id="rent-spent">${rentSpent}</p>
        </div>
        <div class="spending-field width-85">
            <p id="groceries-cat">${groceriesCat}</p>
            <p id="groceries-spent">${grocerieSpent}</p>
        </div>
        <div class="spending-field width-70">
            <p id="restaurants-cat">${restaurantsCat}</p>
            <p id="restaurants-spent">${restaurantSpent}</p>
        </div>
        <div class="spending-field width-55">
            <p id="transport-cat">${transportCat}</p>
            <p id="transport-spent">${transportSpent}</p>
        </div>
        <div class="spending-field width-44">
            <p id="internet-cat">${internetCat}</p>
            <p id="internet-spent">${internetSpent}</p>
        </div>
    `
}

// render expenses account's spending section
function renderSpendingExpenses() {
    const spendingContainer = document.getElementById("spending-container")
    spendingContainer.innerHTML = `
        <div class="spending-field">
            <p id="rent-cat">${netflixCat}</p>
            <p id="rent-spent">${netflixSpent}</p>
        </div>
        <div class="spending-field width-85">
            <p id="groceries-cat">${HboMaxCat}</p>
            <p id="groceries-spent">${HboMaxSpent}</p>
        </div>
        <div class="spending-field width-70">
            <p id="restaurants-cat">${setappCat}</p>
            <p id="restaurants-spent">${setappSpent}</p>
    `
}

// render savings account's spending section (no data to display)
function renderSpendingSavings() {
    const spendingContainer = document.getElementById("spending-container")
    spendingContainer.innerHTML = ""
}