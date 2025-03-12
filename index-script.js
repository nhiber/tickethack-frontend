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
      document.querySelector("#all-trips").innerHTML = "";
      document.querySelector("#placeholder-train").style.display = "none";
      document.querySelector("#no-trip").style.display = "none";
      document.querySelector("#all-trips").style.display = "grid";
      if (data) {
        let i = 0;
        for (let trip of data.trips) {
          document.querySelector(
            "#all-trips"
          ).innerHTML += `<div class="cart-row">
                            <p> <span id="departure-train-${i}">${trip.departure}</span> > <span id="arrival-train-${i}">${trip.arrival}</span></p> 
                            <p id="time-train-${i}">${trip.time}</p>
                            <p id="price-train-${i}">${trip.price}€</p>
                            <button id="${i}" class="book-train" type="button">Book</button>
                        </div>`;
          i++;
        }
        bookATrip();
      }
      if (
        departure === "" ||
        arrival === "" ||
        date === "" ||
        data.trips.length === 0
      ) {
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

function bookATrip() {
  for (let i = 0; i < document.querySelectorAll(".book-train").length; i++) {
    document
      .querySelectorAll(".book-train")
      [i].addEventListener("click", function () {
        let j = this.id;

        _departure = document.querySelector(
          `#departure-train-${j}`
        ).textContent;
        _arrival = document.querySelector(`#arrival-train-${j}`).textContent;
        _time = document
          .querySelector(`#time-train-${j}`)
          .textContent.split(":");
        _hour = _time[0];
        _minute = _time[1];
        _price = document
          .querySelector(`#price-train-${j}`)
          .textContent.slice(0, -1);

        let trip = {
          departure: _departure,
          arrival: _arrival,
          hour: _hour,
          minute: _minute,
          price: _price,
        };
        //console.log(trip);

        fetch("http://localhost:3000/trajets/book", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ trip: trip }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data));

        //window.location.assign('cart.html')
      });
  }
}
