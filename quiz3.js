var dataUrl = "https://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=a3e2b221-75e0-45c1-8f97-75acbd43d613"; 
console.log(dataUrl);

var data = $.getJSON(dataUrl); 
console.log(data);
data.done( function( msg ) { 
  $.each(msg.result.results,function(i,item){
    $("#contain").append($("<h2/>").text(item.A_Name_En));
    $("#contain").append($("<h3/>").text(item.A_Behavior));
    $("#contain").append($("<img/>").attr("src",item.A_Pic04_URL));
    });
}); 
data.fail( function( msg ) { 
  console.log(msg);
   $("#contain").html("fail");
});

