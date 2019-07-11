$(document).ready(function () {

      var score = 0;
      var loss = 0;

      //get random number

      var coguess = Math.floor(Math.random() * 100 + 20)
      //get random number for 4 crystals

      function crystall() {
            return Math.floor(Math.random() * 20 + 5)
      }


      //output computer random number

      $("#randomv").append(coguess);
      // $("#wins").text("SCORE IS",score);
      //assign values to the 4 crystals
      var crys1 = crystall();
      var crys2 = crystall();
      var crys3 = crystall();
      var crys4 = crystall();
      // console.log(coguess);
      // console.log(crys1);
      // console.log(crys2);
      // console.log(crys3);
      // when each crystal is clicked,add the count andcheck if this value is = or > than computerguess
      $("#c1").click(function () {
            score = crys1 + score;
            console.log(score);
      });
      $("#c2").click(function () {
            score = crys2 + score;
            console.log(score);

      });
      $("#c3").click(function () {
            score = crys3 + score;
            console.log(score);
      });
      $("#c4").click(function () {
            score = crys4 + score;
            console.log(score);
      });



});