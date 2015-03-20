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
		"top":"93.8%",
		//"background-color":"white",
		"border-radius":"8px",
		"left":"89.2%"
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
		"font-family":"'Century Gothic', sans-serif",
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
			"font-family":"'Century Gothic', sans-serif",
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
			"height": "78%",
			"background-color": "rgba(999,999,999, 0.86)",
			"border-radius":"10px",
			"overflow":"auto"
		});

			$("#text").append("<h1>Hi, I'm Tika!</h1>");
			$("div.about h1").css({
				"position":"relative",
				"font-size":"400%",
				"color": "rgb(85, 41, 115",
				//"text-shadow":"3px 3px 0 #888",
				//"font-family":"'Century Gothic', sans-serif",
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
	$("#email").append('<form class="email" action="mailer.php" method="post"><p>Name:</p><input type="text" name="name" /><p>E-mail:</p><input type="text" name="email" /><p>Subject:</p><input type="text" name="subject" /><p>Message:</p><textarea name="message"></textarea></p><input class="send" type="submit" value="Send"></form>');
	$('#email').css({
		"margin-left":"10px",
		"font-family":"'Century Gothic', sans-serif",
	});

	$("#email textarea").css({
		"width":"30%",
		"height":"24px"
	});
	$("#email p").css({
		"margin-top":"0",
		"margin-bottom":"0",
		"padding":"0"
	})
			
	$("div.container").append("<div class='resume'></div>")
	$("div.resume").css({
		"width":"95%",
		"height": remainingHeight,
		//"background-image": "url('images/about.jpg')",
		"background-position": "center bottom",
		"background-repeat":"no-repeat",
		"background-size": "cover",
		"padding-left":"20px"
	});

	var resume = "<div id='DIV_1'>	<div id='DIV_2'>	</div>	<div id='DIV_3'>		Ritika Tamirisa	</div>	<!-- Contact Info -->	<div id='DIV_4'>		<span id='SPAN_6'>∙ritika.tamirisa[at]hotmail.com&nbsp;&nbsp;&nbsp;&nbsp;</span><span id='SPAN_8'></span><span id='SPAN_10'>∙Tempe, AZ</span> <span id='SPAN_11'>www.linkedin.com/pub/ritika-tamirisa/a8/40a/190/en</span>	</div><hr id='HR_12' />	<!-- Statement -->	<div id='DIV_13'>		<h2 id='H2_14'>		</h2>		<p id='P_15'>		</p><hr id='HR_16' />	</div>	<!-- Experience Section -->	<div id='DIV_17'>		<h2 id='H2_18'>			Experience		</h2>		<!-- Job One -->		<div id='DIV_19'>			 <span id='SPAN_20'>Arizona State University Biodesign Institute</span> <span id='SPAN_21'>Tempe, AZ</span> <span id='SPAN_22'>October 2014-Present</span>			<p id='P_23'>			</p>			<div id='DIV_24'>				Research Assistant			</div>			<p id='P_25'>				∙Assistant to Dr. John Chaput in his research on organic synthesis of unnatural genetic structures.<br id='BR_26' /> ∙Familiarity with laboratory safety procedures and proper research conduct			</p>		</div>		<!-- Job Two -->		<div id='DIV_27'>			 <span id='SPAN_28'>Arizona Neurology and Sleep Center</span> <span id='SPAN_29'>Scottsdale, AZ</span> <span id='SPAN_30'>May 2014-Present</span>			<p id='P_31'>			</p>			<div id='DIV_32'>				Assistant Medical Secretary			</div>			<p id='P_33'>				∙Learned to interact with customers in a medical office by assisting with customer relations and insurance billing.<br id='BR_34' /> ∙Opportunities to observe the day-to-day operations of a private practice offering a number of neurology services			</p>		</div>		<!-- Job Three -->		<div id='DIV_35'>			 <span id='SPAN_36'>Rancho Solano Preparatory School</span> <span id='SPAN_37'>Scottsdale, AZ</span> <span id='SPAN_38'>August 2012-May 2013</span>			<p id='P_39'>			</p>			<div id='DIV_40'>				Teaching Assistant			</div>			<p id='P_41'>				∙Assisted teacher with grading coursework and creating quizzes			</p>		</div><hr id='HR_42' />	</div>    <!-- Job 4 -->    		<div id='DIV_27'>			 <span id='SPAN_28'>Arrowhead Hospital</span> <span id='SPAN_29'>Glendale, AZ</span> <span id='SPAN_30'>May-August 2012, May-August 2013</span>			<p id='P_31'>			</p>			<div id='DIV_32'>            Hospital Volunteer			</div>			<p id='P_41'>				∙Helped nurses with cleaning, feeding, and patient care.			</p>		</div><hr id='HR_42' />	<!-- Education Section -->	<div id='DIV_43'>		<h2 id='H2_44'>			Education		</h2>		<!-- School One -->		<div id='DIV_45'>			 <span id='SPAN_46'>Bachelor of Science, Biochemsitry</span> <span id='SPAN_47'>Arizona State University</span> <span id='SPAN_48'>Tempe, AZ&nbsp;&nbsp;</span> <span id='SPAN_49'>2016 (Expected)</span>			 <p id='P_33'>				∙GPA: 4.0, Barrett Honors College			</p>			<br/>		</div>		<br/>		<!-- School Three -->		<hr id='HR_60' />	</div>	<!-- Skills section --><br/>	<div id='DIV_61'>	<br/>		<h2 id='H2_62'>			Skills		</h2> <span id='SPAN_63'>chemical laboratory experience and equipment usage ∙ laboratory safety ∙ Microsoft Office ∙ customer service and communications</span>	</div></div>";
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
			"font-family":"'Century Gothic', sans-serif",
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
			"height": "70%",
			"background-color": "rgba(999,999,999, 0.86)",
			"border-radius":"10px",
			"overflow":"auto"
			//"display":"inline"
		});

		$("div.research div").append("<h2>At the Biodesign Institute</h2>");
		$("div.research div").append("<p>We do stuff</p>")
		
		$("div.research div h2").css({
			"position":"relative",
			"font-size":"200%",
			"color": "black",
			//"text-shadow":"3px 3px 0 #888",
			//"font-family":"'Century Gothic', sans-serif",
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