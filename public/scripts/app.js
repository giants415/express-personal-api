console.log("Sanity Check: JS is working!");

$(document).ready(function(){

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


function onSuccess(json) {
  console.log(json);
}

function onError(json) {
  console.log('something went wrong w/ ajax');
}
