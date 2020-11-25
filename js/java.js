$(document).ready(function(){  
    //Make iggy run
    $("#iggyjs").click(function(){
        $(".iggygoes").css("display", "block")
    })
    
    //Modal Popup
    
     $("#popup0").click(function(){
        $(".modal0").css("display", "block")
    }); 
    $(".closebutton").click(function(){
        $(".modal0").css("display", "none")
    });
    
    
    $("#popup1").click(function(){
        $(".modal1").css("display", "block")
    }); 
    $(".closebutton").click(function(){
        $(".modal1").css("display", "none")
    });
    
    
    $("#popup2").click(function(){
        $(".modal2").css("display", "block")
    }); 
    $(".closebutton").click(function(){
        $(".modal2").css("display", "none")
    });
    
    
    $("#popup3").click(function(){
        $(".modal3").css("display", "block")
    }); 
    $(".closebutton").click(function(){
        $(".modal3").css("display", "none")
    });
    
    
        $("#popup4").click(function(){
        $(".modal4").css("display", "block")
    }); 
    $(".closebutton").click(function(){
        $(".modal4").css("display", "none")
    });
///Test Submit Help Needed
    
    
    
        $('input[type="submit"]').click(function(){
      
            if($('input[name=question1]:checked').val() == "building"){
                $("#question1Result").append("<p>Yay! You Got it.</p>");
            
                console.log("correct answer");
            
            } else {
                $("#question1Result").append("<p>Nah! Try Again.</p>");
                console.log("wrong answer");
            };
            event.preventDefault();
        });
         $('input[type="submit"]').click(function(){
      
            if($('input[name=question2]:checked').val() == "glue"){
                $("#question2Result").append("<p>Yay! You Got it.</p>");
                console.log("correct answer");
            
            } else {
                $("#question2Result").append("<p>Nah! Try Again.</p>");
                console.log("wrong answer");
            };
            event.preventDefault();
        });
        $('input[type="submit"]').click(function(){

                if($('input[name=question3]:checked').val() == "teacher" || "iggy" || "igm" || "igf"){
                    $("#question3Result").append("<p>Whatever! You Like.</p>");
                    console.log("correct answer");

                } 
                event.preventDefault();
            });
    
        
    
    
    
    
// Make Your Own Sphinix
    $("#makeBS").click(function(Event){
            
            Event.preventDefault()
            var userChoice = prompt("Chose Sphinix Length Between 1-10?");
            var computerChoice = Math.ceil(Math.random() * 10);
            var myChoi = (userChoice/2 + computerChoice/2);
            var myChoice = Math.ceil(myChoi);

            if(userChoice == computerChoice){
                alert("Yay! We got the same choice.")
            }

            else if(userChoice !== computerChoice){
                alert("Lets make something in between" + " " + "of" + " " + userChoice + " " + "and" + " " + computerChoice)
                alert("Let's Make:" + " " + myChoice + " " + "storeys building.")

            }

            if(myChoice == 1){
                $(".a").css("display", "block");
            }
                if(myChoice == 2){
                $(".a, .b").css("display", "block");
            }
                if(myChoice == 3){
                $(".a, .b, .c").css("display", "block");
            }
                if(myChoice == 4){
                $(".a, .b, .c, .d").css("display", "block");
            }
                if(myChoice == 5){
                $(".a, .b, .c, .d, .e").css("display", "block");
            }
                if(myChoice == 6){
                $(".a, .b, .c, .d, .e, .f").css("display", "block");
            }
                if(myChoice == 7){
                $(".a, .b, .c, .d, .e, .f, .g ").css("display", "block");
            }
                if(myChoice == 8){
                $(".a, .b, .c, .d, .e, .f, .g, .h").css("display", "block");
            }
                if(myChoiceChoice == 9){
                $(".a, .b, .c, .d, .e, .f, .g, .h, .i").css("display", "block");
            }
                if(myChoice == 10){
                $(".a, .b, .c, .d, .e, .f, .g, .h, .i, .j").css("display", "block");
            }
    });
});