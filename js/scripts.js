$(document).ready(function() {
  // $("#blanks form").submit(function(event) {
  //   var blanks = ["person", "fav-food", "fav-music", "date",];
  //
  //   blanks.forEach(function(blank) {
  //     var userInput = $("input#" + blank).val();
  //     $("." + blank).text(userInput).val();


    $("#formOne").submit(function(event) {
      var personInput = $("input#person").val();
      var dateInput = $("input#date").val();
      var fav-foodInput= $("input#fav-food").val();
      var fav-musicInput = $("input#fav-music").val();
      var fav-colorInput = $("input#fav-color").val();


      $(".person").text(personInput);
      $(".date").text(dateInput);
      $(".fav-food").text(fav-foodInput);
      $(".fav-music").text(fav-musicInput);
      $(".fav-color").text(fav-colorInput);



    $("#story").show();

    // var dob = $("#born").val();
    // var flavor = $("input:radio[name=flavor]:checked").val();
    // var beverage = $("#beverage").val();
    // var favoriteColor = $("#color").val();

    event.preventDefault();
  });
});
