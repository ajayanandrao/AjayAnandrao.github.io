   
    window.onscroll = function() {myFunction()};
  function myFunction() {
    if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
      document.getElementById("myImg").className = "slideUp";
    }
  }


// Arrow js start//////////////////////////////////////////////////////////
  function runIt() {
      
      $( "#f" ).animate({ marginTop: "15" }, 500 )
      $( "#f" ).animate({ marginTop: "-=0" }, 300 )
      $( "#f" ).animate({ marginTop: "-=15" }, 500)
      
      $( "#f" ).slideDown( "normal", runIt );
    
    }
    runIt();
 
        $(function(){
          $("#header-nav").load("Header.html"); 
        });

        $(function(){
          $("#Footer").load("Footer.html"); 
        });