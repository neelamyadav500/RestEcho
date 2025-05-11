(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: { lat: listingLocation.lat, lng: listingLocation.lng }
    });

    const marker = new google.maps.Marker({
        position: { lat: listingLocation.lat, lng: listingLocation.lng },
        map: map,
        title: listingLocation.title
    });
}

let taxSwitch = document.getElementById("flexSwitchCheckDefault");
        taxSwitch.addEventListener("click",()=>{
            let taxInfo = document.getElementsByClassName("tax-info");
            for(info of taxInfo){
                if(info.style.display != "inline"){
                    info.style.display = "inline";
                }else{
                    info.style.display="none";
                }
            }
        })