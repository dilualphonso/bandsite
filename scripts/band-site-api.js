class BandSiteApi {
   constructor(apiKey) {
       this.apiKey = apiKey;
       this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
   }
   async getData() {
       const response = await axios.get(`${this.baseUrl}comments?api_key=${this.apiKey}`);

       return response.data;
   }
   async postData(fullName, reviewText) {

       await axios.post(`${this.baseUrl}comments?api_key=${this.apiKey}`, {
           name: fullName,
           comment: reviewText
       });
   }

   async getShowData() {
       const showDetails = await axios.get(`${this.baseUrl}showdates?api_key=${this.apiKey}`);
       return showDetails.data;

   }
}
const BandSiteApiInstance = new BandSiteApi('e0eea5f0-0f8c-4b54-9fc4-ff50843766d4');