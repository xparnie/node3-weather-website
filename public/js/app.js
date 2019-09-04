console.log('client side JS loaded')

const weatherForm = document.querySelector('.weatherForm')
const weatherInput = document.querySelector('.weatherForm-input')
const weatherMessageOne = document.querySelector('.message-1')
const weatherMessageTwo = document.querySelector('.message-2')
const weatherButton = document.querySelector('.weatherForm-button')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = weatherInput.value

    weatherMessageOne.textContent = 'Loading'
    weatherMessageTwo.textContent = ''

    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                weatherMessageOne.textContent = data.error
            } else {
                weatherMessageOne.textContent = data.location
                weatherMessageTwo.textContent = data.forecast
            }
        })
    })

    console.log(location)
})