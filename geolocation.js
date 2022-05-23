const userCity = document.querySelector('.welcome-text__city')
let userLocation = null

const success = (userLocation) => {
    const lat = userLocation.coords.latitude.toString()
    const lon = userLocation.coords.longitude.toString()
    const coordinates = {
        latitude: lat,
        longitude: lon
    }
    findCity(coordinates)
}
const error = (error) => {
    console.error(error)
    console.info("I can't check your location 😞")
    const userOwnLocation = prompt("What's your location then?")
    if(!userOwnLocation || (!userOwnLocation.replaceAll(' ',''))){
        userCity.textContent = 'somewhere'
    } else {
        userCity.textContent = userOwnLocation
    }

}

if(!navigator.geolocation) {
    console.info('Geolocation is not supported by your browser')
} else {
    userLocation = navigator.geolocation.getCurrentPosition(success,error, {enableHighAccuracy: true})
}

const findCity = ({latitude, longitude}) => {
    const token = 'pk.054f4d0bf4fcdaaf1aa82b0c9b403246'
    const URL = `https://eu1.locationiq.com/v1/reverse.php?key=${token}&lat=${latitude}&lon=${longitude}&format=json`
    //console.log(fetch(`https://eu1.locationiq.com/v1/reverse.php?key=${token}&lat=${latitude}&lon=${longitude}&format=json`))
    fetch(URL)
        .then(res => {
            if(res.ok){
                return res.json()
            } else {
                console.error('Response is not successful')
            }
        })
        .then(data => {
            console.log(data.address)
            userCity.textContent = data.address.city
        })
        .catch(error => {
            console.error(error)
            userCity.textContent = 'unknown place'
        })
}