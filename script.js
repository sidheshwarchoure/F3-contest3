function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  
  function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
  
    localStorage.setItem("lat", latitude);
    localStorage.setItem("long", longitude);
  
    const mapDiv = document.getElementById("map");
    mapDiv.innerHTML = `<iframe
      width="600"
      height="450"
      frameborder="0" style="border:0"
      src="https://www.google.com/search?q=map&oq=map&&q=${position.coords.latitude},${position.coords.longitude}"
      allowfullscreen
    ></iframe>`;
  }          
                           
  
  const getLocationBtn = document.getElementById("getLocationBtn");
  getLocationBtn.addEventListener("click", getLocation);
  
  const removeLocationBtn = document.getElementById("removeLocationBtn");
  removeLocationBtn.addEventListener("click", () => {
    localStorage.removeItem("lat");
    localStorage.removeItem("long");
    getLocationBtn.disabled = false;
    const mapDiv = document.getElementById("map");
    mapDiv.innerHTML = "";
  });
  
  if (localStorage.getItem("lat") && localStorage.getItem("long")) {
    getLocationBtn.disabled = true;
    const mapDiv = document.getElementById("map");
    const latitude = localStorage.getItem("lat");
    const longitude = localStorage.getItem("long");
    mapDiv.innerHTML = `<iframe
      width="600"
      height="450"
      frameborder="0" style="border:0"
      src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${latitude},${longitude}"
      allowfullscreen
    ></iframe>`;
  }