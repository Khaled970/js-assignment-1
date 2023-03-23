// Define the account object with necessary properties and methods
let account = {
  name: "",
  expenses: [],
  income: [],
  addExpenses: function(description, amount) {
    if (description === "" || amount === "") {
      console.log("Please provide both description and amount.");
      return;
    }
    this.expenses.push({description, amount});
  },
  addIncome: function(description, amount) {
    if (description === "" || amount === "") {
      console.log("Please provide both description and amount.");
      return;
    }
    this.income.push({description, amount});
  },
  listAllExpenses: function() {
    if (this.expenses.length === 0) {
      console.log("There are no expenses.");
      return;
    }
    console.log("Expenses:");
    for (let expense of this.expenses) {
      console.log(`${expense.description}: ${expense.amount}`);
    }
  },
  getSummary: function() {
    let totalIncome = 0;
    let totalExpenses = 0;
    for (let income of this.income) {
      totalIncome += income.amount;
    }
    for (let expense of this.expenses) {
      totalExpenses += expense.amount;
    }
    let balance = totalIncome - totalExpenses;
    console.log(`Total income: ${totalIncome}`);
    console.log(`Total expenses: ${totalExpenses}`);
    console.log(`Current balance: ${balance}`);
  }
};

// Define the menu function to display options and call corresponding methods/properties
function menu() {
  console.log("1. Set account holder name");
  console.log("2. Add expense");
  console.log("3. Add income");
  console.log("4. List all expenses");
  console.log("5. Get summary");
  console.log("6. Quit");

  let choice = prompt("Enter your choice:");
  switch (choice) {
    case "1":
      let name = prompt("Enter your name:");
      account.name = name;
      break;
    case "2":
      let expenseDescription = prompt("Enter expense description:");
      let expenseAmount = prompt("Enter expense amount:");
      account.addExpenses(expenseDescription, parseFloat(expenseAmount));
      break;
    case "3":
      let incomeDescription = prompt("Enter income description:");
      let incomeAmount = prompt("Enter income amount:");
      account.addIncome(incomeDescription, parseFloat(incomeAmount));
      break;
    case "4":
      account.listAllExpenses();
      break;
    case "5":
      account.getSummary();
      break;
    case "6":
      console.log("Goodbye!");
      return;
    default:
      console.log("Invalid choice.");
  }
  menu(); // Call menu function again for continuous use
}

// Call the menu function to start the app
menu();
