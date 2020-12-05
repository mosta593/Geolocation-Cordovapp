class UI {
  constructor() {
    this.uiContainer = document.getElementById("content");
    this.city;
    this.defaultCity = "Quito";
  }

  populateUI(data) {
 

    //add them to inner HTML

    this.uiContainer.innerHTML = `
        
        <div class="card mx-auto mt-5" style="width: 18rem;">
            <div class="card-body justify-content-center">
                <h5 class="card-title">${data.name}</h5>
          
                <h6 class="card-subtitle mb-2 text-muted">TEMPERATURA | ${(data.main.temp-273.15).toFixed(2)} C°. |</h6>
                <h6 class="card-subtitle mb-2 text-muted">HUMEDAD | ${data.main.humidity} %. |</h6>
                <h6 class="card-subtitle mb-2 text-muted">VEL.VIENTO  | ${data.wind.speed} m/s. |</h6>
            </div>
        </div>
        
        
        `;
  }

  clearUI() {
    uiContainer.innerHTML = "";
  }

  saveToLS(data) {
    localStorage.setItem("city", JSON.stringify(data));
  }

  getFromLS() {
    if (localStorage.getItem("city" == null)) {
      return this.defaultCity;
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }

    return this.city;
  }

  clearLS() {
    localStorage.clear();
  }
}
