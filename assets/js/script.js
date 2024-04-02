
const tripName = document.getElementById('#trip-name')
const tripLocation = document.getElementById('#trip-location')
const tripStartDate = document.getElementById('#trip-start')
const tripEndDate = document.getElementById('#trip-end')
const saveBtn = document.getElementById('btn')

function readSavedTripsFromStorage() {
    let savedTripArray = JSON.parse(localStorage.getItem('trip'));
  
    if (!savedTripArray) {
      savedTripArray = [];
    }
    console.log(savedTripArray)
  
    return savedTripArray;
  }

function createTripInput(event) {
    event.preventDefault();
  
    const savedTrip = document.querySelector('#trip').value;
  
    if (!savedTrip) {
      console.error('You need a search input value!');
      return;
    };

    savedTripArray.push(savedTrip); 

    localStorage.setItem("trips", JSON.stringify(savedTripArray));
    
    console.log('savedTripArray')
  };

function saveTripArrayToStorage(savedTripArray) {
    localStorage.setItem('trips', JSON.stringify(savedTripArray));
  }

function handleSaveTrip(event) {
    event.preventDefault();
  
    
    const name = tripName.value.trim();
    const location = tripLocation.value;
    const startDate = tripStartDate.value;
  
    const newTrip = {
      n: name,
      t: location,
      sD: startDate,
    };

    const savedTripArray = readProjectsFromStorage();
    savedTripArray.push(newTrip);
  
    saveTripArrayToStorage(savedTripArray);

    //printProjectData();
  
    // // ? Clear the form inputs
    // tripName.value('');
    // tripLocation = '';
    // startDate.value('');
  }

//event listeners go at the bottom
saveBtn.addEventListener('submit', createTripInput);

