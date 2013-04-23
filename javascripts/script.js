$(document).ready(function () {

    var url = 'http://api.meetup.com/2/events'
    var $eventData = $('#event-data');

    var request = $.ajax({
        url: url,
        type: 'GET',
        dataType : 'jsonp',
        data: {
            'group_id': '4659122',
            'status': 'upcoming',
            'order': 'time',
            'limited_events': "False",
            'desc': 'false',
            'offset': 0,
            'format': 'json',
            'page': 20,
            'fields': '',
            'sig_id': '8736384',
            'sig': '88fc991c5832f503c17b38705737be06e2562459'
        }
    });

    request.done(function (data) {
        $eventData.text(JSON.stringify(data));
    });

    request.fail(function () {
        $eventData.text("Fail: " + JSON.stringify(arguments));
    });

});
