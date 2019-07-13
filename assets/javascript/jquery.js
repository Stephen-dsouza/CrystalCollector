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
      function reset() {
            score = 0;
            clickcount = 0;
            loss = 0;
      }

      //for the 4 crystals we take the click event function
      $("#c1,#c2,#c3,#c4").click(function () {
            var id = this.id;
            // If the click count < than the computer guess and crystal 1 is selected 

            if (id == "c1") {
                  clickcount = crys1 + clickcount;
                  if (clickcount < coguess) {
                        $("#currentcount").text("CLICK COUNT IS: " + clickcount);
                  } else if (clickcount > coguess) {
                        isloss();
                  } else if (clickcount == coguess) {
                        iswin();
                  } else {
                        reset();
                  }

                  
            } else if (id == "c2") {
                  clickcount = crys2 + clickcount;
                  if (clickcount < coguess) {
                        $("#currentcount").text("CLICK COUNT IS: " + clickcount);
                  } else if (clickcount > coguess) {
                        isloss();
                  } else if (clickcount == coguess) {
                        iswin();
                  } else {
                        reset();
                  }

                 
            }
            else if (id == "c3") {
                  clickcount = crys3 + clickcount;
                  if (clickcount < coguess) {
                        $("#currentcount").text("CLICK COUNT IS: " + clickcount);
                  } else if (clickcount > coguess) {
                        isloss();
                  } else if (clickcount == coguess) {
                        iswin();
                  } else {
                        reset();
                  }

               
            }
            else if (id == "c4") {
                  clickcount = crys4 + clickcount;
                  if (clickcount < coguess) {
                        $("#currentcount").text("CLICK COUNT IS: " + clickcount);
                  } else if (clickcount > coguess) {
                        isloss();
                  } else if (clickcount == coguess) {
                        iswin();
                  } else {
                        reset();
                  }
            }

            console.log(coguess);
            console.log(score);
                  console.log(clickcount);
                  console.log("crystal1" +crys1);
                  console.log(crys2);
                  console.log(crys3);
                  console.log(crys4);
      });
});