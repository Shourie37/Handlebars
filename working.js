$(document).ready(function(){

	var source = $("#some-template").html(); 
	var template = Handlebars.compile(source); 
	var data = {
	  people:[
	    {
	    	name: "Yehuda", age: "18",marks:{maths:"50",science:"70",social:"60"}},
	    {name: "Carl",age: "18",marks:{maths:"50",science:"70",social:"60"}},
	    {name: "Alan",age: "18",marks:{maths:"50",science:"70",social:"60"}}
	  ]
	};



	i=0;

Handlebars.registerHelper('each', function(context, options) {
  var ret = "";

  for(var i=0, j=context.length; i<j; i++) {
    ret = ret + options.fn(context[i]);
  }

  return ret;
});

	var xy  = template(data);
	$("#ent").html(xy);

	$('#next').click(function(){
			Handlebars.registerHelper('each', function(context, options) {
	 		var ret = "";

		  for(var i=0, j=context.length; i<j; i++) {
		    ret = ret + options.fn(context[i]);
		  }

	 	 return ret;
		});
		var xy  = template(data);
		$("#ent").html(xy);

   	});
});







