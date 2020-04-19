// Step 1:
      // Use the following link inside the Audio function below:
      // https://p.scdn.co/mp3-preview/ed5a443bc86176135ebca8a114f66f4d814d4c90
      $("#start").on("click", function () {
        $("#timer-left").removeall();

        clearTimeout(time1);
        clearTimeout(time2);
        clearTimeout(time3);
        $("#timer-left").remove();
      var time1;
      var time2;
      var time3;

      var audio = new Audio("raven.mp3");

      //  Step 2: do the following between the --- comments
      //  after 5 seconds, execute the fiveSeconds function
     time1 = setTimeout(fiveSeconds, 1000 * 5);
      //  after 10 seconds, execute the tenSeconds function
     time2 = setTimeout(tenSeconds, 1000 * 10);

      //  after 15 seconds, execute the timeUp function
     time3 =  setTimeout(timeUp, 1000 * 15);

      // ---------------------
      // CODE STEP TWO HERE
      // ---------------------


      // Step 3:
      // Fill in the blanks to these functions.
      function fiveSeconds() {

        // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
        // console log 10 seconds left
        $("#time-left").append("<h2> About 10 second Left!</h2>");
        console.log("10 seconds left!");
        
    }
    
    
    function tenSeconds() {
        
        // in the element with an id of time-left add an h2 saying About 5 Seconds Left!
        // console log 5 seconds left
        $("#time-left").append("<h2> About 5 Seconds Left!</h2>");
        console.log("5 seconds left!");
        
    }
    
    
    function timeUp() {
        
        // in the element with an id of time-left add an h2 saying Time's Up!
        // console log done
        
        $("#time-left").append("<h2> Time's UP!</h2>");
        console.log("Done!");
        // The following line will play the audio file we linked to above.
        audio.play();

      }
    });
