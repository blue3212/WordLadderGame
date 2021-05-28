// Opens and displays the HTML file
function doGet() {
  return HtmlService.createHtmlOutputFromFile("Page.html");
}

// Takes an array of strings and returns an array of booleans
// that represent whether or not the respective string is a
// real word. In other words result[i] = whether str[i] is a real word
function findWord(str)
{
  var doc1 = DriveApp.getFilesByName("WordsByLength.TXT");
  var docStr = doc1.next().getBlob().getDataAsString();
  var result = [];
  for(var i = 0; i < str.length;++i)
  {
    let bool;
    if(docStr.indexOf((str[i]+'\r')) != -1)
    {
      bool = true;
    }
    else
    {
      bool = false;
    }
    result.push(bool);
  }
  return result;
}
