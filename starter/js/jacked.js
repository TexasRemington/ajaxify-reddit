function get(){
    var json = '.json';
    var urlsmall = 'https://www.reddit.com/';
    var url = urlsmall + json;
    // 
    // var locations = $('#navigation li').val()
    // $('#navigation a').on('click', function(){
    //  var sort = (this).text();
    // })

    var data = {

    };
  incomingData = $.ajax({
    url: url,
    type: 'GET',
    dataType: 'json',
    data: data
  })
  incomingData.done(function(response){

      console.log('response: ', response);

    $('#main').append('<ul id="content"></ul>');
    for(i=0;i<response.data.children.length;i++){
      var respData = response.data.children[i].data;
        var ids = respData.id,
         images = respData.images,
         visited = respData.visited,
         thumbnail = respData.thumbnail,
         url = respData.url,
         subreddit = respData.subreddit;
      $('#content').append('<li>'+subreddit+'</li>').append('<a href="'+url+'" ><img src="'+thumbnail+'"onerror=$(this).hide()></a>');
    }
  })
  incomingData.fail(function(error){
    console.log('error',error);
  })
}
