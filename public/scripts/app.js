console.log("Sanity Check: JS is working!");

$(document).ready(function(){

$.ajax({
  method: 'GET',
  url: '/api/shows',
  success: onSuccess,
  error: onError
})

});


function onSuccess(json) {
  console.log(json);
}

function onError(json) {
  console.log('something went wrong w/ ajax');
}
