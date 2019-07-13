$(document).ready(function () {

      var score = 0;
      var clickcount = 0;
      var loss = 0;





      //get random number

      function compguessed() {
            return Math.floor(Math.random() * 100 + 20)
      }
      //get random number for 4 crystals

      function crystall() {
            return Math.floor(Math.random() * 20 + 5)
      }
      var crys1 = crystall();
      var crys2 = crystall();
      var crys3 = crystall();
      var crys4 = crystall();

      //output computer random number
      coguess = compguessed();

      $("#randomv").text("YOUR TARGET IS :" + coguess);

      //assign values to the 4 crystals

      function isloss() {
            clickcount = 0;
            $("#currentcount").text("CLICK COUNT IS: " + clickcount);
            loss++;
            $("#loss").text("LOSSES: " + loss);
            coguess = compguessed();
            $("#randomv").text("YOUR TARGET IS :" + coguess);
            crys1 = crystall();
            crys2 = crystall();
            crys3 = crystall();
            crys4 = crystall();
      }

      function iswin() {
            clickcount = 0;
            $("#currentcount").text("CLICK COUNT IS: " + clickcount);
            score++;
            $("#wins").text("WINS: " + score);
            coguess = compguessed();
            $("#randomv").text("YOUR TARGET IS :" + coguess);
            crys1 = crystall();
            crys2 = crystall();
            crys3 = crystall();
            crys4 = crystall();
      }

      function resets() {
            score = 0;
            clickcount = 0;
            loss = 0;
            crys1 = crystall();
            crys2 = crystall();
            crys3 = crystall();
            crys4 = crystall();
            
            
      }

      function check(clicks){
            if (clicks< coguess) {
                  $("#currentcount").text("CLICK COUNT IS: " + clicks);
            } else if (clicks> coguess) {
                  isloss();
            } else if (clicks == coguess) {
                  iswin();
            } else {
                  resets();
            }
      }

      //for the 4 crystals we take the click event function.
      $("#c1,#c2,#c3,#c4,#resetgame").click(function() {
            var id = this.id;
          
//based on the clic,check if the click > computerguess or < or = .
            if (id == "c1") {
                  clickcount = crys1 + clickcount;
                 check(clickcount);

            } else if (id == "c2") {
                  clickcount = crys2 + clickcount;
                  check(clickcount);


            } else if (id == "c3") {
                  clickcount = crys3 + clickcount;
                  check(clickcount);

            } else if (id == "c4") {
                  clickcount = crys4 + clickcount;
                  check(clickcount);
            }
            else{resets()}
            
      });

      
});