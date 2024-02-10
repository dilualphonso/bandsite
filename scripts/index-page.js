const commentssection = document.querySelector(".comments");

const defaultComments = [{
    name: "Victor Pinto",
    date: "11/02/2023",
    review: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."

},

{
    name: "dilusha Alponso",
    date: "11/02/2024",
    review: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
},

{

    name: "Asher Sam",
    date: "11/01/2024",
    review: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
}

]




const reviewcontainer = document.createElement('div');
reviewcontainer.classList.add("comment__bottom");
commentssection.append(reviewcontainer);


function showAllReviews(defaultComments){

    reviewcontainer.innerHTML = "";

for (let i = 0; i < defaultComments.length; i++) {
    const defaultComment = defaultComments[i];

    //console.log(defaultComment);

    displayReviewDetails(defaultComment);

}

}

showAllReviews(defaultComments);



//  defaultComments.forEach(defaultcomment => {

//      defaultcomment = defaultComments;
//     // console.log(defaultcomment);

//     displayShowDetails(defaultcomment);

//  });





function displayReviewDetails(defaultcomment) {

   const reviewcontainer1 = document.querySelector("comment__bottom");

    const review = document.createElement("figure");
    review.classList.add("review");
    reviewcontainer.appendChild(review);

 let horizonalline = document.createElement("hr");
    horizonalline.classList.add("review__line");
    review.appendChild(horizonalline);

    const reviewWrapper = document.createElement('div');
    reviewWrapper.classList.add("review__wrapper")
    review.appendChild(reviewWrapper);


    const reviewAvatar = document.createElement('div');
    reviewAvatar.classList.add("review__Avatar");
    reviewAvatar.src = "";
    //showDateS1.appendChild(document.createTextNode("Four"));
    reviewWrapper.appendChild(reviewAvatar);

    const reviewRightContainer = document.createElement('div');
    reviewRightContainer.classList.add("review__right-container")
    reviewWrapper.appendChild(reviewRightContainer);

    const reviewtextWrapper = document.createElement('div');
    reviewtextWrapper.classList.add("review__text-container")
    reviewRightContainer.appendChild(reviewtextWrapper);

const reviewname = document.createElement('h4');
reviewname.classList.add("review__name");
reviewname.innerText = defaultcomment.name;
    //showDateS1.appendChild(document.createTextNode("Four"));
    reviewtextWrapper.appendChild(reviewname);

    const reviewDate = document.createElement("time");
    reviewDate.classList.add("review__date");
    reviewDate.innerText = defaultcomment.date;
    reviewtextWrapper.appendChild(reviewDate);

    const reviewMessageContainer = document.createElement('div');
reviewMessageContainer.classList.add("review__comment-container")
reviewRightContainer.appendChild(reviewMessageContainer);



    const reviewmessage = document.createElement('p');
    reviewmessage.classList.add("review__sentence")
    reviewmessage.innerText = defaultcomment.review;
    reviewMessageContainer.appendChild(reviewmessage);






}

let horizonalline1 = document.createElement("hr");
horizonalline1.classList.add("review__line-bottom");
commentssection.appendChild(horizonalline1);


//const submitBtn=document.querySelector(".comments__button")
//console.log (submitBtn);



const reviewFormEl=document.forms.reviewform;
const btnEl = document.querySelector(".comments__button" )




//console.log(fullNameEl);


//console.log ({fullName, reviewText});


reviewFormEl.addEventListener("submit",(event)=>{

    event.preventDefault();
    //const {fullName, reviewText} = reviewFormEl.elements;

   // reviewFormEl.innerHTML= "";



     const fullNameEl = event.target.fullName.value ;
    const reviewTextEl = event.target.reviewText.value ;
const ReviewDate =  new Date();


const currentDayOfMonth = ReviewDate.getDate();
const currentMonth = ReviewDate.getMonth(); // Be careful! January is 0, not 1
const currentYear = ReviewDate.getFullYear();

const newReviewDate = currentDayOfMonth + "/" + (currentMonth + 1) + "/" + currentYear;
// "27-11-2020"




    const writtenReview = {
        name: fullNameEl,
        date: newReviewDate,
        review: reviewTextEl

    }

    defaultComments. unshift(writtenReview);


showAllReviews(defaultComments);
let nameField =document. getElementById("name");
   nameField.value= "";


});

