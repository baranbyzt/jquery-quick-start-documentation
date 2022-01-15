

/*
WHY JQUERY
jquery promises us a lot of convenience with the promise of "write less and do more".
The purpose of jquery is to control the data in html with javascript and to provide 
communication between them. and here you can also use javascript itself. but jquery
allows us to write less code and execute our operations in a faster and simpler way.


JQUERY is helping us  these Subjects:

+ html/dom MANİPULATİON
+ CSS manipulation
+ HTML event methods
+ Effects and animations
+ AJAX
+ Utilities

In the topic of our 1st part, we will talk about selectors, which are
 n important structure for jquery.
*/

// our function here is after all the images, links, api... on the page are loaded
// is used to run the codes here, thus avoiding potential problems.
$(document).ready(function(){

    // we used tag selector here.
    // Allows us to process all p tags on the page.
$('p').css('color','blue');
// we selected here according to the id value of the item we want to select
$('#tag_id_p').css('color',"yellow");
// we have selected here according to the class value of the item we want to select
$('.tag_class_p').css('color',"red");


// :first --> it returns the first record of the specified elements.
$("li:first").css('background-color',"blue");

// :last --> it fetches the last record of the specified elements.
$("li:last").css('background-color',"red");

// targets the first child from the contents of the parent element specified here.
$('.main_ul li:first-child').css('color',"white");

// targets the last child of the item's contents of the parent specified here.
$('.main_ul li:last-child').css('color',"yellow");

// find() --> id,class,tag... whatever under the element specified here
// allows us to find it and act on it.
$('.main_ul').find(".middle_li").css("background-color","green");


//eq() --> with the id,class,tag... whatever of the element specified here
// rank among all the elements with the same value
// we say we need to take action.
$("b:eq(5)").css("background-color","red");

// here from the items we select with the not() function
// It is used to process elements other than the parameter whose class is middle_div.
$('div').not(".middle_div").css({"background-color":"blue"});


// here from the items we select with the not() function
// It is used to process the parameter whose class is middle_div.
// but it doesn't do these operations on elements other than middle_div.
$('div').filter(".middle_div").css({"background-color":"yellow"});


// is --> is symbol to compare class,id,tag... in if queries
 //It provides convenience to us in queries such as and do this if it exists.
if($("div").is('.middle_div')){
    $('#middle_i').text("that is true");
}
});