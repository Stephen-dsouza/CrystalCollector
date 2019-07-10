

var random = "";
var crystal1 = "";
var crystal2 = "";
var crystal3 = "";
var crystal4 = "";
// Computer to pick random from the array  between 19 and 120
function guess() {
  return Math.floor(Math.random() * (120- 19 + 1)) + 19;
}
var random=guess();
$(".randomv").text(random);



