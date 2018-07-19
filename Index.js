function initializeViz() {
  var placeholderDiv = document.getElementById("tableauViz");
  var url = "https://public.tableau.com/views/Demo-THX/Dashboard1?:embed=y&:display_count=yes&publish=yes";
  var options = {
    width: placeholderDiv.offsetWidth,
    height: placeholderDiv.offsetHeight,
    hideTabs: true,
    hideToolbar: true,
    onFirstInteractive: function () {
      workbook = viz.getWorkbook();
      activeSheet = workbook.getActiveSheet();
    }
  };
  viz = new tableau.Viz(placeholderDiv, url, options);
}   
