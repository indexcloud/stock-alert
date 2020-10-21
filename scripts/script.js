var tickerHTML;

function printStock(stock) {
    return `
    <h2>${stock}</h2>
    `
}

function renderStock() {
    fetch('https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2020-06-01/2020-06-17?apiKey=pu7DDs9T9rif0lZLYxqQICA65bY0k9Uv')
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        console.log(data.ticker);
        tickerHTML = data.ticker;
        document.querySelector(".exchange-list").innerHTML = tickerHTML;
     
    });
    
    
}

renderStock();