

// Here are the codes that will run when the page is fully loaded.
$(document).ready(function(){

  
    // add class : It allows us to assign a class we want inside a variable.
    $('.div_1').addClass('box flex');
    
    
    // hasclass : Queries whether a particular class is included in a variable or not.
    var check = $(".div_1").hasClass('box');
    if(check == true){
      console.log("true")
    } else
    {
      console.log("false")
    }
    
    })
         
      // removeClass : deletes the class we specified from the classes in a variable.
      $('.div_2').removeClass('flex');
    
    
    
    
      /*

   The toggle() method toggles between hide() and show() for the selected items.
    
    This method checks the selected items for visibility. show() is an element
    run if followed. hide() is run if an item is visible - This is a toggle
    creates the effect.
      */
      $(".button_1").click(function(){
        $("p").toggle();
      });
    
    
    

      // lenght returns the length of the string of a variable.
      $(".button_2").click(function(){

        // returns the corresponding value multiplicity.
        alert($("li").length);
      });



































