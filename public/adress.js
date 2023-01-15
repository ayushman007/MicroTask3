//const { response } = require("express");

window.onload=function(){
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords.latitude)
            console.log(position.coords.longitude)

            fetch(`https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`)
            .then(res=>{
                if(res.ok){
                    console.log('SUCCESS')
                    return res.json()
                }else{
                    console.log('NOT SUCCESSFUL')
                }
            }).then(data=>{
                console.log("NOICE")
                console.log(data)
                document.getElementById('adress-box').innerHTML=data.display_name
            } )
            .catch(error=>console.log('ERROR'))
          //  doSomething(position.coords.latitude, position.coords.longitude);
          });
          
      } else {
        /* geolocation IS NOT available */
        alert("Sorry location cant be accessed")
      }
      

}