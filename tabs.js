$(document).ready(function(){
	$("div.container").append("<div class='header'></div>");
	console.log("Test");
	$("div.header").css({
		"width": "100%",
		"height": "30px",
		"border-bottom": "2px solid #80577F"//purple
	});

	$("div.header").append("<p id='banner'>Ritika Tamirisa</p>");
	$("#banner").css({
		"font-size":"200%",
		"color":"#80577F",//purple
		"font-family":"'Century Gothic', serif",
		"font-weight":"400",
		"margin-left":"5px",
		"position":"relative",
		"top":"-20%"
	});

	$("div.container").append("<div id='navbar'></div>");
	$("#navbar").css({
		"width": "100%",
		"height": "40px",
		"background-color": "rgba(0,0,0,.6)",
		"border-bottom": "3px solid #80577F",//gray
	});

	$("#navbar").append("<ul id='tabs'></ul>");
	$("#tabs").append("<li>Home</li>")
	$("#tabs").append("<li>About Me</li>")
	$("#tabs").append("<li>Resume</li>")
	$("#tabs").append("<li>Research</li>")

	$("li").css({
		"display":"inline",
	    "background-color": "rgba(85, 41, 115, 0.76)",
		"color": "white",
		"padding": "7px",
		"border-radius":"10px",
		"margin-left": "50px",
		"cursor":"pointer",
		"font-family":"Open Sans, sans-serif",
	});

	$("#tabs").css({
		"width": "90%",
		"display":"inline-block",
		"text-align":"center",
		"position": "relative",
  		"top": "-10%",
	});

	var remainingHeight = $("html").height() - ($("div.header").height()+$("#navbar").height());

	$("div.container").append("<div class='home'></div>");
	$("div.home").css({
		"width":"100%",
		"height": remainingHeight,
		"background-image": "url('images/home.jpg')",
		"background-position": "center bottom",
		"background-repeat":"no-repeat",
		"background-color": "white",
		"background-size": "cover"
	});

		$("div.home").append("<p id='greeting'>Hello</br> world!</p>");
		$("#greeting").css({
			"position":"relative",
			"top": "30%",
			"left": "15%",
			"width":"30px",
			"font-size":"500%",
			"color": "black",
			"text-shadow":"3px 3px 0 #888",
			"font-family":"Open Sans, sans-serif",
			"font-weight":"600",
			"margin":"0",
			"padding":"0"
		});

	$("div.container").append("<div class='about'></div>")
	$("div.about").css({
		"width":"100%",
		"height": remainingHeight,
		"background-image": "url('images/about.jpg')",
		"background-position": "center bottom",
		"background-repeat":"no-repeat",
		"background-color": "white",
		"background-size": "cover"
	});

	$("div.container").append("<div class='resume'></div>")
	$("div.resume").css({
		"width":"100%",
		"height": remainingHeight,
		//"background-image": "url('images/about.jpg')",
		"background-position": "center bottom",
		"background-repeat":"no-repeat",
		"background-size": "cover"
	});

	$("div.container").append("<div class='research'></div>")
	$("div.research").css({
		"width":"100%",
		"height": remainingHeight,
		"background-image": "url('images/research.jpg')",
		"background-position": "center bottom",
		"background-repeat":"no-repeat",
		"background-color": "white",
		"background-size": "cover"
	});

    $("div.about").hide();
    $("div.resume").hide();
    $("div.research").hide();
	$("div.header").hide();
	$("div.header").fadeIn(2000);
	$("#navbar").hide();
	$("#navbar").fadeIn(2000);
	$("div.home").hide();
	$("div.home").fadeIn(2000);

	$("li").eq(0).click(function () {
        $("div.home").fadeIn(1000);
        $("div.about").hide();
        $("div.resume").hide();
        $("div.research").hide();
    });
    $("li").eq(1).click(function () {
        $("div.home").hide();
        $("div.about").fadeIn(1000);
        $("div.resume").hide();
        $("div.research").hide();
    });
    $("li").eq(2).click(function () {
        $("div.home").hide();
        $("div.about").hide();
        $("div.resume").fadeIn(1000);
        $("div.research").hide();
    });
    $("li").eq(3).click(function () {
        $("div.home").hide();
        $("div.about").hide();
        $("div.resume").hide();
        $("div.research").fadeIn(1000);
    });
});