fetch("http://localhost:3000/chariots")
    .then((response) => response.json())
    .then((data) => {
        console.log("data", data.data);
        if (data) {
            //document.querySelector("").style.display = "none";
            let i = 0;
            for (let trip of data.data) {
              document.querySelector(
                ".carts"
              ).innerHTML += `<div class="cart-row">
                                <p> <span id="departure-train-${i}">${trip.departure}</span> > <span id="arrival-train-${i}">${trip.arrival}</span></p> 
                                <p id="time-train-${i}">${trip.hour}:${trip.minute}</p>
                                <p id="price-train-${i}">${trip.price}€</p>
                                <button id="${i}" class="purchase-train" type="button">Purchase</button>
                            </div>`;
              i++;
            }
    }
    });
