// Goal: Display data returned from an api
//https://api.api-ninjas.com/v1/stars

document.querySelector('button').addEventListener('click', getStar)

function getStar(){
    const star = document.querySelector('input').value
    fetch(`https://api.api-ninjas.com/v1/stars?name=${star}    ` , {
        method: 'GET', headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Api-Key': 'LICIk+Uj0UlnuHxZohxiEw==ASwnzAaOvuO51LMH'
        }
    })

    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      console.log('hello')

        document.querySelector('h2').innerText = 'Name of Star: ' + data[0].name
        document.querySelector('h3').innerText = 'Constellation: ' + data[0].constellation
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}