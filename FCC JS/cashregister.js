/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as
the first argument (price),
payment as the second argument (cash),
and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due,
or if you cannot return
the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order,
as the value of the change key.

Currency Unit |	Amount
Penny |	$0.01 (PENNY)
Nickel |	$0.05 (NICKEL)
Dime |	$0.1 (DIME)
Quarter |	$0.25 (QUARTER)
Dollar |	$1 (ONE)
Five Dollars |	$5 (FIVE)
Ten Dollars |	$10 (TEN)
Twenty Dollars |	$20 (TWENTY)
One-hundred Dollars |	$100 (ONE HUNDRED)

See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
*/

function checkCashRegister(price, cash, cid) {
  var change = cash - price; // Calculate the change due to the customer
  var cidTotal = 0; // Initialize a variable to store the total cash in the cash register
  var changeDue = []; // Initialize an empty array to store the breakdown of the change due
  var changeDueTotal = 0; // Initialize a variable to store the total change given back to the customer
  var status = ""; // Initialize a variable to store the status of the transaction
  // Define the value of each currency denomination in an object
  var currency = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };

  // Loop through the cash register to calculate its total value
  for (var i = 0; i < cid.length; i++) {
    cidTotal += cid[i][1]; // Add the amount of each denomination to the total
  }

  cidTotal = Math.round(cidTotal * 100) / 100; // Round the cash register total to two decimal places

  // Check if there's not enough money in the cash register to give change
  if (cidTotal < change) {
    status = "INSUFFICIENT_FUNDS";
  }
  // Check if the cash in the register is equal to the change due
  else if (cidTotal == change) {
    status = "CLOSED";
    changeDue = cid; // If the status is CLOSED, give all the cash in the register as change
  } else {
    status = "OPEN"; // If there's enough money in the register, set the status to OPEN
    // Loop through the cash register from highest to lowest denomination
    for (var j = cid.length - 1; j >= 0; j--) {
      var cidCurrency = cid[j][0]; // Get the currency denomination name
      var cidAmount = cid[j][1]; // Get the amount of that denomination in the register
      var cidCurrencyTotal = 0; // Initialize a variable to store the amount of that denomination given as change

      // While there's still change due and there's still currency of this denomination in the register
      while (change >= currency[cidCurrency] && cidAmount > 0) {
        change -= currency[cidCurrency]; // Subtract the value of the denomination from the change due
        change = Math.round(change * 100) / 100; // Round the change due to two decimal places
        cidAmount -= currency[cidCurrency]; // Subtract the value of the denomination from the cash register
        cidAmount = Math.round(cidAmount * 100) / 100; // Round the amount of that denomination in the register to two decimal places
        cidCurrencyTotal += currency[cidCurrency]; // Add the value of the denomination to the total change of that denomination
        cidCurrencyTotal = Math.round(cidCurrencyTotal * 100) / 100; // Round the total change of that denomination to two decimal places
      }

      // If any currency of this denomination was given as change
      if (cidCurrencyTotal > 0) {
        changeDue.push([cidCurrency, cidCurrencyTotal]); // Add the denomination and its total to the change due array
        changeDueTotal += cidCurrencyTotal; // Add the total change of this denomination to the overall change due total
        changeDueTotal = Math.round(changeDueTotal * 100) / 100; // Round the overall change due total to two decimal places
      }
    }

    // If there's still change due after giving all available denominations
    if (change > 0) {
      status = "INSUFFICIENT_FUNDS"; // Update the status to indicate insufficient funds
      changeDue = []; // Reset the change due array
    }
  }

  // Return the final status and the change due
  return {
    status: status,
    change: changeDue,
  };
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
); // {status: "OPEN", change: [["QUARTER", 0.5]]}
