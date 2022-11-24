// Goal: Display data returned from an api
//https://api.api-ninjas.com/v1/stars

document.querySelector('button').addEventListener('click', getTransactions)



function getTransactions(){
    const date = document.querySelector('#dateSearched').value
    
    fetch('https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json')
    .then(res => res.json()) // parse response as JSON
    .then(data => {

    
        const transactionsForThisDate = data.filter(element => element.transaction_date === date.toString());
        console.log('Transaction date searched: ' + date.toString())
        console.log(transactionsForThisDate)

        const list = document.getElementById("listOfTransactions");

        while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
        }

        for(let i = 0; i < transactionsForThisDate.length; i++){

            const node = document.createElement("li");


            const official = '  Representative:   ' + transactionsForThisDate[i].representative;
            const officialTextnode = document.createTextNode(official);
            node.appendChild(officialTextnode);

            const district = '  District:   ' + transactionsForThisDate[i].district;
            const districtTextnode = document.createTextNode(district);
            node.appendChild(districtTextnode);

            const amount = '  Amount:   ' + transactionsForThisDate[i].amount;
            const amountTextnode = document.createTextNode(amount);
            node.appendChild(amountTextnode);

            const assetDescription = '  Asset Description:   ' + transactionsForThisDate[i].asset_description;
            const assetDescriptionTextnode = document.createTextNode(assetDescription);
            node.appendChild(assetDescriptionTextnode);

            const ticker = '  Ticker:   ' + transactionsForThisDate[i].ticker;
            const tickerTextnode = document.createTextNode(ticker);
            node.appendChild(tickerTextnode);

            const disclosureDate = '  Disclosure Date:   ' + transactionsForThisDate[i].disclosure_date;
            const disclosureDateTextnode = document.createTextNode(disclosureDate);
            node.appendChild(disclosureDateTextnode);

            const transactionDate =  '  Transaction:   ' + transactionsForThisDate[i].transaction_date;
            const transactionDateTextnode = document.createTextNode(transactionDate);
            node.appendChild(transactionDateTextnode);


            const type = '  Type:   ' + transactionsForThisDate[i].type;
            const typeTextnode = document.createTextNode(type);
            node.appendChild(typeTextnode);

            document.getElementById("listOfTransactions").appendChild(node);
        }
        
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
  
}