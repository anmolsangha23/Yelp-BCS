var locationInput = '2366 Main Mall, Vancouver, BC, Canada';
var termInput = 'Sushi';
var radiusInput = 10000;  // in metres (1000/2000/5000/10000)

var name;
var image;
var rating;
var location = "";
var phone_number;
var price;

var location_array;

const yelp = require('yelp-fusion');
const apiKey = '6xRLOT2hzxA37NUpkb0rsyv92fqMhNv8O_c-2_PC04Ryt--xS5xQUQru2A8orO8EojnhSO5mjsUyFUvGFr0MSosv6b4FDMItXK60QMwRmqb7U4yMZ4M_Et_NOTU_YnYx';
const clientId = 'k0nxX4jW8f0f45dVAD5_tQ';
const client = yelp.client(apiKey);

const searchRequest = {
    term: termInput,
    categories: "restaurants, All",
    location: locationInput,
    radius: radiusInput, 
    open_now: true,
  };

var firstResult;
var prettyJson;



client.search(searchRequest).then(response => {
  var count = Object.keys(response.jsonBody.businesses).length;
  var randomResult = Math.floor(Math.random() * count);
  firstResult = response.jsonBody.businesses[randomResult];
  prettyJson = JSON.stringify(firstResult, null, 4);
  // console.log(prettyJson);
}).catch(e => {
  console.log(e);
}).then(next => {
  name = firstResult.name;
  image = firstResult.image_url;
  rating = firstResult.rating;
  location_array = firstResult.location.display_address;
  phone_number = firstResult.display_phone;
  price = firstResult.price;
  console.log(name);
  console.log(image);
  console.log(rating);
  for (let i = 0; i < (location_array.length - 1); i++) {
    location += location_array[i];
  }
  console.log(location);
  console.log(phone_number);
  console.log(price);
});
