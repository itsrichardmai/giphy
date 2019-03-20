// // initial array of giphys 
// var giphys = ["The Matrix", "The NoteBook", "Mr. Nobody", "The Lion King"]
// var queryURL = "";
// // function for displaying GIPHY infos 
// $("button").on("click", function(){
//     var giphy = $(this).attr("data-name");

//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + giphy +  "&api_key=dc6zaTOxFJmzC&limit=10";

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function(response){
//     var results = response.data
// })
// });
// // function displayGiphyInfo() {
//     // var giphy = $(this).attr("data-name");
    
    
//     console.log(queryURL)

// // this function renders the buttons in the buttons div.

// function renderButtons() {

//     $("#buttons-view").empty();

//      for (var i = 0; i < giphys.length; i++) {
//         var a = $("<button>");
//         a.addClass("giphy-btn");
//         a.attr("data-name", giphys[i]);
//         a.attr("value", giphys[i]);
//         a.text(giphys[i]);
//         // console.log(a) 
//         $("#buttons-view").append(a);
//      }
// }
// $(".gif").on("click", function(){
//     var state = $(this).attr("data-state");

//     if (state === 'still') {
//         $(this).attr("src", $(this).attr("data-animate"));
//         $(this).attr("data-state", "animate");
//     } else {
//         $(this).attr("src", $(this).attr("data-still"));
//         $(this).attr("data-state", "still");
//     }
// })





// WHY IS THIS CODE NOT WORKING?
$("#add-Giphy").on("click", function(event) {
    event.preventDefault();
    var userInput = $("#giphy-input").val();
    var giphyBtn = $("<button>")
    giphyBtn.addClass("giphy-btn btn btn-light")
    giphyBtn.attr("data-name", userInput);
    console.log(giphy1);

    giphyArray.push(userInput);
    
    renderButtons();
})


// // on click event that will be added to all objects with a class of .giphy-btn

// // $(document).on("click", ".giphy-btn", displayGiphyInfo);


// renderButtons();
var queryURL = ""
var giphyArray = ["Spongebob", "The Matrix", "Neo", "Patrick", "String"]

$(".giphy-btn").on("click", function()  {

var giphy = $(this).attr("data-name");

displayGiphyInfo(giphy, queryURL);
})


// this function empties the buttons display div then appends the buttons until we have completely looped through the array 
function renderButtons() {
        // $("#buttons-view").empty();

     for (var i = 0; i < giphyArray.length; i++) {
        var a = $("<button>");
        a.addClass("giphy-btn btn btn-light");
        a.attr("data-name", giphyArray[i]);
        // console.log(giphyArray[i])
        a.attr("value", giphyArray[i]);
        a.text(giphyArray[i]);
        $("#buttons-view").append(a);
        console.log(giphyArray[i]);
     }
}
// when the document is ready, we will display the buttons in our array
$(document).ready(function(){
    renderButtons();
})

// this function will set the queryURL and giphy string value to search.
function displayGiphyInfo() {
    
    queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    giphy + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    })
}

