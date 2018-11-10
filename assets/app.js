var symptom;
var gender;
var birthYear;

$(document).ready(function () {
    $('select').formSelect();
    $('.sidenav').sidenav();
});

// $("#submit").on('click', function(){
//     symptom = $('#symptom').val();
//     gender = $('#gender').val();
//     birthYear= $('#birthYear').val();

//var newQuery = "https://healthservice.priaid.ch/diagnosis?symptoms="+ symptom +"&gender="+ gender +"&year_of_birth="+ birthYear +"&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImltYWxpazkyQGdtYWlsLmNvbSIsInJvbGUiOiJVc2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiMTQ5NSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjEwOCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiIxMDAiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJCYXNpYyIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGFuZ3VhZ2UiOiJlbi1nYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwOTktMTItMzEiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXBzdGFydCI6IjIwMTgtMTEtMDYiLCJpc3MiOiJodHRwczovL2F1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE1NDE3OTkyNTQsIm5iZiI6MTU0MTc5MjA1NH0.lX0UZtvT4vQCldBPuDjETtPrLP9Fl2AafxHxEEhOKww&format=json&language=en-gb"
// $.get(newQuery, function(result){
//     console.log(result);
// });

//})


// var 40= <p>[
//     {
//       "Issue": {
//         "ID": 17,
//         "Name": "Diabetes",
//         "Accuracy": 90,
//         "Icd": "E10;E11;E12;E13;E14",
//         "IcdName": "Type 1 diabetes mellitus;Type 2 diabetes mellitus;Malnutrition-related diabetes mellitus;Other specified diabetes mellitus;Unspecified diabetes mellitus",
//         "ProfName": "Diabetes mellitus",
//         "Ranking": 1
//       },
//       "Specialisation": [
//         {
//           "ID": 12,
//           "Name": "Endocrinology",
//           "SpecialistID": 26
//         },
//         {
//           "ID": 15,
//           "Name": "General practice",
//           "SpecialistID": 3
//         },
//         {
//           "ID": 19,
//           "Name": "Internal medicine",
//           "SpecialistID": 4
//         }
//       ]
//     },
//     {
//       "Issue": {
//         "ID": 445,
//         "Name": "Imbalance of body minerals",
//         "Accuracy": 72,
//         "Icd": "E87",
//         "IcdName": "Other disorders of fluid, electrolyte and acid-base balance",
//         "ProfName": "Electrolyte imbalance",
//         "Ranking": 2
//       },
//       "Specialisation": [
//         {
//           "ID": 15,
//           "Name": "General practice",
//           "SpecialistID": 3
//         },
//         {
//           "ID": 19,
//           "Name": "Internal medicine",
//           "SpecialistID": 4
//         },
//         {
//           "ID": 26,
//           "Name": "Nephrology",
//           "SpecialistID": 47
//         }
//       ]
//     },
//     {
//       "Issue": {
//         "ID": 213,
//         "Name": "Hypercortisolism",
//         "Accuracy": 66,
//         "Icd": "E24",
//         "IcdName": "Cushing syndrome",
//         "ProfName": "Cushing's syndrome",
//         "Ranking": 3
//       },
//       "Specialisation": [
//         {
//           "ID": 15,
//           "Name": "General practice",
//           "SpecialistID": 3
//         },
//         {
//           "ID": 19,
//           "Name": "Internal medicine",
//           "SpecialistID": 4
//         }
//       ]
//     },
//     {
//       "Issue": {
//         "ID": 431,
//         "Name": "Drug side effect",
//         "Accuracy": 60,
//         "Icd": "T88.7",
//         "IcdName": "Unspecified adverse effect of drug or medicament",
//         "ProfName": "Adverse drug reaction",
//         "Ranking": 4
//       },
//       "Specialisation": [
//         {
//           "ID": 15,
//           "Name": "General practice",
//           "SpecialistID": 3
//         },
//         {
//           "ID": 19,
//           "Name": "Internal medicine",
//           "SpecialistID": 4
//         }
//       ]
//     },
//     {
//       "Issue": {
//         "ID": 482,
//         "Name": "Disorder causing imbalance of water in the body",
//         "Accuracy": 48,
//         "Icd": "E23.2;N25.1",
//         "IcdName": "Diabetes insipidus;Nephrogenic diabetes insipidus",
//         "ProfName": "Diabetes insipidus",
//         "Ranking": 5
//       },
//       "Specialisation": [
//         {
//           "ID": 12,
//           "Name": "Endocrinology",
//           "SpecialistID": 26
//         },
//         {
//           "ID": 15,
//           "Name": "General practice",
//           "SpecialistID": 3
//         }
//       ]
//     },
//     {
//       "Issue": {
//         "ID": 572,
//         "Name": "Low blood pressure",
//         "Accuracy": 12,
//         "Icd": "I95",
//         "IcdName": "Hypotension",
//         "ProfName": "Hypotension",
//         "Ranking": 6
//       },
//       "Specialisation": [
//         {
//           "ID": 15,
//           "Name": "General practice",
//           "SpecialistID": 3
//         }
//       ]
//     },
//     {
//       "Issue": {
//         "ID": 670,
//         "Name": "Renal failure",
//         "Accuracy": 12,
//         "Icd": "N17;N18;N19",
//         "IcdName": "Acute renal failure;Chronic kidney disease;Unspecified kidney failure",
//         "ProfName": "Renal insufficiency in women",
//         "Ranking": 7
//       },
//       "Specialisation": [
//         {
//           "ID": 15,
//           "Name": "General practice",
//           "SpecialistID": 3
//         },
//         {
//           "ID": 26,
//           "Name": "Nephrology",
//           "SpecialistID": 47
//         }
//       ]
//     }
//]</p>

$("#submit").on('click', function () {
    $("table").show();
});

//https://healthservice.priaid.ch/diagnosis?symptoms=[40]&gender=male&year_of_birth=50&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImltYWxpazkyQGdtYWlsLmNvbSIsInJvbGUiOiJVc2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiMTQ5NSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjEwOCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiIxMDAiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJCYXNpYyIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGFuZ3VhZ2UiOiJlbi1nYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwOTktMTItMzEiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXBzdGFydCI6IjIwMTgtMTEtMDYiLCJpc3MiOiJodHRwczovL2F1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE1NDE3OTkyNTQsIm5iZiI6MTU0MTc5MjA1NH0.lX0UZtvT4vQCldBPuDjETtPrLP9Fl2AafxHxEEhOKww&format=json&language=en-gb


// $("#findfacts").on("click", function() {

//     var food = ["09036"];

//     function displayFoodInfo() {

//         var food = $(this).attr("date-name");

// var searchTerm;

// var queryURL =  "https://api.nal.usda.gov/ndb/search/?format=json" + searchTerm &q="  + "&sort=n&max=25&offset=0&api_key=V3cMPd35Q0UOLzXFZB2HDpmDPOr2zgbYTGBEgoc3";

//  $.get(queryURL, function (result) {
//     console.log(result);

// });

// /**
//  * pulls information from the form and build the query URL
//  * @returns {string} URL for USDA API based on form inputs
//  */



// var $articleList = $("<ul>");
// $articleList.addClass("list-group");

// // Add the newly created element to the DOM


// // // .on("click") function associated with the Search Button
// // $("#find-facts").on("click", function(event) {
// //     // This line allows us to take advantage of the HTML "submit" property
// //     // This way we can hit enter on the keyboard and it registers the search
// //     // (in addition to clicks). Prevents the page from reloading on form submit.
// //     event.preventDefault();
  
// //     // Empty the region associated with the articles
// //     clear();
  
// //     // Build the query URL for the ajax request to the NYT API
// //     var queryURL = "https://api.nal.usda.gov/ndb/search/?format=json" + searchTerm + "&q=" + "&sort=n&max=25&offset=0&api_key=V3cMPd35Q0UOLzXFZB2HDpmDPOr2zgbYTGBEgoc3";
  
// //     // Make the AJAX request to the API - GETs the JSON data at the queryURL.
// //     // The data then gets passed as an argument to the updatePage function
// //     $.ajax({
// //       url: queryURL,
// //       method: "GET"
// //     }).then(updatePage);
// //   });


//   $("#find-facts").on('click', function(){
//     searchTerm = $('#search-term').val();

// //function buildQueryUrL() {
//    var queryURL = "https://api.nal.usda.gov/ndb/search/?format=json&q=butter&sort=n&max=25&offset=0&api_key=V3cMPd35Q0UOLzXFZB2HDpmDPOr2zgbYTGBEgoc3";
// //    "https://api.nal.usda.gov/ndb/search/?format=json" + searchTerm + "&q=" + "&sort=n&max=25&offset=0&api_key=V3cMPd35Q0UOLzXFZB2HDpmDPOr2zgbYTGBEgoc3";
   
//    $.get(queryURL, function(result){
//          console.log(result);
//    });
// });

// $("#result-section").append($articleList);

//     queryParams.q = $("#search-term");
//     .val()
//     .trim();

//     console.log("---------------\nURL: " + queryURL + "\n---------------");
//     console.log(queryURL + $.param(queryParams));
// }

// /**
//  * takes API data (JSON/object) and turns it into elements on the page
//  * @param {object} USDAdata - object containing NYT API data
//  */

$("#find-facts").on('click', function () {
    $("table").show();
});
