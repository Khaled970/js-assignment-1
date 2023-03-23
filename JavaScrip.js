// create account object
const account = {
    name: "",
    expenses: [],
    income: [],
    addExpense: function(description, amount) {
      if (description === "" || amount === "") {
        console.log("Invalid input. Please try again.");
      } else {
        this.expenses.push({ description, amount });
        console.log("Expense added successfully!");
      }
    },
    addIncome: function(description, amount) {
      if (description === "" || amount === "") {
        console.log("Invalid input. Please try again.");
      } else {
        this.income.push({ description, amount });
        console.log("Income added successfully!");
      }
    },
    listAllExpenses: function() {
      if (this.expenses.length === 0) {
        console.log("No expenses to show.");
      } else {
        console.log("Expenses:");
        this.expenses.forEach(expense => {
          console.log(`${expense.description}: ${expense.amount}`);
        });
      }
    },
    getSummary: function() {
      let totalExpenses = 0;
      let totalIncome = 0;
  
      this.expenses.forEach(expense => {
        totalExpenses += expense.amount;
      });
  
      this.income.forEach(income => {
        totalIncome += income.amount;
      });
  
      const balance = totalIncome - totalExpenses;
  
      console.log(`Total Income: ${totalIncome}`);
      console.log(`Total Expenses: ${totalExpenses}`);
      console.log(`Balance: ${balance}`);
    }
  };
  
  // create menu function
  function menu() {
    console.log("1. Add Expense");
    console.log("2. Add Income");
    console.log("3. List All Expenses");
    console.log("4. Get Summary");
  
    const choice = prompt("Enter your choice:");
  
    switch (choice) {
      case "1":
        const expenseDescription = prompt("Enter expense description:");
        const expenseAmount = prompt("Enter expense amount:");
        account.addExpense(expenseDescription, Number(expenseAmount));
        break;
      case "2":
        const incomeDescription = prompt("Enter income description:");
        const incomeAmount = prompt("Enter income amount:");
        account.addIncome(incomeDescription, Number(incomeAmount));
        break;
      case "3":
        account.listAllExpenses();
        break;
      case "4":
        account.getSummary();
        break;
      default:
        console.log("Invalid choice. Please try again.");
        break;
    }
  }
  
  // test menu function
  menu();