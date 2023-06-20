// Sample account balance and transaction history
let accountBalance = 5000;
let transactionHistory = [];

// Function to display account balance
function displayBalance() {
  const balanceAmount = document.getElementById('balance-amount');
  balanceAmount.textContent = accountBalance;
}

// Function to display transaction history
function displayTransactions() {
  const transactionList = document.getElementById('transaction-list');
  transactionList.innerHTML = '';

  transactionHistory.forEach(transaction => {
    const listItem = document.createElement('li');
    listItem.textContent = transaction;
    transactionList.appendChild(listItem);
  });
}

// Function to transfer money
function transferMoney() {
  const recipientInput = document.getElementById('recipient');
  const amountInput = document.getElementById('amount');

  const recipient = recipientInput.value;
  const amount = Number(amountInput.value);

  if (recipient && amount > 0 && amount <= accountBalance) {
    // Deduct amount from account balance
    accountBalance -= amount;

    // Add transaction to history
    const transaction = `Transferred $${amount} to ${recipient}`;
    transactionHistory.push(transaction);

    // Update UI
    displayBalance();
    displayTransactions();

    // Clear input fields
    recipientInput.value = '';
    amountInput.value = '';
  }
}

// Event listener for transfer button
const transferBtn = document.getElementById('transfer-btn');
transferBtn.addEventListener('click', transferMoney);

// Initial display
displayBalance();
displayTransactions();
