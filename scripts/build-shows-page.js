


const getShows = async () =>{

   const userData = await BandSiteApiInstance.getShowData();
   console.log(userData);

    userData.forEach(show => {


       displayShowDetails(show);

   });




}

getShows();








const showsEl = document.querySelector(".shows");

const deskTitleEl = document.createElement('div');
deskTitleEl.classList.add("shows__main");
showsEl.append(deskTitleEl);


const showHeaderEl = document.createElement('div');
showHeaderEl.classList.add("shows__header");
deskTitleEl.append(showHeaderEl);


const tabDateTitleEl = document.createElement('h4');
tabDateTitleEl.innerText = "Date";
tabDateTitleEl.classList.add("shows__heading-date")
showHeaderEl.append(tabDateTitleEl);


const tabVenueTitleEl = document.createElement('h4');
tabVenueTitleEl.innerText = "Venue";
tabVenueTitleEl.classList.add("shows__heading-venue")
showHeaderEl.append(tabVenueTitleEl);

const tabLocationTitleEl = document.createElement('h4');
tabLocationTitleEl.innerText = "Location";
tabLocationTitleEl.classList.add("shows__heading-location")
showHeaderEl.append(tabLocationTitleEl);

const tabExtraEl = document.createElement('p');
tabExtraEl.classList.add("shows__heading-element")
showHeaderEl.append(tabExtraEl);





function displayShowDetails(show) {

 const showsection = document.querySelector(".shows");


 const showEl = document.createElement("article");
 showEl.classList.add("shows__show");
 deskTitleEl.append(showEl);

 const showContainerEl = document.createElement('div');
 showContainerEl.classList.add("shows__container");
 showEl.append(showContainerEl);

//  const showlistEl = document.createElement("ul");
//  showlistEl.classList.add("shows__lists");
//  showContainerEl.append(showlistEl);


 const TabletEl = document.createElement('div');
 TabletEl.classList.add("shows__wrapper")
 showEl.append(TabletEl);


 const dateTitleEl = document.createElement('div');
 dateTitleEl.innerText = "Date";
 dateTitleEl.classList.add("shows__subtitle")
 TabletEl.append(dateTitleEl);


 const showDateEl = document.createElement("p");
 showDateEl.classList.add("shows__date");

 let milliseconds = show.date;
 //console.log (milliseconds);
 let showDate = new Date(milliseconds);
// console.log("Milliseconds = " + date);
 const currentDayOfMonth = showDate.getDate();
 const currentMonth = showDate.getMonth();
 const currentYear = showDate.getFullYear();

 const newShowDate = currentDayOfMonth + "/" + (currentMonth + 1) + "/" + currentYear;

 showDateEl.innerText = newShowDate;

 TabletEl.append(showDateEl);


 const venueTitleEl = document.createElement('div');
 venueTitleEl.innerText = "Venue";
 venueTitleEl.classList.add("shows__subtitle")
 TabletEl.append(venueTitleEl);


 const showVenueEl = document.createElement("p");
 showVenueEl.classList.add("shows__venue");
 showVenueEl.innerText = show.place;
 TabletEl.append(showVenueEl);

 const locationTitleEl = document.createElement('div');
 locationTitleEl.innerText = "Location";
 locationTitleEl.classList.add("shows__subtitle")
 TabletEl.append(locationTitleEl);

 const showLocationEl = document.createElement("p");
 showLocationEl.classList.add("shows__location");
 showLocationEl.innerText = show.location;
 TabletEl.append(showLocationEl);


 var btnEl = document.createElement('button');
 btnEl.textContent = 'Buy Tickets';
 btnEl.classList.add("shows__button");
 TabletEl.append(btnEl);


 let divider = document.createElement("hr");

 divider.classList.add("shows__divider");

 showEl.append(divider);


 showEl.addEventListener('click', function (event) {

    event.preventDefault();
    if (document.querySelector(".shows__show--selected")) {

       document.querySelector(".shows__show--selected").classList.remove('shows__show--selected');

    }

    console.log(showEl);

    showEl.classList.add('shows__show--selected');

 });

}