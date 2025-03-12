fetch("http://localhost:3000/achats/booking")
  .then((response) => response.json())
  .then((data) => {
    if (data) {
      document.querySelector("#placeholder").style.display = "none";
      document.querySelector(".mybookings").style.display = "flex";

      for (let trip of data.data) {

        document.querySelector(".mybookings").innerHTML += `<div class="cart-row">
                                <p> <span class="departure-train">${trip.departure}</span> > <span class="arrival-train-">${trip.arrival}</span></p> 
                                <p class="time-train-">${trip.hour}:${trip.minute}</p>
                                <p class="price-train-">${trip.price}€</p>
                             </div>`;

      }
    }
    if (data.data.length === 0) {
      document.querySelector("#placeholder").style.display = "flex";
      document.querySelector(".mybookings").style.display = "none";
    }
  });