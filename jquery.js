$('h1').css("color","green");
$('body').css("background","#ddd");
$('#first').css("font-size","36px");
$('.list').css("border","1px solid #000");
$('ul li').css("font-weight","bold");
$('h1 ~ p').css("color","green");
$('#hide-this').css("display","none");
$('#change-this').text("new statement");
$('#change-this').append(" moreee textttt!");

$('#replace-this').html("<p>content included</p><p>content included</p>");
$('#second li').text("change text");
$('#second li').append("more text");
x = $('<div id = "third">heeeeey</div>');
$('body').append(x);
$('#third').append("<ol><li>More items 1</li><li>More items 2</li><li>More items 3</li><li>More items 4</li></ol>");
