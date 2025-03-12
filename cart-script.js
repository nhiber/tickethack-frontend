fetch("http://localhost:3000/chariots")
    .then((response) => response.json())
    .then((data) => {

        if (data) {
            document.querySelector("").style.display = "none";
            let i = 0;
            for (let trip of data) {
              document.querySelector(
                ".carts"
              ).innerHTML += `<div class="cart-row">
                                <p> <span id="departure-train-${i}">${trip.departure}</span> > <span id="arrival-train-${i}">${trip.arrival}</span></p> 
                                <p id="time-train-${i}">${trip.time}</p>
                                <p id="price-train-${i}">${trip.price}€</p>
                                <button id="${i}" class="book-train" type="button">Book</button>
                            </div>`;
              i++;
            }


    });