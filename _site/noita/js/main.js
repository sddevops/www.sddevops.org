//Meetup URL getting events 1 month back and 1 month forward
console.log("main.js is running!");
var meetup_url= "https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=sddevops&photo-host=public&time=-1m%2C1m&page=20&fields=&order=time&callback=?&status=upcoming%2Cpast&desc=desc&sig_id=183763164&sig=b3f9397254be253a1056a5309028d2755a9a1bec";
  
$.getJSON(meetup_url,
function (data) {
	console.log(data);
	
	//check and assign next and past meeting object, start with newest object and iterate through.
	
	var next_meeting; //object
	var current_meeting;
	for (var i=0; i<data.results.length; i++){
		if (data.results[i].status.indexOf("past") !=-1){	
		next_meeting = data.results[i-1];
		last_meeting = data.results[i];
		break;
		}
	}
	
	/*
	//Check if no description
	if (typeof next_meeting.description === "undefined"){
	next_meeting.description = "We are putting something special together for the next meeting. Check back soon for more details.";
	}
	else {
	next_meeting.description = next_meeting.description.substring(0,400)+'...';
}

	if (typeof last_meeting.description === "undefined"){
	last_meeting.description = "We are putting something special together for the next meeting. Check back soon for more details.";
	}
	else {
	last_meeting.description = last_meeting.description.substring(0,400)+'...';
}
	
*/
	//Format date for last and next meeting
	nextdate = new Date((next_meeting.time)).toString();
	nextdateString = nextdate.toString();
	nextdateString = nextdateString.substring(0,10);
	lastdate = new Date((last_meeting.time)).toString();
	lastdateString = lastdate.toString();
	lastdateString = lastdateString.substring(0,10);
	
	
	//update next meeting info
	$( "#next-meeting" ).append('<h4><a href="'+next_meeting.event_url+'">'+ next_meeting.name +'</a><medium>'
	+nextdateString+'</medium></h4>');
	
	$( "#last-meeting" ).append('<h4><a href="'+last_meeting.event_url+'">'+ last_meeting.name +'</a><medium>'
	+lastdateString+'</medium></h4>');
	});



//Update page for events

