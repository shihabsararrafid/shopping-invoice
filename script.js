// handling the submit button to make the invoice part more dynamic
document.getElementById('submit-button').addEventListener('click', function () {
    const textAreaElement = document.getElementById('textarea-info');
    const textareaValue = textAreaElement.value;
    const buyerInfoElement = document.getElementById('buyer-info');
    buyerInfoElement.innerText = textareaValue;
    textAreaElement.value = '';
})
// handling the add button
document.getElementById('add-button').addEventListener('click', function () {
    const itemNameElement = document.getElementById('item-name');
    const itemPriceElement = document.getElementById('item-price');
    const itemQuantityElement = document.getElementById('item-quantity');
    const itemName = itemNameElement.value;
    const itemPrice = itemPriceElement.value;
    const itemQuantity = itemQuantityElement.value;
    console.log(itemName, itemPrice, itemQuantity);
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    td3.classList.add('prices');
    th.innerText = itemName;
    td1.innerText = itemPrice;
    td2.innerText = itemQuantity;
    td3.innerText = parseInt(itemPrice) * parseInt(itemQuantity);
    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    document.getElementById('table-body').appendChild(tr);
    itemNameElement.value = '';
    itemPriceElement.value = '';
    itemQuantityElement.value = '';
    // for(let price of prices)
    let total = 0;
    const prices = document.getElementsByClassName('prices');
    for (let price of prices) {
        total = total + parseInt(price.innerText);
        const totalPriceElement = document.getElementById('total-amount');
        totalPriceElement.innerText = total;
        const taxElement = document.getElementById('total-tax');
        taxElement.innerText = (total * .2).toFixed(3);
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = parseFloat(taxElement.innerText) + parseInt(totalPriceElement.innerText);
        const totalAmountElement = document.getElementById('left-total-amount');
        totalAmountElement.innerText = grandTotal.innerText;
    }


})