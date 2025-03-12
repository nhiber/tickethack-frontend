fetch("http://localhost:3000/achats/booking")
  .then((response) => response.json())
  .then((data) => {
    if (data) {
      document.querySelector("#placeholder").style.display = "none";
      document.querySelector(".mybookings").style.display = "flex";
      document.querySelector(".enjoy").style.display = "flex";

      for (let trip of data.data) {
        if (trip.hour < 10) {
          trip.hour = "0" + trip.hour;
        }

        if (trip.minute < 10) {
          trip.minute = "0" + trip.minute;
        }

        
        //const minute = new Date().getMinutes();
        /*const hour = new Date().getHours();
        console.log(hour)
        const timeWait = Math.abs(Number(hour) - Number(trip.hour))*/


        document.querySelector(".mybookings").innerHTML += `<div class="cart-row">
                                <p> <span class="departure-train">${trip.departure}</span> > <span class="arrival-train-">${trip.arrival}</span></p> 
                                <p class="time-train-">${trip.hour}:${trip.minute}</p>
                                <p class="price-train-">${trip.price}€</p>
                                <p class="depart-tran">Departure in X hours</p>
                             </div>`;
      }
    }
    if (data.data.length === 0) {
      document.querySelector("#placeholder").style.display = "flex";
      document.querySelector(".mybookings").style.display = "none";
      document.querySelector(".enjoy").style.display = "none";

    }
  });
  
 