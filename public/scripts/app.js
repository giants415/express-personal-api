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
    console.log('new show serialized', $(this).serializeArray());
    $.ajax({
      method: 'POST',
      url: '/api/shows',
      data: $(this).serializeArray(),
      success: newShowSuccess, //  push new show into client side array
      error: onError
    });
    location.reload();
  });

  $showsList.on('click', '.deleteButton', function () {
    console.log('delete button clicked', + $(this).attr('data-id'));
    $.ajax({
      method: 'DELETE',
      url: 'api/shows/' + $(this).attr('data-id'),
      success: deleteShow,
      error: deleteError,
    });
    location.reload();
  });

  $showsList.on('click', '.review', function (e) {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/books/' + $(this).attr('data-id'),
      data: $(this).serializeArray(),
      success: newReviewSuccess,
      error: newReviewError
    });
  });

}); //domReady closing tag

function render () {
  // $showsList.empty(); // by removing this line, I keep the shows I've already added on my HTML
  var showsHtml = template({ shows: allShows});
  $showsList.append(showsHtml);
}

function onSuccess(json) {
  console.log(json);
  allShows = json;
  render([allShows]);
}

function newShowSuccess (json) {
  console.log('new show created');
  // allShows.push(newShow);
  // console.log(newShow);
  allShows = json;
  render([allShows]);
}

function newReviewSuccess(json) {
  var show = json;
  var showId = show._id;
  for(var index = 0; index < allShows.length; index++){
    if(allShows[index]._id === showId){
      allShows[index] = show;
      break;
    }
  }
  render();
}

function newReviewError () {
  console.log('error adding the review');
}

function deleteShow(json) {
  var show = json;
  var showId = show._id;
  console.log('delete show ', showId);
  for(var index = 0; index < allShows.length; index++){
    if(allShows[index]._id === showId){
      allShows.splice(index, 1);
      break;
    }
  }
  render();
}

function onError(json) {
  console.log('something went wrong w/ ajax');
}

function deleteError() {
  console.log('error w/ deletion');
}
