"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Brandon santizo
   Date:   2/6/2020
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/
// finds the race title
var reportHTML = "<h1>" + raceTitle + "</h1>"

// the loop for the rqace array
for(var i = 0; i < race.length; i++){
  var totalVotes = 0;
  votes[i].forEach(calcSum);
  reportHTML += "<table> <caption>" + race[i] + "</caption> <tr><th>Candidate</th><th>Votes</th><tr>";
  reportHTML += candidateRows(i, totalVotes);
  reportHTML += "</table>"
}

// to write individual table rows for each candidate
document.getElementsByTagName("section")[0].innerHTML = reportHTML;
function candidateRows(raceNum, totalVotes){
  var rowHTML = "";
  for(var j = 0; j < 3; j++){
   //   retrieves the name from multideimensionsal candidate
     var candidateName = candidate[raceNum][j];
   //   retireves the party affiliation
     var candidateParty = party[raceNum][j];
   //   retirves votes cast for the current candidate
     var candidateVotes = votes[raceNum][j];
   //   calculates the percentage of votes recieved by the current candidate loop
     var candidatePercent = calcPercent(candidateVotes, totalVotes);
     rowHTML += "<tr><td>" + candidateName + "(" + candidateParty + ")</td> <td>" + candidateVotes.toLocaleString() + "(" + candidatePercent.toFixed(1) + ")</td> "
     //adds more to bar
     for(var k = 0; k < candidatePercent; k++){
        rowHTML += createBar(candidateParty, candidatePercent);
     }
     rowHTML+="</tr>";

   }
   return rowHTML;
 }
//  Callback Function to calculate an array sum 
 function calcSum(value) {
   totalVotes += value;
 }
//   Function to calculate a percentage 
 function calcPercent(value, sum) {
   return (100*value/sum);
 }
 //makes bar graph politcal parties
 function createBar(partyType){
   var barHTML = "";
   if(partyType === "D"){
      barHTML = "<td class = 'dem'></td>"
   }
   if(partyType === "R"){
      barHTML = "<td class = 'rep'></td>"
   }
   if(partyType === "I"){
      barHTML = "<td class = 'ind'></td>"
   }
   return barHTML;
 }

