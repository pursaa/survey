$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["person", "fav-food", "fav-music", "date",];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput).val();
    });

    $("#story").show();

    var dob = $("#born").val();
    var flavor = $("input:radio[name=flavor]:checked").val();
    var beverage = $("#beverage").val();
    var favoriteColor = $("#color").val();

    event.preventDefault();
  });
});
