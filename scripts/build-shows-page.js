
//console.log("hello world");
const ticketPlaceholderEl = document.querySelector("#ticketsPlaceholder")


let body = document.body;

const showcontainer = document.createElement('main');
//showtitle.innerText= "Shows";
body.append(showcontainer);

const showsection = document.createElement('section');
//showtitle.innerText= "Shows";

showsection.classList.add("shows");
showcontainer.append(showsection);


const showtitle = document.createElement('h2');
showtitle.innerText = "Shows";
showtitle.classList.add("shows__title");
showsection.append(showtitle);


const divcontainer = document.createElement('div');
divcontainer.classList.add('show__container');




const shows = [{
    date: "Mon Sept 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco, CA"

},

{
    date: "Tue Sept 17 2024",
    venue: "Pier 3 East",
    location: "San Francisco, CA"
},

{

    date: "Sat Oct 12 2024 ",
    venue: "View Lounge ",
    location: "San Francisco, CA"
},

{

    date: "Sat Nov 16 2024",
    venue: "Hyatt Agency",
    location: "San Francisco, CA"
},

{

    date: "Fri Nov 29 2024",
    venue: "Moscow Center ",
    location: "San Francisco, CA"

},

{
    date: "Wed Dec 18 2024 ",
    venue: "Press Club ",
    location: "San Francisco, CA"
}]






for (let i = 0; i < shows.length; i++) {
    const show = shows[i];

    displayShowDetails(show);
}



function displayShowDetails(show) {

    const show1 = document.createElement("article");
    show1.classList.add("show");
    showsection.append(show1);

    const show1list = document.createElement("ul");
    show1list.classList.add("show__lists");
    show1.append(show1list);



  const datetitle = document.createElement('div');
  datetitle.innerText = "Date";
 datetitle.classList.add("show__subtitle")
show1list.append(datetitle);

const showDateS1 = document.createElement("li");
   showDateS1.classList.add("show__date");
   showDateS1.innerText = show.date;
    //showDateS1.appendChild(document.createTextNode("Four"));
    show1list.append(showDateS1);

    // showDateS1.classList.add("show__date");
    // showDateS1.innerText = "Date: " + show.date;
    // //showDateS1.appendChild(document.createTextNode("Four"));
    // show1list.append(showDateS1);

    // const showvenuetitle = document.createElement('h4');
    // showtitle.innerText = "Venue";
    // showDateS1.append(showvenuetitle);

    const venuetitle = document.createElement('div');
    venuetitle.innerText = "Venue";
    venuetitle.classList.add("show__subtitle")
    show1list.append(venuetitle);


    const showVenueS1 = document.createElement("li");
    showVenueS1.classList.add("show__venue");
    showVenueS1.innerText = show.venue;
    show1list.append(showVenueS1);

    const locationtitle = document.createElement('div');
    locationtitle.innerText = "Location";
    locationtitle.classList.add("show__subtitle")
    show1list.append(locationtitle);

    const showlocationS1 = document.createElement("li");
    showlocationS1.classList.add("show__location");
    showlocationS1.innerText =show.location;
    show1list.append(showlocationS1);


     //var container = document.getElementById('buttonContainer');
     var btn = document.createElement('button');
     btn.textContent = 'Buy Tickets';
     btn.classList.add("show__button");
     show1.append(btn)

    let divider = document.createElement("hr"); //this will create a new element

     /* Use setAttribute to define the property and values you'd like give the element */

     //divider.setAttribute("width", "100px");

    /* Then you'll need to add the element to the page */
    divider.classList.add("show__divider");

    show1.append(divider);



//     const buyticketbtn = document.createElement("button");
//     buyticketbtn.classList.add("show__button")
//     buyticketbtn.append(show1);


    // show.appendChild(showDateS1);
    // show.appendChild(showVenueS1);
    // show.appendChild(showlocationS1);
    // show.appendChild(btn);

//document.querySelector(".shows").appendChild(show1);

//     if (i === shows.length) {
//         return;
//     }


 }


