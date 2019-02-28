function init() {
  
    $('#subcat_html').load("templates/subcat.html");
    $('#refinput_html').load("templates/refinput.html");
    $('#generate_html').load("templates/generate.html");

    SingleAuthor = "<h2>Book with single author</h2>";
    ReferenceList = [];
    ReferenceList.push("Author /editor (surname or family name before initials)");
    ReferenceList.push("Year of publication (in round brackets)");
    ReferenceList.push("Title (in italics)");
    ReferenceList.push("Edition (only include the edition number if it is not the first edition)");
    ReferenceList.push("Place of publication: Publisher");
    ReferenceList.push("Series and volume number (where relevant)");
    //document.getElementById("form").innerHTML += ReferenceList[1];
}

function select_catagory(selected) {
  //Get html for selected subcategory to display secondary select menu
  //This content is loaded from templates/sub.html
  subcatHTML = document.getElementById(selected).innerHTML;
  //Populate #subcat with html for selected secondary select menu
  document.getElementById("subcat").innerHTML = subcatHTML;
}

function load_inputs(selected,label) {
  //Set Reference Builder label to currently selected reference type
  document.getElementById("type").innerHTML = "<h2>" + label + "</h2>";
  //Get html for user inputs for selected reference type
  //This content is loaded from templates/reference_input.html
  document.getElementById("reference_content").innerHTML = document.getElementById(selected).innerHTML;
}

function generate(refcode) {
  genrefcode = "gen_" + refcode;
  gentemplate_html = document.getElementById(genrefcode).innerHTML;
  document.getElementById("output").innerHTML = gentemplate_html;
}

function plugvalues() {

}
