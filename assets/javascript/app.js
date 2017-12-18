var movieArray = [];
var data = [];
var apikey = "m8zfezvnzgt2uda46zuqe9e7";
var baseUrl = "http://data.tmsapi.com/v1.1";
var showtimesUrl = baseUrl + '/movies/showings';
var zipCode = "23222";
var d = new Date();
var today = d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate();
var randomRest;
var randomMov;
var clicks = 0;
var dinnerButton = false;
var activityButton = false;
var bothButton = false;
var degree = 1800;
var restArray = []; 
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


function randomRestaurant() {
  		randomRest = restArray[Math.floor(Math.random() * 19)];
  	}
function display() {
	$("#snark").text("Like it or not, you are going to ...")
	if (dinnerButton == true) {
		$("#rest-txt").text("Go eat at " + randomRest);
		console.log(dinnerButton);
		dinnerButton = false;
	} 
	if (activityButton == true) {
		$("#rest-txt").text("Watch " + randomMov);
		activityButton = false;
	}
	if (bothButton == true) {
		$("#rest-txt").text("Watch " + randomMov + " and eat at " + randomRest);
		bothButton = false;
	}
};
function randomMovie() {
	//randomMov = "Red Dawn";
	randomMov = movieArray[Math.floor(Math.random() * movieArray.length)]; //////////////////////////////////data.length
	console.log(movieArray)
}	
function timer() {
			setTimeout(display, 6000)
		}
function spin () {
		timer();
		$("#rest-txt").text("");
		
		//add 1 every click
		clicks ++;
		
		/*multiply the degree by number of clicks
	  generate random number between 1 - 360, 
    then add to the new degree*/
		var newDegree = degree*clicks;
		var extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
		totalDegree = newDegree+extraDegree;
		
		$('#wheel .sec').each(function(){
			var t = $(this);
			var noY = 0;
			
			var c = 0;
			var n = 700;	
			var interval = setInterval(function () {
				c++;				
				if (c === n) { 
					clearInterval(interval);				
				}	
					
				var aoY = t.offset().top;
				$("#txt").html(aoY);
				//console.log(aoY);
				
				/*23.7 is the minumum offset number that 
				each section can get, in a 30 angle degree.
				So, if the offset reaches 23.7, then we know
				that it has a 30 degree angle and therefore, 
				exactly aligned with the spin btn*/
				if(aoY < 23.89){
					//console.log('<<<<<<<<');
					$('#spin').addClass('spin');
					setTimeout(function () { 
						$('#spin').removeClass('spin');
					}, 100);	
				}
			}, 10);
			
			$('#inner-wheel').css({
				'transform' : 'rotate(' + totalDegree + 'deg)'			
			});
		 
			noY = t.offset().top;
			
		});
	}


$.ajax(settings).done(function (response) {
  	for (var i = 0; i < 19; i++) {
    	restArray.push(response.restaurants[i].restaurant.name);
  		} 
	 });       

$.ajax({
    url: showtimesUrl,
    data: { startDate: today,
    zip: zipCode,
    jsonp: "dataHandler",
    api_key: apikey
    },          
    dataType: "jsonp",
    });
         //});
function dataHandler(data) {
    for (var j = 0; j < data.length; j++) {
        movieArray.push(data[j].title);
        	}
        }
   
        //Here is the random movie pulled from the Movie Array 
    //randomMov = movieArray[Math.floor(Math.random() * data.length)];
	//randomMovie()
$(document).ready(function() {
//randomMov = "Red Dawn";
    $(document).on('click', '#activity', function(spin) {
    	activityButton = true;//$("#rest-txt").text(randomMov);
  		console.log(randomMov)
  		randomMovie();
		});
	$(document).on('click', '#both', function(spin) {
		bothButton = true;
		randomRestaurant ();
		randomMovie();//$("#rest-txt").text("Watch " + randomMov + " and eat at " + randomRest);
		});
	$('#spin').click(function(){
		spin();
		});
	$(document).on('click', '#dinner', function(spin) {
	 	dinnerButton = true;
	 	randomRestaurant ();//$("#rest-txt").text(randomRest);
	 	});
});


