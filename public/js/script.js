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
        window.addEventListener("DOMContentLoaded", () => {
          let taxInfo = document.getElementsByClassName("tax-info");
          for (let info of taxInfo) {
              info.style.display = "none";
          }
      });
      

        document.addEventListener("DOMContentLoaded", () => {
          const scrollContainer = document.querySelector(".filters-scroll-container");
          const scrollButton = document.getElementById("scrollRight");
        
          scrollButton.addEventListener("click", () => {
            const scrollAmount = scrollContainer.clientWidth;
            scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
          });
        });


        
        window.addEventListener('DOMContentLoaded', () => {
          const filterContainer = document.querySelector('.filters-scroll-area');
        
          // Restore scroll position
          const savedPosition = sessionStorage.getItem('filterScrollPosition');
          if (filterContainer && savedPosition !== null) {
            filterContainer.scrollLeft = parseInt(savedPosition, 10);
          }
        
          // Save scroll position before unload
          window.addEventListener('beforeunload', () => {
            if (filterContainer) {
              sessionStorage.setItem('filterScrollPosition', filterContainer.scrollLeft);
            }
          });
        });
        

