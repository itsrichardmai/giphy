renderButtons() {
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