var searchTerm = "stadium";
var begin_date = "20180301";
var end_date = "20180801";
var numRecords = "5";

var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=3fca2f37a4504ea486188d6bcc1ff6f3&q="+searchTerm+"&begin_date="+begin_date+"&end_date="+end_date+"&limit="+numRecords
console.log(queryUrl);
  $.ajax({
    url: queryUrl,
    method: 'GET',
  }).done(function(result) {
    console.log(result);
  }).fail(function(err) {
    throw err;
  });

  //?q - search term
  //?limit  - number of records to retrieve
  //?begin_date - start year Format: YYYYMMDD
  //?end_date - end year Format: YYYYMMDD