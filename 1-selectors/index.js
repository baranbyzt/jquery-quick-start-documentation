

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

// buradaki fonksiyonumuz sayfadaki bütün resim,link,api... yüklendikten sonra
// buradaki kodların çalıştırılacağını böylece olası sorunları önlemek için kullanılır.
$(document).ready(function(){

    // burada tag selector kullandık. 
    // sayfadaki bütün p tagları için işlem yapmamızı sağlar.
$('p').css('color','blue');
// burada seçmek istediğimiz öğenin id değerine göre seçtik
$('#tag_id_p').css('color',"yellow");
// burada seçmek istediğimiz öğenin class değerine göre seçtik
$('.tag_class_p').css('color',"red");


// :first --> bu belirtilen elemanların ilk kayıt getirir.
$("li:first").css('background-color',"blue");

// :last --> bu belirtilen elemanların son kayıt getirir.
$("li:last").css('background-color',"red");

// burada belirtilen ebebeyin öğenin içindekilerden ilk çocuğu hedef alır.
$('.main_ul li:first-child').css('color',"white");

// burada belirtilen ebebeyin öğenin içindekilerden son çocuğu hedef alır.
$('.main_ul li:last-child').css('color',"yellow");

// find() --> burada belirtilen elemanın altındaki id,class,tag... her ne ise 
// onu bulmamıza ve üzerinde işlem yapmamızı sağlar. 
$('.main_ul').find(".middle_li").css("background-color","green");


//eq() --> burada belirtilen öğenin id,class,tag... her ne ise onunla
// aynı değere sahip elemanların hepsinin arasında kaçıncı sıradakine 
// işlem yaptırmamız gerektiğini söylüyoruz.
$("b:eq(5)").css("background-color","red");

// burada not() fonnksiyonu ile seçtiğimiz öğelerin içinden
// class'ı middle_div olan paramatre dışındaki öğelere işlem yaptırmak için kullanılır.
$('div').not(".middle_div").css({"background-color":"blue"});


// burada not() fonnksiyonu ile seçtiğimiz öğelerin içinden
// class'ı middle_div olan paramatreye  işlem yaptırmak için kullanılır.
// ama middle_div dışındaki öğelere bu işlemleri yaptırmaz.
$('div').filter(".middle_div").css({"background-color":"yellow"});


// is --> is simgesi if sorgularında class,id,tag... karşılaştırmak için
// ve o var ise bunu yap şeklindeki sorgularda bizlere kolaylıklar sağlar.
if($("div").is('.middle_div')){
    $('#middle_i').text("that is true");
}
});