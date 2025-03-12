fetch("http://localhost:3000/chariots")
    .then((response) => response.json())
    .then((data) => {
        console.log("data", data.data);
        if (data) {
            document.querySelector("#placeholder").style.display = "none";
            document.querySelector(".carts").style.display = "flex";
            document.querySelector("#contain-down").style.display = "flex";
            
            let i = 0;
            for (let trip of data.data) {
              document.querySelector(
                ".carts"
              ).innerHTML += `<div class="cart-row">
                                <p> <span id="departure-train-${i}">${trip.departure}</span> > <span id="arrival-train-${i}">${trip.arrival}</span></p> 
                                <p id="time-train-${i}">${trip.hour}:${trip.minute}</p>
                                <p id="price-train-${i}">${trip.price}€</p>
                                <button id="${i}" class="delete" type="button">X</button>
                             </div>`;
              i++;
            }
    }
    if (data.data.length === 0) {
      document.querySelector("#placeholder").style.display = "flex";
      document.querySelector(".carts").style.display = "none";
      document.querySelector("#contain-down").style.display = "none";
    }
});

