$(function(){


$.get('https://www.reddit.com/r/awww.json').done(function(json){
    json.data.children.forEach(function(json) {
      console.log(json.data.title);

      var title = json.data.title;
      var thumbnail = json.data.thumbnail;
      var author = json.data.author;
      $('#images').append("<div .container ><p>" + 'Title: ' + title +
      '</br>' + 'Author: ' + author + '</p><img src=' + thumbnail + '></div>');
    })
  })
$('#images div:gt(15)').remove();



});
