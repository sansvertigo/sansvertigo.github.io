view_mode = "led";

function init() {
  var gridLengthx = 8;
  var gridLengthy = gridLengthx;
  var tileHTML = "<td class='tile' onclick='paint.call(this)' style='background-color:rgba(0, 0, 0, 0)'></div></td>";
  var dwHTML = "<span style='font-size:16px;margin-left:90px;'>Sense Hat Art Designer</span><table id='design_table'>";
  for (i = 0; i < gridLengthy; i ++) {dwHTML += "<tr class='tile_row'>" + tileHTML.repeat(gridLengthx) + "</tr>"}
  dwHTML  += "</table>"
  document.getElementById('design_window').innerHTML = dwHTML;
}
function clear_dw() {
  init();
  toggleview();
  toggleview();
}
function toggleview() {
  var background = $('.tile').css('background-image');
  var tiles = document.getElementsByClassName("tile")
  if (background.includes("led")){
    //Set view mode to 'pixel'
    view_mode = "pixel";
    document.getElementById('view_mode').innerHTML = "Pixel View"
    //Set background image to square
    $(".tile").css({ 'background-image' : 'url("")', 'box-shadow' : '0 0px 0px 0 rgba(0, 0, 0, 0), 0 0px 0px 0 rgba(0, 0, 0, 0)' })
  }
  else {
    //Set view mode to 'led'
    view_mode = "led";
    document.getElementById('view_mode').innerHTML = "Led View"
    //Set background image of all tiles to led_off
    $(".tile").css({ 'background-image' : 'url("led_off.png")', 'box-shadow' : '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' })
    for (i = 0; i < tiles.length; i++) {
      //if tile has background color value, use led_on.png with alpha channel to show led color
      if (tiles[i].style.backgroundColor !== "rgba(0, 0, 0, 0)") { tiles[i].style.backgroundImage = "url('led_on.png')";}
    }
  }
}

function paint() {
  //Get selected color
  var color_selection = document.getElementById('color_select').style.backgroundColor;
  //Grab current background color of clicked tile
  var tilecolor = $(this).css('background-color');
  //var color_current
  if (tilecolor === "rgba(0, 0, 0, 0)" || tilecolor !== color_selection){
    $(this).css('background-color', color_selection);
    if (view_mode === "led") {
      $(this).css('background-image', "url('led_on.png')");
    }
  }
  else {
    $(this).css('background-color', "rgba(0, 0, 0, 0)");
    if (view_mode === "led") {
    $(this).css('background-image', "url('led_off.png')");
    }
  }
}

function flipx (){
  //Get rows from design_table
  var rows = document.getElementById("design_table").rows;
  var transformHTML = "";
  //Set rowlength based on length of first table row
  var rowlength = document.getElementById("design_table").rows[0].innerHTML.split("</td>").length -1;
  //Start at top row and work our way down
  for (i = 0; i < rowlength ; i ++){
    var current_row = rows[i].innerHTML.split("</td>")
    transformHTML += "<tr>"
    //For each row we will copy each table cell from right to left
    for (n = rowlength-1; n >= 0 ; n --){
      transformHTML += current_row[n];
    }
    transformHTML += "</tr>"
  }
  //Update design table HTML using 'transformHTML'
  document.getElementById('design_window').innerHTML = "<span style='font-size:16px;margin-left:90px;'>Sense Hat Art Designer</span><table id='design_table'>" + transformHTML + "</table>";
}
function flipv (){
  //Get rows from design_table
  var rows = document.getElementById("design_table").rows;
  var transformHTML = "";
  //Set rowlength based on length of first table row
  var rowlength = document.getElementById("design_table").rows[0].innerHTML.split("</td>").length -1;
  //Start at bottom row and work our way up
  for (i = rowlength-1; i >= 0 ; i --){
    var current_row = rows[i].innerHTML.split("</td>")
    transformHTML += "<tr>"
    //For each row we will copy each table cell from left to right
    for (n = 0; n < rowlength  ; n ++){
      transformHTML += current_row[n];
    }
    transformHTML += "</tr>"
  }
  //Update design table HTML using 'transformHTML'
  document.getElementById('design_window').innerHTML = "<span style='font-size:16px;margin-left:90px;'>Sense Hat Art Designer</span><table id='design_table'>" + transformHTML + "</table>";
}
function rotate_left (){
  //newcell = document.getElementById("design_table").rows[0].innerHTML.split("</td>")[0];
  //Get rows from design_table
  var rows = document.getElementById("design_table").rows;
  var transformHTML = "";
  //Set rowlength based on length of first table row
  var rowlength = document.getElementById("design_table").rows[0].innerHTML.split("</td>").length -1;
  //Start at bottom row and work our way up
  for (i = rowlength-1; i >= 0 ; i --){
    var current_row = rows[i].innerHTML.split("</td>")
    transformHTML += "<tr>"
    //For each row we will copy each table cell from left to right
    for (n = 0; n < rowlength  ; n ++){
      //transformHTML += current_row[n];
      transformHTML += document.getElementById("design_table").rows[n].innerHTML.split("</td>")[i];
    }
    transformHTML += "</tr>"
  }
  //Update design table HTML using 'transformHTML'
  document.getElementById('design_window').innerHTML = "<span style='font-size:16px;margin-left:90px;'>Sense Hat Art Designer</span><table id='design_table'>" + transformHTML + "</table>";
}


function rotate_right (){
 //newcell = document.getElementById("design_table").rows[0].innerHTML.split("</td>")[0];
 //Get rows from design_table
 var rows = document.getElementById("design_table").rows;
 var transformHTML = "";
 //Set rowlength based on length of first table row
 var rowlength = document.getElementById("design_table").rows[0].innerHTML.split("</td>").length -1;
 //Start at top row and work our way down
 for (i = 0; i < rowlength ; i ++){
   var current_row = rows[i].innerHTML.split("</td>")
   transformHTML += "<tr>"
   //For each row we will copy each table cell from right to left
   for (n = rowlength-1; n >= 0 ; n --){
     //transformHTML += current_row[n];
     transformHTML += document.getElementById("design_table").rows[n].innerHTML.split("</td>")[i];
   }
   transformHTML += "</tr>"
 }
 //Update design table HTML using 'transformHTML'
 document.getElementById('design_window').innerHTML = "<span style='font-size:16px;margin-left:90px;'>Sense Hat Art Designer</span><table id='design_table'>" + transformHTML + "</table>";
}

function parse_csv() {
    var rows = document.getElementById("design_table").rows;
    var testHTML = "[";
    for (i=0; i< rows.length; i++){
      testHTML += "<br>";
      for (n=0; n< rows.length; n++){
        var currentcolor = rows[i].cells[n].style.backgroundColor;
        if (currentcolor.includes("rgba")){
          currentcolor = "rgb(0, 0, 0)"
        }
        testHTML += currentcolor.replace("rgb","") + ",";
      }
    }
    document.getElementById('code_window').innerHTML = testHTML + "<br>]";
}

function clipboard() {
  /* Get the text field */
  var copyText = document.getElementById("code_window");

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}
