$(document).ready(function(){

	var source = $("#some-template").html(); 
	var template = Handlebars.compile(source); 
	var data = {
		people:[
		{name:'srijan',age:'30',
  		marks: [
    	{ maths:"40", science:"60",english:"30"}]},
    	{name:'srijan',age:'30',
  		marks: [
    	{ maths:"40", science:"60",english:"30"}]},
    	{name:'srijan',age:'30',
  		marks: [
    	{ maths:"40", science:"60",english:"30"}]},
    	{name:'srijan',age:'30',
  		 marks: [
    	{ maths:"40", science:"60",english:"30"}]}




    	]};
	Handlebars.registerHelper('each', function(context, options) {
  var ret = "";

  for(var i=0, j=context.length; i<j; i++) {
    ret = ret + options.fn(context[i]);
  }

  return ret;
});
	var html=template(data);
	$(document.body).append(html);

// 	$('#next').click(function(){
// 		i++;
// 		console.log(i);

// 		Handlebars.registerHelper('list', function(items, options) {
// 	    	console.log(i);
// 	    	out="";
// 	    	out = out + options.fn(items[i]);
// 			return out ;
// 		});
// 		Handlebars.registerHelper('with', function(context, options) {
//   return options.fn(context);
// });
// 		var xy  = template(data);
// 		$("#ent").html(xy);


// 	});

	


});







