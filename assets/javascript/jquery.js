$(document).ready(function () {

      var score = 0;
      var clickcount = 0;
      var loss = 0;
function reset(){
      var score = 0;
      var clickcount = 0;
      var loss = 0;
}

function ww(){loss++;
      $("#loss").text("LOSSES: " + loss);
      coguess = compguessed();
      $("#randomv").text("YOUR TARGET IS :" + coguess);
      clickcount = 0;}

      //get random number

      function compguessed() {
            return Math.floor(Math.random() * 100 + 20)
      };
      //get random number for 4 crystals

      function crystall() {
            return Math.floor(Math.random() * 20 + 5)
      }


      //output computer random number
      coguess = compguessed();
      $("#randomv").text("YOUR TARGET IS :" + coguess);

      //assign values to the 4 crystals
      var crys1 = crystall();
      var crys2 = crystall();
      var crys3 = crystall();
      var crys4 = crystall();


    //start button to initialise the variables and start the game
// if(clicker=true;){
//       $("start").
// }
      $("#c1,#c2,#c3,#c4").click(function () {
            var id = this.id;

            if(clickcount>coguess){console.log('true')}
            if (id == "c1" && clickcount < coguess) {
                 
                  clickcount = crys1 + clickcount;
                  console.log(score);
                  console.log(clickcount);
                  $("#currentcount").text("YOUR CURRENT CLICK COUNT IS: " + clickcount);
            } else if (id == "c2" && clickcount < coguess) {
                  clickcount = crys2 + clickcount;
                  $("#currentcount").text("YOUR CURRENT CLICK COUNT IS: " + clickcount);
            } else if (id == "c3" && clickcount < coguess) {
                  clickcount = crys3 + clickcount;
                  $("#currentcount").text("YOUR CURRENT CLICK COUNT IS: " + clickcount);;
            } else if (id == "c4" && clickcount < coguess) {
                  clickcount = crys4 + clickcount;
                  $("#currentcount").text("YOUR CURRENT CLICK COUNT IS: " + clickcount);

            } else if (clickcount > coguess && loss < 10) {
                  loss++;
                  $("#loss").text("LOSSES: " + loss);
                  coguess = compguessed();
                  $("#randomv").text("YOUR TARGET IS :" + coguess);
                  clickcount = 0;
            } else if (clickcount > coguess && loss >= 10) {
                 return false;
            } else {
                  $("#win").text("WINS: " + score);

            }

      });
});