

document.querySelector('button').addEventListener('click', getHoroscope)


function getHoroscope() {
    const sign = document.querySelector('input').value
    
    const URL = `https://aztro.sameerkumar.website/?sign=${sign}`;


    fetch(URL, {
    method: 'POST'
})
.then(res => res.json())
    .then(data => {
        const description = data.description
        const dateRange = data.date_range
        const luckyColor = data.color
        const mood = data.mood
        if (sign === sign) {
            document.querySelector('#zodiac-sign').innerText = sign
            document.querySelector('p').innerText = description
            document.querySelector('#date-range').innerText = dateRange
            document.querySelector('#lucky-color').innerText = `Lucky Color: ${luckyColor}`
            document.querySelector('#mood').innerText = `Feels: ${mood}`
        } else {
            document.querySelector('#zodiac-sign').innerText = 'Choose your sign.'

        };
        
        console.log(data)
    
});
}











 