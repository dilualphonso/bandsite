const commentssection = document.querySelector(".comments");

const defaultComments = [{
      name: "Victor Pinto",
      date: "11/02/2023",
      review: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."

   },

   {
      name: "Christina Cabrera",
      date: "10/28/2023",
      review: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day"
   },

   {

      name: "Isaac Tadesse",
      date: "10/20/2023",
      review: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
   }

]


const reviewcontainer = document.createElement('div');
reviewcontainer.classList.add("comments__bottom");
commentssection.append(reviewcontainer);


function showAllReviews(defaultComments) {

   reviewcontainer.innerHTML = "";

   for (let i = 0; i < defaultComments.length; i++) {
      const defaultComment = defaultComments[i];


      displayReviewDetails(defaultComment);

   }

}

showAllReviews(defaultComments);


function displayReviewDetails(defaultcomment) {

   const reviewcontainer1 = document.querySelector("comments__bottom");

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


const reviewFormEl = document.forms.reviewform;
const btnEl = document.querySelector(".comments__button")


reviewFormEl.addEventListener("submit", (event) => {

   event.preventDefault();


   const fullNameEl = event.target.fullName.value;
   const reviewTextEl = event.target.reviewText.value;
   const ReviewDate = new Date();


   const currentDayOfMonth = ReviewDate.getDate();
   const currentMonth = ReviewDate.getMonth();
   const currentYear = ReviewDate.getFullYear();

   const newReviewDate = currentDayOfMonth + "/" + (currentMonth + 1) + "/" + currentYear;


   const writtenReview = {
      name: fullNameEl,
      date: newReviewDate,
      review: reviewTextEl

   }

   defaultComments.unshift(writtenReview);


   showAllReviews(defaultComments);
   let nameField = document.getElementById("name");
   let commentArea = document.getElementById("message");
   nameField.value = "";
   commentArea.value = "";


});