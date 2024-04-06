const tripName = document.getElementById('trip-name')
const tripLocation = document.getElementById('trip-location')
const tripStartDate = document.getElementById('start-date')
const tripEndDate = document.getElementById('finish-date')
const saveBtn = document.getElementById('close-modal')

function getTripArray() {
    let savedTripArray = JSON.parse(localStorage.getItem('savedTripArray'));

    if (!savedTripArray) {
      savedTripArray = [];
    }
  
    return savedTripArray;
  }

function handleSaveTrip(event) {
    event.preventDefault();
    
    const name = tripName.value.trim();
    const location = tripLocation.value;
    const startDate = tripStartDate.value;
    const endDate = tripEndDate.value;
  
    const newTrip = {
      n: name,
      t: location,
      sD: startDate,
      eD: endDate,
    };

    let savedTripArray = getTripArray();
    savedTripArray.push(newTrip);
    localStorage.setItem('savedTripArray', JSON.stringify(savedTripArray));

    displaySavedTripCards()
  
    tripName.value = '';
    tripLocation.value = '';
    tripStartDate.value = '';
    tripEndDate.value = '';
  }
function printTripCard(trip){
  const tripCard = `
  <div class="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="#" alt="#" /></figure>
  <div class="card-body">
    <h2 class="card-title">${trip.n}</h2>
    <p>Destination: ${trip.t}</p>
    <p>Date Range: ${trip.sD} to ${trip.eD}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Delete</button>
    </div>
  </div>
</div>
  `;
    htmlCard = document.getElementById('trip-cards')
    htmlCard.innerHTML += tripCard
}

function displaySavedTripCards () {
  var savedTripArray = getTripArray()
  console.log(savedTripArray)
  for (i = 0; i < savedTripArray.length; i++) {
    printTripCard(savedTripArray[i])
  }
}

//event listeners go at the bottom
saveBtn.addEventListener('click', handleSaveTrip);


document.getElementById("open-modal").addEventListener("click", function () {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
  });
  
  document.getElementById("close-modal").addEventListener("click", function () {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
  });
  
  document.getElementById("close-modal2").addEventListener("click", function () {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    displaySavedTripCards();
  });