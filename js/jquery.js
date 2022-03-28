// ================ first stylize <div> where jQuery will go =====================

const jqueryDiv = document.querySelector("#jqueryEdit");
console.log(jqueryDiv); // it works 

jqueryDiv.style.setProperty('font-family', 'Share Tech Mono, monospace');



jqueryDiv.style.setProperty('color', 'greenyellow');
jqueryDiv.style.setProperty('font-size', '2rem');

jqueryDiv.style.setProperty('background-color', 'orange');
jqueryDiv.style.setProperty('padding', '2rem');

jqueryDiv.style.setProperty('border-radius', '3rem');
jqueryDiv.style.setProperty('border', '1px solid');


// ================ the HW jQuery goes here =====================

$("#replaceMe").addClass("hwPara-style");

// $(".hwPara-style").css("background-color", "greenyellow"); // change 1 property
$(".hwPara-style").css({"color":"black", "font-size": "1rem", "padding":"3rem"}); // now change multipe properties
$("#replaceMe").html("Click the button below to see my favorite game in the series"); // now change multipe properties




// $("#replaceMe").prepend("1ST PERSON VIEW:<br>Metroid Prime (2002)<hr>"); // added content BEFORE a paragraph



// add content BEFORE paragraph when user click button
$( "#replacePAbove" ).click(function() {
    $("#replaceMe").prepend("METROID PRIME (2002)<hr>");
});

$("#replacePAbove").css("color", "white");
$("#replacePAbove").css("background-color", "black");
$("#replacePAbove").css("border-radius", "1rem");

$("#replacePAbove").css("display", "block");
$("#replacePAbove").css("margin", "auto");







// this stylizes div where chart is from APEXCHARTS
$("#chart").css("max-width", "30rem");
$("#chart").css("display", "block");
$("#chart").css("margin", "auto");
$("#chart").css("padding", "2em");
$("#chart").css("background-color", "rgb(255, 192, 75)");
$("#chart").css("border-radius", "3rem");




// $("#chartTitle").css("color", "white");
$("#chartTitle").css("text-align", "center");
$("#chartTitle").css("font-size", "1rem");
$("#chartTitle").css("font-family", "Share Tech Mono, monospace");



// donut chart info is below
var options = {
    series: [44, 55, 41, 30],
    chart: {
    type: 'donut',
  },
  responsive: [{
    breakpoint: 400,
    options: {
      chart: {
        width: 360
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

