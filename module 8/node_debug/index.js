var axios=require('axios');
var URL="https://restcountries.com/v3.11/all"
axios.get().then(function (response){
    let CountryList=response.data;
    let StatusCode=response.status;

    console.log(CountryList);
    console.log(StatusCode);
}).catch(function (error){

})