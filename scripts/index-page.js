const commentssection = document.querySelector(".comments");




const reviewcontainer = document.createElement('div');
reviewcontainer.classList.add("comments__bottom");
commentssection.append(reviewcontainer);


function displayReviewDetails(userComment) {

   //const reviewcontainer1 = document.querySelector("comments__bottom");

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



const getComments = async () =>{

   try {

   const userData = await BandSiteApiInstance.getData();

 const reviewData = userData.sort(function(a, b) {
       return b.timestamp - a.timestamp;
    })

    reviewData.forEach(userComment => {


  displayReviewDetails(userComment);


   });
   }

   catch (error){

   }

}
getComments();


















// let horizonalline1 = document.createElement("hr");
// horizonalline1.classList.add("review__line-bottom");
// commentssection.appendChild(horizonalline1);

const postComments = async ({fullName,reviewText}) =>{

   try{

    const post1Data = await BandSiteApiInstance.postData(fullName,reviewText);


      //Get Comments
      getComments();


   }
   catch(error) {

   }




  }








const reviewFormEl = document.forms.reviewform;
const btnEl = document.querySelector(".comments__button")

const textBox = document.querySelector(".comments__name-textBox");
const messageArea = document.querySelector("comments__textarea");





 reviewFormEl.addEventListener ("submit", (event) => {


   event.preventDefault();


    const fullNameEl = event.target.fullName.value;
    const reviewTextEl = event.target.reviewText.value;





    postComments({fullName:fullNameEl,reviewText:reviewTextEl});

    event.target.fullName.value = "";
    event.target.reviewText.value = "";


    clearComment()







 });

 const fullReviePage = document.querySelector('.comments__bottom')


 function clearComment(){
   while (fullReviePage.firstChild) {
      fullReviePage.removeChild(fullReviePage.firstChild);
  }

 }
