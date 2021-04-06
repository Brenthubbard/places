// console.log = "log"
// function Contact(firstName, lastName, phoneNumber) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.phoneNumber = phoneNumber;
// }

// Contact.prototype.fullName = function () {
//   return this.firstName + " " + this.lastName;
// }
// ƒ() {
//   return this.firstName + " " + this.lastName;
// }
// let testContact = new Contact("Ada", "Lovelace", "503-555-1111");
// undefined


// Places ?

//   destination
// location
// landmarks
// time of year
// notes
function place(location, landmarks, time, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.time = time;
  this.notes = notes;
}
const Alaska = new place("Anchorage, Alaska",["Whittier", "Denali National Park", "Homer"], "Summer", "The summer is definitely the best time to go. In the middle of the summer the sun never sets");

const Maui = new place("Maui, Hawaii", ["Kaanapali Beach", "The road to Hana", "Haleakala"], "Decemeber", ["It is about 80 degrees everyday", "Watch out for sharks!!"]);

const Belize = new place("Belize", ["Sleeping giant mountain", "Flea markets"], "October", "The people are very friendly and the weather was humid but beautiful");

const France = new place(["Paris", "Lyon"], ["Eiffel Tower", "Parc de Princes", "Stade de Lyon"], "June-July, 2019", "Watched the USWNT win the 2019 Women's World Cup");


const Washington = new place("Washington, D.C.", ["National Mall", "White House", "United States Capitol"], "August", "It is incredibly humid during the Summer. Do not go then if you can avoid it.");

const NewYork = new place("NewYork, NewYork", ["Wall Street", "Twin Tower Memorial", "Statue of Liberty"], "Spring", "The all inclusive tour for $60 dollars was the best deal. It includes unlimited bus rides a boat tour and a few other items.");

// UI Logic
$(document).ready(function(){
  $("#akloc").click(function (event) {
    $("#ak-loc").show(Alaska.location);
    $("#ak-loc").text(Alaska.location); // (`<li>${Alaska.location}</li>` )
    event.preventDefault();
  })
  $("#akland").click(function(event) {
    $("#ak-land").show(Alaska.landmarks);
    $("#ak-land").text(Alaska.landmarks);
    event.preventDefault();
  })
  $("#aktime").click(function(event) {
    $("#ak-time").show(Alaska.time);
    $("#ak-time").text(Alaska.time);
    event.preventDefault();
  })
  $("#aknotes").click(function(event) {
    $("#ak-notes").show(Alaska.notes);
    $("#ak-notes").text(Alaska.notes);
    event.preventDefault();
  })
});