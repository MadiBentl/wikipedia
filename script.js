$(document).ready(function(){
  $.ajax({
    url: "https://en.wikipedia.org/w/api.php",
    data: {
        format: "json",
        action: "query", //parse
        formatversion: 2,
        titles: "Ahmedabad",
        prop: "info"
        //prop:"text"//,
        //section:0,
    },
    dataType: 'jsonp',
    headers: {
        'Api-User-Agent': 'MyCoolTool/1.1 (http://example.com/MyCoolTool/; MyCoolTool@example.com) BasedOnSuperLib/1.4'
    },
    success: function (data) {
        console.log(data)
        console.log(data["query"]["pages"][0]["title"]);
  //      $("#article").html(data.parse.text["*"])

      //  		var markup = data.parse.text["*"];
		//var i = $('<div></div>').html(markup);

		// remove links as they will not work
		//i.find('a').each(function() { $(this).replaceWith($(this).html()); });

		// remove any references
	//	i.find('sup').remove();

		// remove cite error
//		i.find('.mw-ext-cite-error').remove();

	//	$("body").append($(i).find('p'));


    }
});

});
