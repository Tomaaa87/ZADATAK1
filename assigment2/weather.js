async function sarajevo() {
        try{
            const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=43.841231&lon=18.301713&units=metric&appid=ab3c6759569229fa0f383770db8ac481");
            const data=await response.json();

            document.getElementById('weather').innerHTML=" Sarajevo:  Temperature: "+data["main"]["temp"]+"°C   Description: "+data["weather"][0]["description"];
        }
        catch (error){
            console.log("Error getting the weather for Sarajevo: ", error);
        }
    
}
sarajevo();