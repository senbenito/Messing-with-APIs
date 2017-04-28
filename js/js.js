$(document).ready(function() {
  var audio = document.createElement("audio");
  audio.src = "magicfly.mp3";


  $("#catbutton").on("click", function() {
    $("#catfact").html("");
  audio.play();
  audio.loop = true;
    // Get cat GIF
    var $yhr = $.getJSON("http://api.giphy.com/v1/gifs/search?q=cat&api_key=dc6zaTOxFJmzC");
    $yhr.done(function(gif) {
      console.log(gif);
      var randomIndex = Math.floor(Math.random() * gif.data.length);
      $(".giphy-embed").attr("src", gif.data[randomIndex].embed_url);
    }); //closes $yhr.done

    // Get cat fact
    var $xhr = $.getJSON("https://g-catfacts.herokuapp.com/api/facts?number=1");
    $xhr.done(function(data) {
      console.log(data);
      $("#catfact").append(`<hr><p class="actualFact"> ${data.facts[0]} </p><hr>`);
    }); //end $xhr.done
  }); //end #catbutton click listener

  $("#clear").on("click", function() {
    $("#catfact").html("");
    $(".giphy-embed").attr("src", "");
    audio.pause();
    audio.currentTime = 0;
  });//end clear button click listener
}); //end document ready
