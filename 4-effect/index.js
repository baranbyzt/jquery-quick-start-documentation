



$(document).ready(function(){


  $(".btn2").click(function(){
      // show --> Makes the dispalay value of a content visible.
      $("div").show();
    });
    $(".btn1").click(function(){
        // hide --> set a content's dispalay value to none.
      $("div").hide();
    });
  
    $(".btn3").click(function(){
// toggle --> appears if a content's dispalay is none. If it is visible, it does none.
        // Completes the process by extending the time it takes into the toggle.
        // delay --> we specify the time to pass before performing an operation.
      $("div").delay(3000).toggle(2000);
    });
  
    $(".btn4").click(function(){
        // hide -->Sets a content's dispalay value to none.
      $("div").sideDown(1000);
    });


    /*
The slideUp() method slides-up (hides) the selected elements.
Note: Hidden elements will not be displayed at all (no longer affects the layout of the page).
    */
    $(".btn5").click(function(){
        $("div").slideUp();
      });

      /*
The slideDown() method slides-down (shows) the selected elements.
Note: slideDown() works on elements hidden with jQuery methods and display:none in CSS (but not visibility:hidden).
      */
      $(".btn6").click(function(){
        $("div").slideDown();
      });

      /*
The SlideToggle() method toggles between slideUp() and slideDown() for selected items.
This method checks the selected items for visibility. SlideDown(),
 run if an item is hidden. SlideUp() is run if an item is visible - This creates a transition effect.
      */
      $(".btn7").click(function(){
        $("div").slideToggle();
      });

/*
The animate() method performs a custom animation of a set of CSS properties.
This method changes an element from one state to another with CSS styles. 
The CSS property value is changed gradually, to create an animated effect.
Only numeric values can be animated (like "margin:30px"). 
String values cannot be animated (like "background-color:red"),
 except for the strings "show", "hide" and "toggle". These values allow hiding and showing the animated element.
Tip: Use "+=" or "-=" for relative animations.
*/
      $("#btn1").click(function(){
        $("#box").animate({height: "300px"});
      });
      $("#btn2").click(function(){
        $("#box").animate({height: "100px"});
      });




  });