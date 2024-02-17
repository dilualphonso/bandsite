//const commentssection = document.querySelector(".comments");



class BandSiteApi {
    constructor (apiKey){
        this.apiKey = apiKey;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";

    }

 async getData () {



    const response = await axios.get(`${this.baseUrl}comments?api_key=${this.apiKey}`);
    console.log(response);
    //}

 return response.data;


    }



   async postData (fullName, reviewText){

        const postingData = await axios.post(`${this.baseUrl}comments?api_key=${this.apiKey}`,
     {
        name: fullName,
        comment: reviewText
    });




}


async getShowData () {



   const showDetails = await axios.get(`${this.baseUrl}showdates?api_key=${this.apiKey}`);
return showDetails.data;
   //}

//return re.data;


   }


}

const BandSiteApiInstance = new BandSiteApi('e0eea5f0-0f8c-4b54-9fc4-ff50843766d4');



// function displayReviewDetails(userComment) {

//    const reviewcontainer1 = document.querySelector("comments__bottom");

//    const review = document.createElement("figure");
//    review.classList.add("review");
//    reviewcontainer.appendChild(review);

//    let horizonalline = document.createElement("hr");
//    horizonalline.classList.add("review__line");
//    review.appendChild(horizonalline);

//    const reviewWrapper = document.createElement('div');
//    reviewWrapper.classList.add("review__wrapper")
//    review.appendChild(reviewWrapper);


//    const reviewAvatar = document.createElement('div');
//    reviewAvatar.classList.add("review__Avatar");
//    reviewAvatar.src = "";

//    reviewWrapper.appendChild(reviewAvatar);

//    const reviewRightContainer = document.createElement('div');
//    reviewRightContainer.classList.add("review__right-container")
//    reviewWrapper.appendChild(reviewRightContainer);

//    const reviewtextWrapper = document.createElement('div');
//    reviewtextWrapper.classList.add("review__text-container")
//    reviewRightContainer.appendChild(reviewtextWrapper);

//    const reviewname = document.createElement('h4');
//    reviewname.classList.add("review__name");
//    reviewname.innerText = userComment.name;

//    reviewtextWrapper.appendChild(reviewname);

//    const reviewDate = document.createElement("time");
//    reviewDate.classList.add("review__date");

//     let milliseconds = userComment.timestamp;
//     //console.log (milliseconds);
//     let ReviewDate = new Date(milliseconds);
//    // console.log("Milliseconds = " + date);
//     const currentDayOfMonth = ReviewDate.getDate();
//     const currentMonth = ReviewDate.getMonth();
//     const currentYear = ReviewDate.getFullYear();

//     const newReviewDate = currentDayOfMonth + "/" + (currentMonth + 1) + "/" + currentYear;





// reviewDate.innerText = newReviewDate;
//    reviewtextWrapper.appendChild(reviewDate);

//    const reviewMessageContainer = document.createElement('div');
//    reviewMessageContainer.classList.add("review__comment-container")
//    reviewRightContainer.appendChild(reviewMessageContainer);


//    const reviewmessage = document.createElement('p');
//    reviewmessage.classList.add("review__sentence")
//    reviewmessage.innerText = userComment.comment;
//    reviewMessageContainer.appendChild(reviewmessage);


// }

// // let horizonalline1 = document.createElement("hr");
// // horizonalline1.classList.add("review__line-bottom");
// // commentssection.appendChild(horizonalline1);






// const postComments = async ({fullName,reviewText}) =>{

//     const postData = await BandSiteApiInstance.postData(fullName,reviewText);

//     getComments();


//   }


// const reviewFormEl = document.forms.reviewform;
// const btnEl = document.querySelector(".comments__button")



//  reviewFormEl.addEventListener ("submit", (event) => {

//     event.preventDefault();

//     const fullNameEl = event.target.fullName.value;
//     const reviewTextEl = event.target.reviewText.value;

//     postComments({fullName:fullNameEl,reviewText:reviewTextEl});









//  });



//  ShowDate
























