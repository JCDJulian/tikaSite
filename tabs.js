$(document).ready(function(){
	$("div.container").append("<div class='header'></div>");
	console.log("Test");
	$("div.header").css({
		"width": "100%",
		"height": "30px",
		"border-bottom": "2px solid #80577F"//purple
	});

	$("div.container").append("<p id='footer'>&copy; Ritika Tamirisa </br> Site by Julian De Ocampo");
	$("#footer").css({
		"position":"fixed",
		"text-align":"left",
		//"color":"white",
		"font-size": "80%",
		"z-index":"100",
		"top":"94%",
		//"background-color":"white",
		"border-radius":"8px",
		"left":"89.45%"
	});

	$("div.header").append("<p id='banner'>Ritika Tamirisa</p>");
	$("#banner").css({
		"font-size":"200%",
		"color":"#80577F",//purple
		"font-family":"'Century Gothic', sans-serif",
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
	$("#tabs").append("<li>Home</li>");
	$("#tabs").append("<li>About Me / Contact</li>");
	$("#tabs").append("<li>Resume</li>");
	$("#tabs").append("<li>Research</li>");

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

	$("div.container").append("<div class='about'></div>");
	$("div.about").css({
		"width":"100%",
		"height": remainingHeight,
		"background-image": "url('images/about.jpg')",
		"background-position": "center bottom",
		"background-repeat":"no-repeat",
		"background-color": "white",
		"background-size": "cover"
	});

		$('div.about').append("<div id='text'></div>")
		$('#text').css({
			"position":"relative",
			"top": "10%",
			"left": "55%",
			"width":"40%",
			"height": "80%",
			"background-color": "rgba(999,999,999, 0.86)",
			"border-radius":"10px"
		});

			$("#text").append("<h1>Hi, I'm Tika!</h1>");
			$("div.about h1").css({
				"position":"relative",
				"font-size":"400%",
				"color": "rgb(85, 41, 115",
				//"text-shadow":"3px 3px 0 #888",
				//"font-family":"Open Sans, sans-serif",
				"font-weight":"200",
				"margin":"0",
				"padding":"0",
				"padding-top":"10px",
				"background-color": "rgba(999,999,999, 0.96)",
				"border-radius":"10px",
				"text-align":"center"
			});
			$("#text").append("<p>I'm an undergraduate at Arizona State University studying Biochemistry. I am interested in DNA, science, skincare, medicine, and cats. My boyfriend is nice. Wee.</p>");
			$("#text").append("<div id='email'></div>");
			$("#text p").css({
				"text-indent":"50px",
				"font-family":"'Century Gothic', sans-serif",
				"font-size":"115%",
				"margin-left":"10px",
				"margin-right":"10px",
				"margin-top":"2px"
			});
	$("#email").append('<h2>Contact me:</h2><form action="MAILTO:ritika.tamirisa@hotmail.com" method="post" enctype="text/plain">Name:<br><input type="text" name="name" value="your name"><br>E-mail:<br><input type="text" name="mail" value="your email"><br>Message:<br><input type="text" name="message" value="your message" size="50"><br><input type="submit" value="Send"><input type="reset" value="Reset"></form>');
	$('#email').css({
		"margin-left":"10px",
		"font-family":"'Century Gothic', sans-serif"
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

	var resume = "<h1>Education</h1><h2>B.S. Biochemistry (Medicinal Chemistry), Arizona State University</h2><p>Expected Graduation Date: May 2017</br>Barrett, The Honors College</br>GPA: 4.0</p><h2>Diploma, Rancho Solano Preparatory School</h2><p>Graduation Date: May 2013</p><h1>Experience</h1><h2>Research Assistant</h2><h3>Arizona State University Biodesign Institute</h3><h3>October 2014 - Present</h3><p>Assistant to Dr. John Chaput in his research on organic synthesis of unnatural genetic structures.</br>Familiarity with laboratory safety procedures and proper research conduct</p><h2>Assistant Medical Secretary</h2><h3>Arizona Neurology and Sleep Center</h3><h3>May 2014 - Present</h3><p>Learned to interact with customers in a medical office by assisting with customer relations and insurance billing. </br> Opportunities to observe the day-to-day operations of a private practice offering a number of neurology services</p><h2>Teaching Assistant</h2><h3>Rancho Solano Preparatory School</h3><h3>August 2012 - May 2013</h3><p>Assisted teacher with grading coursework and creating quizzes</p><h2>Hospital Volunteer</h2><h3>Arrowhead Hospital</h3><h3>May - August 2012, May-August 2013</h3><p>Helped nurses with cleaning, feeding, and patient care for 8 hours per week.</p>";
	$("div.resume").append(resume);

	$("div.container").append("<div class='research'></div>");
	$("div.research").css({
		"width":"100%",
		"height": remainingHeight,
		"background-image": "url('images/research.jpg')",
		"background-position": "center bottom",
		"background-repeat":"no-repeat",
		"background-color": "white",
		"background-size": "cover"
	});
		$("div.research").append("<h1></h1")
		$("div.research").append("<h1>Research</ph1");
		$("div.research h1").css({
			"position":"relative",
			"top": "5%",
			"left": "2%",
			//"width":"30px",
			"font-size":"500%",
			"color": "black",
			"text-shadow":"3px 3px 0 #888",
			"font-family":"Open Sans, sans-serif",
			"font-weight":"600",
			"margin":"0",
			"padding":"0",
			"display":"inline"
		});
		$('div.research').append("<div class></div>")
		$('div.research div').css({
			"position":"relative",
			//"top": "5%",
			"left": "55%",
			"width":"40%",
			"height": "80%",
			"background-color": "rgba(999,999,999, 0.86)",
			"border-radius":"10px",
			//"display":"inline"
		});

		$("div.research div").append("<h2>At the Biodesign Institute</h2>");
		$("div.research div").append("<p>We do stuff</p>")
		
		$("div.research div h2").css({
			"position":"relative",
			"font-size":"200%",
			"color": "black",
			//"text-shadow":"3px 3px 0 #888",
			//"font-family":"Open Sans, sans-serif",
			"font-weight":"200",
			"margin":"0",
			"padding":"0",
			//"background-color": "rgba(999,999,999, 0.96)",
			"border-radius":"10px",
			"text-align":"center",
			"padding-top":"10px"
		});			
		$("div.research div p").css({
			"text-indent":"25px",
			"font-family":"'Century Gothic', sans-serif",
			"font-size":"115%",
			"margin-left":"10px",
			"margin-right":"10px",
			"margin-top":"8px"
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