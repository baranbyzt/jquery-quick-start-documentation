




// ready --> ready function is based on basic functions such as image, html, css on our page.
// It helps us to run the codes that we want to run after the processes are loaded.
$().ready(function(){ // 1. way
    // ---code---
})
$(function(){// 2. way
    // ---code---
})



/*
trigger --> we can trigger events of a different object from a different object.
*/
$(function(){
    $('#btn1').click(function(){
        alert("button 1 event clicked")
    })

    $('#btn2').click(function(){
       $('#btn1').trigger('click')
    })
})


$(function(){
   

    //keyup --> html so any keyboard in the whole page
    //  It is the place where you will work the moment you take your finger off the key..
    $("html").keyup(function(){
        console.log("a button has been released")
      });

      // keypress --> as long as you hold down any key on the keyboard
      // is where it will work.
      $("html").keypress(function(){
        console.log("works as long as a key is pressed.")
      });

      //keydown --> html, that is, any keyboard key in the whole page
    // is where it will run when you press it.
      $("html").keydown(function(){
        console.log("a key was pressed")
      });


// let's do a simple example. when you press any key on the keyboard
// Let's make an application that prints which one it is on the console.

$("html").keydown(function(eventss){
    console.log("-------------------------------")
    console.log("bir tuş basıldı -->  "+ eventss.key)
    console.log("-------------------------------")
  });

/*
To understand the keyboard features in more detail and to use javascript
so that you can better understand adding different features to them
we opened another github repo and developed a nice project
If you want, you can access and review it from the gibhub link below.

https://github.com/baranbyzt/css-art-8.git
*/

/*
here we will see mouse events


.click(): Runs when the selected object is clicked.
.dblclick() : Runs when the selected object is double-clicked.
.hover(): When hovering over the selected object and hovering over the mouse
It is used to run functions that will run. I'll explain .mouseenter() and .mouseleave() below
 combination of methods. If a single function is written as a parameter, .mouseenter() and .
 mouseleave() does the same.
.mousedown() : Runs when the mouse is pressed on the selected object.
.mouseup() : Runs when the mouse button is released on the selected object.
.mouseleave() : The event is triggered only when the mouse leaves the selected object.
.mouseout() : The event is triggered when the mouse leaves both the selected object and its child elements.
.mouseenter() : The event is triggered only when the mouse hovers over the selected object. It is usually used in conjunction with the .mouseleave() method.
.mouseover() : The event is triggered when the mouse is hovered over both the selected object and its child elements. Generally
Used with the .mouseout() method.
.mousemove(): Runs as the mouse moves over the selected object and its child elements.
*/


$("#btn_1").click(function(){
    alert("btn_1 tıklandı")
  });


  $("#btn_2").dblclick(function(){
    alert("btn 2 kere tıklandı")
  });


  $("#btn_3").mouseenter(function(){
    alert("You entered p1!");
  });


  $("#btn_4").mouseleave(function(){
    alert("Bye! You now leave p1!");
  });


  $("#btn_5").mousedown(function(){
    alert("Mouse down over p1!");
  });


  $("#btn_6").mouseup(function(){
    alert("Mouse up over p1!");
  });

/*
Method on(), one or more for selected items
  Adds event handler.
 */
  $("#btn_7").on({
    mouseenter: function(){
      $(this).css("background-color", "lightgray");
    },
    mouseleave: function(){
      $(this).css("background-color", "lightblue");
    },
    click: function(){
      $(this).css("background-color", "yellow");
    }
  });


  $("#btn_8").hover(function(){
    alert("You entered p1!");
  },
  function(){
    alert("Bye! You now leave p1!");
  });





  
// The event is dispatched to an item when the user presses a key on the keydown keyboard
$(document).keydown(function (event) { 
    

// The status of pressing the "Alt" key is checked.
  // here it works if the user presses the "Alt" key.
  if(event.altKey){
      console.log("alt key presseds")
  }
  
  
// The status of pressing the "Shift" key is checked.
  // here it works if the user presses the "Shift" key.
  else if(event.shiftKey){
      console.log("shift key presseds")
  }
  
  // The status of pressing the "ctrl" key is checked.
  // here it works if the user presses the "ctrl" key.
  else if(event.ctrlKey){
      console.log("ctrl key presseds")
  }
  
  });
  
  
  

  
})
