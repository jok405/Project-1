
  
// Zomato API that pulls restaraunt information 
var queryURL = "https://developers.zomato.com/api/v2.1/cities?q=richmond";

var queryURLl = "0356c6221d55cd4bfb3231fee709ccec";

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://developers.zomato.com/api/v2.1/search?entity_id=1219&entity_type=city&q=restaurants&count=20",
  "method": "GET",
  "headers": {
    "user-key": "0356c6221d55cd4bfb3231fee709ccec",
  }
};
// array of our restaraunts
var restArray = [];
// ajax call gives us 20 local restaraunts
$.ajax(settings).done(function (response) {
  for (var i = 0; i < 19; i++) {
    console.log(response.restaurants[i].restaurant.name);
    // Pushes our 20 restaraunts into our restArray array 
    restArray.push(response.restaurants[i].restaurant.name);
  }

  console.log(restArray);
  // Randomizes through our array and pulls one option
  var randomRest = restArray[Math.floor(Math.random() * 19)];
 // here is our radom restaraunt, need to push to a card 
console.log(randomRest);
});


// Here is our movie API that pulls our movie infor based on zip code
 // construct the url with parameter values
         var apikey = "f2rwg4z4xzsj7vz3mhnfq9fn";
         var baseUrl = "http://data.tmsapi.com/v1.1";
         var showtimesUrl = baseUrl + '/movies/showings';
         var zipCode = "23222";
        var d = new Date();
         var today = d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate();
          
         $(document).ready(function() {
          
           // send off the query
           $.ajax({
            url: showtimesUrl,
            data: { startDate: today,
            zip: zipCode,
            jsonp: "dataHandler",
            api_key: apikey
            },          
            dataType: "jsonp",
           });
         });
          
         // callback to handle the results
         function dataHandler(data) {
          $(document.body).append('<p>Found ' + data.length + ' movies showing within 5 miles of ' + zipCode+':</p>');
          var movies = data.hits;
          $.each(data, function(index, movie) {
            var movieData = '<div class="tile">'
            movieData += movie.title;
            console.log(movie.title);
            if (movie.ratings) { movieData += ' (' + movie.ratings[0].code + ') </div>' };
            $(document.body).append(movieData);
          });
         }

$("#text").text("randomRest");

