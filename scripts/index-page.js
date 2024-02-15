const commentssection = document.querySelector(".comments");




const reviewcontainer = document.createElement('div');
reviewcontainer.classList.add("comments__bottom");
commentssection.append(reviewcontainer);



const getComments = async () =>{

   const userData = await BandSiteApiInstance.getData();
   console.log(userData);

   userData.forEach(userComment => {


  displayReviewDetails(userComment);


   });




}

getComments();



const timeConverter = async (milisecond) =>{

   const userData = await BandSiteApiInstance.getData();
   console.log(userData);

   userData.forEach(user => {

      milisecond = user.date;




   });




}












function displayReviewDetails(userComment) {

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
   reviewname.innerText = userComment.name;

   reviewtextWrapper.appendChild(reviewname);

   const reviewDate = document.createElement("time");
   reviewDate.classList.add("review__date");

    let milliseconds = userComment.timestamp;
    //console.log (milliseconds);
    let ReviewDate = new Date(milliseconds);
   // console.log("Milliseconds = " + date);
    const currentDayOfMonth = ReviewDate.getDate();
    const currentMonth = ReviewDate.getMonth();
    const currentYear = ReviewDate.getFullYear();

    const newReviewDate = currentDayOfMonth + "/" + (currentMonth + 1) + "/" + currentYear;





reviewDate.innerText = newReviewDate;
   reviewtextWrapper.appendChild(reviewDate);

   const reviewMessageContainer = document.createElement('div');
   reviewMessageContainer.classList.add("review__comment-container")
   reviewRightContainer.appendChild(reviewMessageContainer);


   const reviewmessage = document.createElement('p');
   reviewmessage.classList.add("review__sentence")
   reviewmessage.innerText = userComment.comment;
   reviewMessageContainer.appendChild(reviewmessage);


}

// let horizonalline1 = document.createElement("hr");
// horizonalline1.classList.add("review__line-bottom");
// commentssection.appendChild(horizonalline1);






const postComments = async ({fullName,reviewText}) =>{

    const postData = await BandSiteApiInstance.postData(fullName,reviewText);

    getComments();


  }


const reviewFormEl = document.forms.reviewform;
const btnEl = document.querySelector(".comments__button")



 reviewFormEl.addEventListener ("submit", (event) => {

    event.preventDefault();

    const fullNameEl = event.target.fullName.value;
    const reviewTextEl = event.target.reviewText.value;

    postComments({fullName:fullNameEl,reviewText:reviewTextEl});

    let nameField = document.getElementById("name");
    let commentArea = document.getElementById("message");
    nameField.value = "";
    commentArea.value = "";










 });
