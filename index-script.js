document.querySelector(".search").addEventListener("click", function () {
  console.log("click");

  const departure = document.querySelector(".departure").value;

  const arrival = document.querySelector(".arrival").value;

  const date = document.querySelector(".calendar").value;

  console.log(date, departure, arrival);

  fetch("http://localhost:3000/trajets", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ departure, arrival, date }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
});
