const shows = [{
    date: "Mon Sept 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco, CA"

 },

 {
    date: "Tue Sept 17 2024",
    venue: "Pier 3 East",
    location: "San Francisco,CA"
 },

 {

    date: "Sat Oct 12 2024 ",
    venue: "View Lounge",
    location: "San Francisco,CA"
 },

 {

    date: "Sat Nov 16 2024",
    venue: "Hyatt Agency",
    location: "San Francisco,CA"
 },

 {

    date: "Fri Nov 29 2024",
    venue: "Moscow Center",
    location: "San Francisco,CA"

 },

 {
    date: "Wed Dec 18 2024 ",
    venue: "Press Club",
    location: "San Francisco,CA"
 }
]

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


for (let i = 0; i < shows.length; i++) {
 const show = shows[i];

 displayShowDetails(show);
}


function displayShowDetails(show) {

 const showsection = document.querySelector(".shows");


 const showEl = document.createElement("article");
 showEl.classList.add("shows__show");
 deskTitleEl.append(showEl);

 const showContainerEl = document.createElement('div');
 showContainerEl.classList.add("shows__container");
 showEl.append(showContainerEl);

 const showlistEl = document.createElement("ul");
 showlistEl.classList.add("shows__lists");
 showContainerEl.append(showlistEl);


 const TabletEl = document.createElement('div');
 TabletEl.classList.add("shows__wrapper")
 showlistEl.append(TabletEl);


 const dateTitleEl = document.createElement('div');
 dateTitleEl.innerText = "Date";
 dateTitleEl.classList.add("shows__subtitle")
 TabletEl.append(dateTitleEl);


 const showDateEl = document.createElement("li");
 showDateEl.classList.add("shows__date");
 showDateEl.innerText = show.date;

 TabletEl.append(showDateEl);


 const venueTitleEl = document.createElement('div');
 venueTitleEl.innerText = "Venue";
 venueTitleEl.classList.add("shows__subtitle")
 TabletEl.append(venueTitleEl);


 const showVenueEl = document.createElement("li");
 showVenueEl.classList.add("shows__venue");
 showVenueEl.innerText = show.venue;
 TabletEl.append(showVenueEl);

 const locationTitleEl = document.createElement('div');
 locationTitleEl.innerText = "Location";
 locationTitleEl.classList.add("shows__subtitle")
 TabletEl.append(locationTitleEl);

 const showLocationEl = document.createElement("li");
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