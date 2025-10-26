// Arrays to store data
let incomes = [];
let expenses = [];

// Function to add income
function addIncome() {
  const salaryInput = document.getElementById("salary");
  const incomeName = document.getElementById("incomeName");
  const incomeAmount = document.getElementById("incomeAmount");

  // If salary is entered for the first time
  if (salaryInput.value) {
    incomes.push({ name: "Salary", amount: Number(salaryInput.value) });
    salaryInput.value = ""; // clear input
  }

  // For other income
  if (incomeName.value && incomeAmount.value) {
    incomes.push({
      name: incomeName.value,
      amount: Number(incomeAmount.value),
    });

    // Clear input fields
    incomeName.value = "";
    incomeAmount.value = "";
  }

  displayIncomes();
}

// Function to add expense
function addExpense() {
  const expenseName = document.getElementById("expenseName");
  const expenseAmount = document.getElementById("expenseAmount");

  if (expenseName.value && expenseAmount.value) {
    expenses.push({
      name: expenseName.value,
      amount: Number(expenseAmount.value),
    });

    // Clear fields
    expenseName.value = "";
    expenseAmount.value = "";
  }

  displayExpenses();
}

// Display all incomes
function displayIncomes() {
  const list = document.getElementById("incomeList");
  list.innerHTML = ""; // clear list
  incomes.forEach((inc, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${inc.name}: ${inc.amount} PKR 
    <button onclick="removeIncome(${index})">Remove</button>`;
    list.appendChild(li);
  });
}

// Display all expenses
function displayExpenses() {
  const list = document.getElementById("expenseList");
  list.innerHTML = "";
  expenses.forEach((exp, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${exp.name}: ${exp.amount} PKR 
    <button onclick="removeExpense(${index})">Remove</button>`;
    list.appendChild(li);
  });
}

// Remove the income or expense (correction feature)
function removeIncome(index) {
  incomes.splice(index, 1);
  displayIncomes();
}

function removeExpense(index) {
  expenses.splice(index, 1);
  displayExpenses();
}

// Calculate savings
function calculateSaving() {
  const totalIncome = incomes.reduce((sum, i) => sum + i.amount, 0);
  const totalExpense = expenses.reduce((sum, e) => sum + e.amount, 0);
  const saving = totalIncome - totalExpense;

  const result = document.getElementById("result");

  if (saving >= 0) {
    result.innerHTML = ` Savings: ${saving} PKR`;
  } else {
    const deficit = Math.abs(saving);
    result.innerHTML = ` Deficit: ${deficit} PKR — Your expenses are higher!`;
    alert(` Warning: You are in deficit by ${deficit} PKR. Please reduce your expenses!`);
  }
}