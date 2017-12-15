
var queryURL = "https://developers.zomato.com/api/v2.1/cities?q=richmond";

var queryURLl = "0356c6221d55cd4bfb3231fee709ccec";

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://developers.zomato.com/api/v2.1/search?entity_id=1219&entity_type=city&q=restaurants&count=10",
  "method": "GET",
  "headers": {
    "user-key": "0356c6221d55cd4bfb3231fee709ccec",
  }
};

$.ajax(settings).done(function (response) {
	for (var i = 0; i < 9; i++) {
		console.log(response.restaurants[i].restaurant.name);
	}
  console.log(response.restaurants[i].restaurant.name);
});

// var restaurantArray = [];
// var activityArray = ["Movie", "Concert", "Beer Tasting", "Bike Ride", "Hike"];
// var randomNum;

// function randomNum {
// 	randomNum = Math.floor(Math.random() * 4);
// }

// function fillRestaurant {
// 	for (var i = 0; i < apiArray.length; i++) {
// 		restaurantArray.push(restaurant.val());
// 	}
// }

// console.log(activityArray[randomNum]);
// console.log(restaurantArray[randomNum]);

// $(document).ready(function(){

// $(#wheelSpin).on("click", function(event)) {

// }

// }
