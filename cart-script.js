let total = 0;

fetch("http://localhost:3000/chariots")
  .then((response) => response.json())
  .then((data) => {
    if (data) {
      document.querySelector("#placeholder").style.display = "none";
      document.querySelector(".carts").style.display = "flex";
      document.querySelector("#contain-down").style.display = "flex";

      let i = 0;

      for (let trip of data.data) {
        total += Number(trip.price);
        if (trip.hour < 10) {
          trip.hour = "0" + trip.hour;
        }

        if (trip.minute < 10) {
          trip.minute = "0" + trip.minute;
        }
        document.querySelector(".carts").innerHTML += `<div class="cart-row">
                                <p> <span id="departure-train-${i}">${trip.departure}</span> > <span id="arrival-train-${i}">${trip.arrival}</span></p> 
                                <p id="time-train-${i}">${trip.hour}:${trip.minute}</p>
                                <p id="price-train-${i}">${trip.price}€</p>
                                <button id="${i}" class="delete" type="button">X</button>
                             </div>`;
        i++;
      }
      deleteTrip();
      document.querySelector("#total").textContent = total.toString() + "€";
    }
    if (data.data.length === 0) {
      document.querySelector("#placeholder").style.display = "flex";
      document.querySelector(".carts").style.display = "none";
      document.querySelector("#contain-down").style.display = "none";
    }
  });

function deleteTrip() {
  for (let i = 0; i < document.querySelectorAll(".delete").length; i++) {
    document
      .querySelectorAll(".delete")
      [i].addEventListener("click", function () {
        let j = this.id;

        console.log(j);

        _departure = document.querySelector(
          `#departure-train-${j}`
        ).textContent;

        console.log(_departure);

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

        fetch("http://localhost:3000/chariots/delete", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ trip: trip }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
        this.parentNode.remove();

        total -= _price;
        document.querySelector("#total").textContent = total.toString() + "€";
      });
  }
}

//-------------------------------------------------------------------------------------

document.querySelector("#purchase").addEventListener("click", function () {
  fetch("http://localhost:3000/achats")
    .then((response) => response.json())
    .then((data) => console.log(data));

  window.location.assign("bookings.html");
});
