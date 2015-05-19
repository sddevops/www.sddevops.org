//Meetup URL getting events 1 month back and 1 month forward
var meetup_url= "https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=sddevops&photo-host=public&time=-2m%2C2m&page=500&fields=&order=time&callback=?&status=upcoming%2Cpast&desc=desc&sig_id=183763164&sig=5dde3b8642c98e610dd6318ce66d55de754bc45b";
  
$.getJSON(meetup_url,
function (data) {
	//check and assign next and past meeting object, start with newest object and iterate through.
	
	var next_meeting; //object
	var last_meeting;
	for (var i=0; i<data.results.length; i++){
		if (data.results[i].status.indexOf("past") !=-1){	
		next_meeting = data.results[i-1];
		last_meeting = data.results[i];
		break;
		}
	}
	

	//Check if no description
	if (typeof next_meeting.description === "undefined"){
	next_meeting.description = "We are putting something special together for the next meeting. Check back soon for more details.";
	}

    /*
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
	$( "#next-meeting" ).append('<h3><a href="'+next_meeting.event_url+'">'+ next_meeting.name +'</a><br><medium class="meet-date">'
	+nextdateString+'</medium></h3><p>'+next_meeting.description+'</p>');
	
	$( "#last-meeting" ).append('<h3><a href="'+last_meeting.event_url+'">'+ last_meeting.name +'</a><br><medium class="meet-date">'
	+lastdateString+'</medium></h3><p>'+last_meeting.description+'</p>');
	});



//Update page for events

