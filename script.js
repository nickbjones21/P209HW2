//variable for form
const form = document.getElementById("za_form");

//listen for submit to be pressed.
form.addEventListener("submit", (event) => {
  /*using preventDefault to avoid the usual submit behavior, buys me time to calculate the pizza cost,
  and to allow for a 5 second pause to calculate + read the total order price before directing to my 
  form submission complete page.*/
    event.preventDefault();
  /*had to google a lot for my querySelector, kept using querySelectorAll, apparently that was't correct
    because it didn't work the 1000x in a row that I tried it.*/
  const size = document.querySelector('input[name="size"]:checked').value;
  const toppings = document.querySelector('select[name="toppings"]').value;
  
  //zeroed out pre-calculation
  let price = 0;

  //for za size
  if (size === "small") {
    price = 7;
  } else if (size === "medium") {
    price = 10;
  } else if (size === "large") {
    price = 14;
  }
  
  //for za topping quantity
  if (toppings === "one_topping") {
    price += 2;
  } else if (toppings === "two_toppings") {
    price += 3;
  }
  
  //for pizza price variable.
  const zaPrice = document.getElementById("price");

  //had to google 1000 times how to properly use backticks. Still not sure, but it works...barely(?)
  //used toFixed(2) to force price accuracy to 2 decimal places. only need 2 decimal places since it's $ currency.
  zaPrice.innerHTML = `Your pizza costs $${price.toFixed(2)}.`;
  
  document.writeln("Please wait 5 seconds while your order is placed");

  //pause for 5 sec, then send to order complete page.
  setTimeout(() => {
    window.location.href = "order_complete.html";
  }, 5000);
});
