document.querySelector(".search").addEventListener("click", function () {
    console.log("click ok");
    if (document.querySelector(".departure").value === "" || document.querySelector(".arrival").value === "" ) {
        document.querySelector("#placeholder-train").computedStyleMap.display = "none";
    }
})