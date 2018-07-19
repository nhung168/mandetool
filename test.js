function querySheets() {
  var sheets = workbook.getPublishedSheetsInfo();
  var text = getSheetsAlertText(sheets);
  text = "Sheets in the workbook:\n" + text;
  alert(text);
}    
