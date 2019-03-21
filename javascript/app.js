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


// // on click event that will be added to all objects with a class of .giphy-btn

// // $(document).on("click", ".giphy-btn", displayGiphyInfo);


// renderButtons();
var queryURL = ""
var giphyArray = ["Spongebob", "The Matrix", "Neo", "Patrick", "String"]




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

    $("#addGiphy").on("click", function(event) {
        event.preventDefault();
        var userInput = $("#giphyForm").val();
        var giphyBtn = $("<button>");
        console.log(userInput)
        giphyBtn.addClass("giphy-btn btn btn-light");
        giphyBtn.attr("data-name", userInput);
        giphyBtn.text(userInput)
        giphyArray.push(userInput);
        console.log(giphyArray);
        $("#buttons-view").append(giphyBtn)
        
    })
})

// this function will set the queryURL and giphy string value to search.
function displayGiphyInfo() {
    var giphy = $(this).attr("data-name");
    queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    giphy + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response)
        var results = response.data.length
        for (var i = 0; i < results; i++) {
            var newDiv = $("<div>");
            var ratingDiv = $("<p>" + response.data[i].rating + "</p>");
            // var imgDiv = $("<img src=" + JSON.stringify(response.data[i].images["480w_still"].url) + "data-still=" + JSON.stringify(response.data[i].images["480w_still"].url) + "data-animate=" + JSON.stringify(response.data[i].images["original"].url) + "data-state=" + "still" + "class=" + "gif" + "</img>");
            // var imgDiv = $("<img src=" + JSON.stringify(response.data[i].images.fixed_height.url) + "</img>");
            var imgDiv = $("<img src=" + JSON.stringify(response.data[i].images.original_still.url) + "data-still=" + JSON.stringify(response.data[i].images.original_still.url) + "data-animate=" + JSON.stringify(response.data[i].images.original.url) + "data-state=" + "still" + "</img>");
            imgDiv.addClass("gif");
            // imgDiv.attr("src", response.data[i].images.fixed_height.url)
            var titleDiv = $("<h2>" + response.data[i].title + "</h2>")
            
            $(newDiv).prepend(titleDiv);
            $(newDiv).prepend(imgDiv);
            $(newDiv).append(ratingDiv);
            $("#displayDiv").prepend(newDiv);
        }
        console.log(response)
        console.log(response.data[0].type)
    })
}

    // $(".btn").on("click", function()  {

    //     var giphy = $(this).attr("data-name");
    //     // console.log(giphy + "HEHE XD");
    //     displayGiphyInfo(giphy);
    //     })

$(document).on("click", ".btn", displayGiphyInfo)
$(document).on("click", ".gif", handleGif)

function handleGif() {
 var state = $(this).attr("data-state");
 console.log(state)
 if (state === "data-still") {
     $(this).attr("src", $(this).attr("data-animate"));
     $(this).attr("data-state", "data-animate");
 } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "data-still");
 }
}