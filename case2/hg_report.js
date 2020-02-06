"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: 
   Date:   
   
   Filename: hg_report.js
	
*/
// step 5 the text to be displayed on the html
var gameReport = "<h1>" + itemTitle + "</h1> <h2>By:" + itemManufacturer + "</h2> <img src='hg_" + itemID + ".png' alt=" + itemID + "id='gameImg' /> <table> <tr><th>Product ID</th><td>" + itemID + "</td></tr> <tr><th>List Price</th><td>" + itemPrice + "</td></tr> <tr><th>Platform</th><td>" + itemPlatform + "</td></tr> <tr><th>ESRB Rating</th><td>" + itemESRB + "</td></tr> <tr><th>Condition</th><td>" + itemCondition + "</td></tr> <tr><th>Release</th><td>" + itemRelease + "</td></tr> </table>" + itemSummary;
// step 6 displays in html
document.getElementsByTagName("article")[0].innerHTML = gameReport;
// step 7 customer ratings 
var ratingsSum = 0;
 
//step 8 does the same as the ratings
var ratingsCount = ratings.length;
 
//step 9 repeats the content of ratings
for(var i = 0; i < ratings.length; i++){
  ratingsSum + ratings;
}
 
// step 10 
var ratingAvg = ratingsSum / ratingsCount;
 
//step 11 the text to be displayed on the html
var ratingReport = "<h1> Customer Review</h1> <h2>" + ratingAvg + " out of 5 stars (" + ratingsCount + " reviews) </h2>";
 
//step 12 
for(var i = 0; i < 3; i++){
  ratingReport += "<div class='review'> <h1>" + ratingTitles[i] + "</h1> <table><tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr> <tr><th>Review Date</th><td>" + ratingDates[i] + "</td></tr> <tr><th>Rating</th><td>";
 
  for(var j = 0; j < ratings[i]; j++){
     ratingReport += "<img src='hg_star.png' />";
  }
 
  ratingReport += "</td></tr></table>" + ratingSummaries[i] + "</div>";
}
 
//step 13
document.getElementsByTagName("aside")[0].innerHTML = ratingReport;


