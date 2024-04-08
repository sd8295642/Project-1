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
  <div class=" class="w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">${trip.n}</h2>
    <p class="text-center whitespace-normal p-4">Destination: ${trip.t}</p>
    <p class="text-center break-normal pb-4">Date Range: ${trip.sD} to ${trip.eD}</p>
    <div class="m-3 inline-flex w-full justify-center rounded-md bg-white p-3 py-2 text-sm font-semibold text-gray-900 
    shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
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