$(document).ready(function () {

                  var score = 0;
                  var clickcount = 0;
                  var loss = 0;

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


                  // when each crystal is clicked,add the count andcheck if this value is = or > than computerguess

                  $("#c1,#c2,#c3,#c4").click(function () {
                              var id = this.id;

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
                              } else if (clickcount > coguess && loss<10) {
                                    loss++;
                                    $("#loss").text("LOSSES: " + loss);
                                    coguess = compguessed();
                                    $("#randomv").text("YOUR TARGET IS :" + coguess);
                                    clickcount = 0;
                              }
                              else if (clickcount > coguess && loss >=10) {
                                    $('.cancelButton').append('<input type="button" id="cancelRoomBtn" class="btn btn-danger" value="GAmeOver" />');
                              }

                        
                              else {$("#win").text("WINS: " + loss);
                              
                        }
                              
                        });
                  });