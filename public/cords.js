window.onload=qwerty()

function qwerty(){
    document.getElementById('my-form').addEventListener("submit",  (e)=> {
        e.preventDefault();
        console.log("Clicked")
        //console.log(e.target)
        //getData(e.target);
     let formdata = new FormData(e.target);

     fetch(`https://nominatim.openstreetmap.org/search?street=${formdata.get("locality")}&city=${formdata.get("city")}&state=${formdata.get("state")}&country=${formdata.get("country")}&postalcode=${formdata.get("postalcode")}&format=json`)
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
               document.getElementById('adress-box2').innerHTML='Your Entered Address: '+formdata.get("locality")+" "+formdata.get("city")+" "+formdata.get("state")+" "+formdata.get("country")+" "+formdata.get("postalcode");
               document.getElementById('adress-box3').innerHTML="Latitude: "+ data[0].lat+" Longitude: "+data[0].lon;
            } )
            .catch(error=>console.log('ERROR'))
          
          });
      
   
      
      };
      





    