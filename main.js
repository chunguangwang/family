var i = 0;
var myName = "I love Xinyu";
$p1 = $("p#p1");
$p1.text("That's it!");
$('div#div1').on('click', function() {
i++;
if (i%2 != 0) {
$p1.text("My wife and me love eating pickled fish.");
$('img').attr("src", "https://codecademy-content.s3.amazonaws.com/courses/web-beginner-en-3pc6w/images/avatar.jpg");
}
else {
$p1.text("I love long walk on beach with my wife.");
$('img').attr("src", "seaside.png");
}
});
$('form').on('submit', function(event) {
 $('p#p2').text($("input#input1").val());
 event.preventDefault();
});


var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];
var letterColors = [red, orange, green, blue, purple];
$pa = $('p');

drawName(myName, letterColors);

if(10 < 3)
{
    bubbleShape = 'square';
}
else
{
    bubbleShape = 'circle';
}

bounceBubbles();