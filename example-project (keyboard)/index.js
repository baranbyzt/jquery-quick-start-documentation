
let item_q = $(".item_q");
let item_w = $(".item_w");
let item_e = $(".item_e");
let item_r = $(".item_r");
let item_t = $(".item_t");
let item_y = $(".item_y");
let item_u = $(".item_u");
let item_ı = $(".item_ı");
let item_o = $(".item_o");
let item_p = $(".item_p");
let item_ğ = $(".item_ğ");
let item_ü = $(".item_ü");
let item_a = $(".item_a");
let item_s = $(".item_s");
let item_d = $(".item_d");
let item_f = $(".item_f");
let item_g = $(".item_g");
let item_h = $(".item_h");
let item_j = $(".item_j");
let item_k = $(".item_k");
let item_l = $(".item_l");
let item_ş = $(".item_ş");
let item_i = $(".item_i");
let item_z = $(".item_z");
let item_x = $(".item_x");
let item_c = $(".item_c");
let item_v = $(".item_v");
let item_b = $(".item_b");
let item_n = $(".item_n");
let item_m = $(".item_m");
let item_ö = $(".item_ö");
let item_ç = $(".item_ç");

var abc = document.getElementById("main_sayac");

let bigbang = 0;



let letter= [
    item_q,item_w,item_e,item_r,item_t,
    item_y,item_u,item_ı,item_o,item_p,
    item_ğ,item_ü,item_a,item_s,item_d,
    item_f,item_g,item_h,item_h,item_j,
    item_k,item_l,item_ş,item_i,item_z,
    item_x,item_c,item_v,item_b,item_n,
    item_m,item_ö,item_ç
]

// here we define a random number between 0 and 33.
var  random_number = Math.floor(Math.random() * 33);

$(document).ready(function(){ 

console.log("true number ---> "+ letter[random_number].text())




 $(letter[random_number]).css({
    "color": "rgb(0, 0, 0)",
    "animation": "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
    "transform":" translate3d(0, 0, 0)",
    "background-color":"rgb(43, 255, 0)" ,
  
});

 

$('html').keydown(function(event){
    let basilan_tus = event.key;


    for (let i = 0; i < letter.length; i++) {
if(letter[i].text() == basilan_tus){
    $(letter[i]).css({
        "animation": "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
        "transform": "translate3d(0, 0, 0)",
        "background-color":"red",
      });
} else{}
      }

     

if(letter[random_number].text() == basilan_tus){
  console.log("correct")
  
  bigbang=bigbang+10;
  abc.innerHTML = bigbang

  $(letter[random_number]).css({
    "color": "rgb(0, 0, 0)",
    "animation": "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
    "transform":" translate3d(0, 0, 0)",
    "background-color":"rgb(48, 173, 136)" ,
  
});
 

  random_number = Math.floor(Math.random() * 33);
  console.log("yenisi --> "+ letter[random_number].text())


  $(letter[random_number]).css({
    "color": "rgb(0, 0, 0)",
    "animation": "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
    "transform":" translate3d(0, 0, 0)",
    "background-color":"rgb(43, 255, 0)" ,
   " animation-iteration-count": "infinite"
});

}
else{ 


  console.log("that is not correct ----> "+ letter[random_number].text())


bigbang= bigbang -10;
abc.innerHTML = bigbang;

}



 })








});

















