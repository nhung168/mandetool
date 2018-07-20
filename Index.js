window.onload = function () {
  var vizDiv = document.getElementByID('viz');
  var vizURL = "https://public.tableau.com/shared/JJ2JNPJWP?:display_count=yes";
  var options = {
       width : '600px',
       height: '540px',
        };
   viz = new tableaauSoftware.Viz(vizDiv, vizURL, options);
}   
