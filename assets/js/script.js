// const tripName = document.getElementById('trip-name')
// const tripLocation = document.getElementById('trip-location')
// const tripStartDate = document.getElementById('start-date')
// const tripEndDate = document.getElementById('finish-date')
// const saveBtn = document.getElementById('close-modal')

// function getTripArray() {
//     let savedTripArray = JSON.parse(localStorage.getItem('savedTripArray'));
  
//     if (!savedTripArray) {
//       savedTripArray = [];
//     }
  
//     return savedTripArray;
//   }


// // function createTripInput(event) {
// //     event.preventDefault();
    
// //     let savedTripArray = getTripArray();

// //     const savedTrip = document.querySelector('#trip-name').value;
  
// //     if (!savedTrip) {
// //       console.error('You need a search input value!');
// //       return;
// //     };

// //     savedTripArray.push(savedTrip); 

// //     localStorage.setItem("trips", JSON.stringify(savedTripArray));
// //   };

// // function saveTripArrayToStorage(savedTripArray) {
// //     localStorage.setItem('savedTripArray', JSON.stringify(savedTripArray));
// //   }

// function saveTripArrayToStorage(newTrip) {
//   let savedTripArray = getTripArray();
//   savedTripArray.push(newTrip);
//   localStorage.setItem('savedTripArray', JSON.stringify(savedTripArray));
// }

// function handleSaveTrip(event) {
//     event.preventDefault();
    
//     const name = tripName.value.trim();
//     const location = tripLocation.value;
//     const startDate = tripStartDate.value;
//     const endDate = tripEndDate.value;
  
//     const newTrip = {
//       n: name,
//       t: location,
//       sD: startDate,
//       eD: endDate,
//     };

//     let savedTripArray = getTripArray();
//     savedTripArray.push(newTrip);
  
//     saveTripArrayToStorage(savedTripArray);

//     // // ? Clear the form inputs
//     // tripName.value('');
//     // tripLocation = '';
//     // startDate.value('');
//   }

// //event listeners go at the bottom
// saveBtn.addEventListener('click', handleSaveTrip);

