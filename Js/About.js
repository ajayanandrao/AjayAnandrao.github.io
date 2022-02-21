function name () {
    document.getElementById("name").style.display = "none";
    }
    
    function ProductOn() {
      document.getElementById("overlay").style.display = "block";
    }
    
    function ProductOff() {
      document.getElementById("overlay").style.display = "none";
    }
  
  
  $(function(){
        $("#includedContent").load("visual.html"); 
      });
  
      $(function(){
        $("#Experience").load("Experience.html"); 
      });
  
  
      $(function(){
            $("#header-nav").load("Header.html"); 
          });
  
          $(function(){
            $("#Footer").load("Footer.html"); 
          });
  