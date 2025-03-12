document.querySelector(".search").addEventListener("click", function () {

  const departure = document.querySelector(".departure").value;

  const arrival = document.querySelector(".arrival").value;

  const date = document.querySelector(".calendar").value;


  fetch("http://localhost:3000/trajets", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ departure, arrival, date }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("#all-trips").innerHTML = ""
      document.querySelector("#placeholder-train").style.display = "none";
      document.querySelector("#no-trip").style.display = "none";
      document.querySelector("#all-trips").style.display = "flex";
      if (data) {

        for (let trip of data.trips) {
          document.querySelector("#all-trips").innerHTML += `<div class="cart-row">
                            <p> <span class="departure-train">${trip.departure}</span> > <span class="arrival-train">${trip.arrival}</span></p> 
                            <p class="time-train">${trip.time}</p>
                            <p class="price-train">${trip.price}€</p>
                            <button class="book-train" type="button">Book</button>
                        </div>`
        }
      }
      if (departure === "" || arrival === "" || date === "" || data.trips.length === 0) {
        document.querySelector("#placeholder-train").style.display = "none";
        document.querySelector("#all-trips").style.display = "none";
        document.querySelector("#no-trip ").style.display = "flex";

      }
    });
});

/*departure: trip.departure,
        arrival: trip.arrival,
        time: hour,
        date: tripDate,
        price: trip.price, */
