console.log("Sanity Check: JS is working!");
var template;
var $showsList;
var allShows = [];

$(document).ready(function(){

  $showsList = $('#showTarget');

  var source = $('#shows-template').html();
  template = Handlebars.compile(source);

  $.ajax({
    method: 'GET',
    url: '/api/shows',
    success: onSuccess,
    error: onError
  })

  $('#newShowForm').on('submit', function(e) {
    e.preventDefault();
    console.log('new book serialized', $(this).serializeArray());
    $.ajax({
      method: 'POST',
      url: '/api/shows',
      data: $(this).serializeArray(),
      success: onSuccess,
      error: onError
    });
  });

}); //domReady closing tag

function render () {
  $showsList.empty();
  var showsHtml = template({ shows: allShows});
  $showsList.append(showsHtml);
}

function onSuccess(json) {
  console.log(json);
  allShows = json;
  render(allShows);
}

function onError(json) {
  console.log('something went wrong w/ ajax');
}
