/* 

"Project EyeJing" by Jacob McAdam

* * *
© Copyright Jacob McAdam 2017. The following program is the intellectual property of Jacob McAdam. No person is allowed to copy, distribute, sell, or purchase this program without the written consent of its author Jacob McAdam.
* * *

User clicks a button to generate a type of line (4 types). Three of these lines creates a type of trigam (8 types), and two types of trigams creates a type of hexagram (64 types). Once a hexagram is defined, user is then presented with hexagram's related message.

1 Coin | 2 Coin | 3 Coin
-------------------------
   H   |   H    |    H
   H   |   H    |    T
   H   |   T    |    H
   T   |   H    |    H
   T   |   T    |    T
   T   |   T    |    H
   T   |   H    |    T
   H   |   T    |    T
   
HHH = yang-changing = 1
HHT = yang-static = 3
TTT = umm-changing = 1
TTH = umm-static = 3

yang = 2/4 = 1/2 = 50% chance
umm = 2/4 = 1/2 = 50% chance
-static = 6/8 = 3/4 = 75% chance
-changing = 2/8 = 1/4 = 25% chance
   
Kun/k'un (Earth) = umm, umm, umm
Gen/ken (Mountain) = umm, umm, yang
Kan/k'an (Water) = umm, yang, umm
Xun/sun (Wind) = umm, yang, yang
zhen/chen (thunder) = yang, umm, umm
li (fire) = yang, umm, yang
dui/tui (lake) = yang, yang, umm
qian/ch'ien (heaven) = yang, yang, yang
*/

// - - - - - - Define variables/functions - - - - - - //
var tossScore = 0;
var UmmYang = [
  ['umm','yang'], // 2 types 1:2/1:2
  ['-static','-static','-static','-changing'] // 2 conditions 1:4/3:4
];
var lineType = "";      // Umm or Yang
var lineState = "";     // Static or Changing
var trigamLower = [];   // Lower Trigam Array
var trigamUpper = [];   // Upper Trigam Array
var kun = "kun";        // Earth: umm, umm, umm
var gen = "gen";        // Mountain: umm, umm, yang
var kan = "kan";        // Water: umm, yang, umm
var xun = "xun";        // Wind: umm, yang, yang
var zhen = "zhen";      // Thunder: yang, umm, umm
var li = "li";          // Fire: yang, umm, yang
var dui = "dui";        // Lake: yang, yang, umm
var qian = "qian";      // Heaven: yang, yang, yang
var hexagram;

function randomize(limit) {
  var random = Math.round((Math.random())*limit);
  return random;
}

function identifyTrigam() {
  //Identify Lower Trigam
  if (trigamLower.join() == "umm,umm,umm") {
      trigamLower = kun;
    } else if (trigamLower.join() == "umm,umm,yang") {
      trigamLower = gen;
    } else if (trigamLower.join() == "umm,yang,umm") {
      trigamLower = kan;
    } else if (trigamLower.join() == "umm,yang,yang") {
      trigamLower = xun;
    } else if (trigamLower.join() == "yang,umm,umm") {
      trigamLower = zhen;
    } else if (trigamLower.join() == "yang,umm,yang") {
      trigamLower = li;
    } else if (trigamLower.join() == "yang,yang,umm") {
      trigamLower = dui;
    } else if (trigamLower.join() == "yang,yang,yang") {
      trigamLower = qian;
    } else {
      alert("error");
    }
  //Identify Upper Trigam
  if (trigamUpper.join() == "umm,umm,umm") {
      trigamUpper = kun;
    } else if (trigamUpper.join() == "umm,umm,yang") {
      trigamUpper = gen;
    } else if (trigamUpper.join() == "umm,yang,umm") {
      trigamUpper = kan;
    } else if (trigamUpper.join() == "umm,yang,yang") {
      trigamUpper = xun;
    } else if (trigamUpper.join() == "yang,umm,umm") {
      trigamUpper = zhen;
    } else if (trigamUpper.join() == "yang,umm,yang") {
      trigamUpper = li;
    } else if (trigamUpper.join() == "yang,yang,umm") {
      trigamUpper = dui;
    } else if (trigamUpper.join() == "yang,yang,yang") {
      trigamUpper = qian;
    } else {
      alert("error");
    }
}

function identifyHexagram() {
//Calculate Hexagram Message
  if (trigamLower == 'kun' && trigamUpper == 'kun') {
      hexagram = hex02;
    } else if (trigamLower == 'kun' && trigamUpper == 'gen') {
      hexagram = hex23;
    } else if (trigamLower == 'kun' && trigamUpper == 'kan') {
      hexagram = hex08;
    } else if (trigamLower == 'kun' && trigamUpper == 'xun') {
      hexagram = hex20;
    } else if (trigamLower == 'kun' && trigamUpper == 'zhen') {
      hexagram = hex16;
    } else if (trigamLower == 'kun' && trigamUpper == 'li') {
      hexagram = hex35;
    } else if (trigamLower == 'kun' && trigamUpper == 'dui') {
      hexagram = hex45;
    } else if (trigamLower == 'kun' && trigamUpper == 'qian') {
      hexagram = hex12;
    } else if (trigamLower == 'gen' && trigamUpper == 'kun') {
      hexagram = hex15;
    } else if (trigamLower == 'gen' && trigamUpper == 'gen') {
      hexagram = hex52;
    } else if (trigamLower == 'gen' && trigamUpper == 'kan') {
      hexagram = hex39;
    } else if (trigamLower == 'gen' && trigamUpper == 'xun') {
      hexagram = hex53;
    } else if (trigamLower == 'gen' && trigamUpper == 'zhen') {
      hexagram = hex62;
    } else if (trigamLower == 'gen' && trigamUpper == 'li') {
      hexagram = hex56;
    } else if (trigamLower == 'gen' && trigamUpper == 'dui') {
      hexagram = hex31;
    } else if (trigamLower == 'gen' && trigamUpper == 'qian') {
      hexagram = hex33;
    } else if (trigamLower == 'kan' && trigamUpper == 'kun') {
      hexagram = hex07;
    } else if (trigamLower == 'kan' && trigamUpper == 'gen') {
      hexagram = hex04;
    } else if (trigamLower == 'kan' && trigamUpper == 'kan') {
      hexagram = hex29;
    } else if (trigamLower == 'kan' && trigamUpper == 'xun') {
      hexagram = hex59;
    } else if (trigamLower == 'kan' && trigamUpper == 'zhen') {
      hexagram = hex40;
    } else if (trigamLower == 'kan' && trigamUpper == 'li') {
      hexagram = hex64;
    } else if (trigamLower == 'kan' && trigamUpper == 'dui') {
      hexagram = hex47;
    } else if (trigamLower == 'kan' && trigamUpper == 'qian') {
      hexagram = hex06;
    } else if (trigamLower == 'xun' && trigamUpper == 'kun') {
      hexagram = hex46;
    } else if (trigamLower == 'xun' && trigamUpper == 'gen') {
      hexagram = hex18;
    } else if (trigamLower == 'xun' && trigamUpper == 'kan') {
      hexagram = hex48;
    } else if (trigamLower == 'xun' && trigamUpper == 'xun') {
      hexagram = hex57;
    } else if (trigamLower == 'xun' && trigamUpper == 'zhen') {
      hexagram = hex32;
    } else if (trigamLower == 'xun' && trigamUpper == 'li') {
      hexagram = hex50;
    } else if (trigamLower == 'xun' && trigamUpper == 'dui') {
      hexagram = hex28;
    } else if (trigamLower == 'xun' && trigamUpper == 'qian') {
      hexagram = hex44;
    } else if (trigamLower == 'zhen' && trigamUpper == 'kun') {
      hexagram = hex24;
    } else if (trigamLower == 'zhen' && trigamUpper == 'gen') {
      hexagram = hex27;
    } else if (trigamLower == 'zhen' && trigamUpper == 'kan') {
      hexagram = hex03;
    } else if (trigamLower == 'zhen' && trigamUpper == 'xun') {
      hexagram = hex42;
    } else if (trigamLower == 'zhen' && trigamUpper == 'zhen') {
      hexagram = hex51;
    } else if (trigamLower == 'zhen' && trigamUpper == 'li') {
      hexagram = hex21;
    } else if (trigamLower == 'zhen' && trigamUpper == 'dui') {
      hexagram = hex17;
    } else if (trigamLower == 'zhen' && trigamUpper == 'qian') {
      hexagram = hex25;
    } else if (trigamLower == 'li' && trigamUpper == 'kun') {
      hexagram = hex36;
    } else if (trigamLower == 'li' && trigamUpper == 'gen') {
      hexagram = hex22;
    } else if (trigamLower == 'li' && trigamUpper == 'kan') {
      hexagram = hex63;
    } else if (trigamLower == 'li' && trigamUpper == 'xun') {
      hexagram = hex37;
    } else if (trigamLower == 'li' && trigamUpper == 'zhen') {
      hexagram = hex55;
    } else if (trigamLower == 'li' && trigamUpper == 'li') {
      hexagram = hex30;
    } else if (trigamLower == 'li' && trigamUpper == 'dui') {
      hexagram = hex49;
    } else if (trigamLower == 'li' && trigamUpper == 'qian') {
      hexagram = hex13;
    } else if (trigamLower == 'dui' && trigamUpper == 'kun') {
      hexagram = hex19;
    } else if (trigamLower == 'dui' && trigamUpper == 'gen') {
      hexagram = hex41;
    } else if (trigamLower == 'dui' && trigamUpper == 'kan') {
      hexagram = hex60;
    } else if (trigamLower == 'dui' && trigamUpper == 'xun') {
      hexagram = hex61;
    } else if (trigamLower == 'dui' && trigamUpper == 'zhen') {
      hexagram = hex54;
    } else if (trigamLower == 'dui' && trigamUpper == 'li') {
      hexagram = hex38;
    } else if (trigamLower == 'dui' && trigamUpper == 'dui') {
      hexagram = hex58;
    } else if (trigamLower == 'dui' && trigamUpper == 'qian') {
      hexagram = hex10;
    } else if (trigamLower == 'qian' && trigamUpper == 'kun') {
      hexagram = hex11;
    } else if (trigamLower == 'qian' && trigamUpper == 'gen') {
      hexagram = hex26;
    } else if (trigamLower == 'qian' && trigamUpper == 'kan') {
      hexagram = hex05;
    } else if (trigamLower == 'qian' && trigamUpper == 'xun') {
      hexagram = hex09;
    } else if (trigamLower == 'qian' && trigamUpper == 'zhen') {
      hexagram = hex34;
    } else if (trigamLower == 'qian' && trigamUpper == 'li') {
      hexagram = hex14;
    } else if (trigamLower == 'qian' && trigamUpper == 'dui') {
      hexagram = hex43;
    } else if (trigamLower == 'qian' && trigamUpper == 'qian') {
      hexagram = hex01;
    } else {
      alert("error");
    }
}

function print(a) {
  $("#hexagram-message").prepend(a);
}

// - - - - - - Program agenda - - - - - - //
console.log('Welcome. Program initiated.');

//Enable button Reset/Reload page functionality
$( "#reload" ).click(function() {
  location.reload(true);
});

//User clicks button, runs toss function
$("#toss").click(function toss() {
  
  //Identify type of line from UmmYang, and it's changing state
  lineType = UmmYang[0][randomize(1)];
  lineState = lineType + UmmYang[1][randomize(3)];
  
  //add list item to ul with a class of linetype
  $("#hexagram").prepend( "<li class=" + lineState + "></li>" );
  
  //log click score
  tossScore++
  
  //type of line is logged in trigams
  if (tossScore <= 3) {
    trigamLower.push(lineType);
  } else {
    trigamUpper.push(lineType);
  }
  
  console.log(
    "Toss Score: " + tossScore + " | " + 
    "Line State: " + lineState + " | " + 
    "Lower Trigam: " + trigamLower + " | " + 
    "Upper Trigam: " + trigamUpper
  ); 
  
  if (tossScore === 6) {
    //if click score equals 6, the button disables
    $('#toss').prop('disabled', true);
    //then, identify the trigams form linetypes
    identifyTrigam();
    //then, identify the hexagram from trigams
    identifyHexagram();
    //then, print message to #hexagram-message
    print( 
      "<h1>#" + hexagram.number + ": " + hexagram.name + "</h1>" +
      "<p><em>" + hexagram.excerpt + "</em></p>" +
      hexagram.excerpt
    );
    
    console.log("Hexagram Trigams: " + trigamLower + "-" + trigamUpper);
  }
  
});

//print( 
//    hex00.glyph + 
//    "<h1>#" + hex00.number + ": " + hex00.name + "</h1>" +
//    "<p><em>" + hex00.excerpt + "</em></p>" +
//    hex00.content +
//    
//    "<ul>" + 
//    "<li>" + hex00.changingLine1 + "</li>" +
//    "<li>" + hex00.changingLine2 + "</li>" +
//    "<li>" + hex00.changingLine3 + "</li>" +
//    "<li>" + hex00.changingLine4 + "</li>" +
//    "<li>" + hex00.changingLine5 + "</li>" +
//    "<li>" + hex00.changingLine6 + "</li>" +
//    "</ul>" 
//  );