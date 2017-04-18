/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        $('#section-bio').css("font-size", "20px").css("fontFamily", "cursive")
        $('#section-quotes').css("font-size", "20px").css("fontFamily", "cursive")
        $('#section-praise').css("font-size", "20px").css("fontFamily", "cursive")

        // EXAMPLE: Looping over top rated recordings; replace with your code //
        //3 & 4.
         var $recordingSection = $('<section>').attr('id','section-recordings').appendTo($('#sidebar'));
         var $newList =$('<ul>').attr('id','list-recordings').appendTo($('#section-recordings'));
        
        
        let $topRated = data.discography.topRated;
        let $recordings = data.discography.recordings;
        let $header = $('<h2>').text('Recordings').prependTo($recordingSection).attr('class', 'recording').attr('id', 'recordings-header');
        
        
        
         _.map($topRated, (item, index, arr)=>{
         $("<li>").text(item.title).appendTo("#list-top-rated").hover(function(){
             $('#top-rated-image').attr('src', item.art);
         });
         });
         
        
         
         //5.
         _.map($recordings, function(item,index,arr){
             $('<li>').attr('class', 'recording' + index).appendTo('#list-recordings').hover(function(){
             $('#recording-image').attr('src', item.art);
         });
             $('<div>').attr('class', 'title').text('Title: ' + item.title).appendTo($('.recording'+index));
             $('<div>').attr('class', 'artist').text('Artist: ' + item.artist).appendTo($('.recording'+index));
             $('<div>').attr('class', 'release').text('Release: ' + item.release).appendTo($('.recording'+index));
             $('<div>').attr('class', 'year').text('Year: ' + item.year).appendTo($('.recording'+index));
         });
        
         //6.
         
         $('<div>').attr('id', 'image-container-top-rated').addClass('image-container').appendTo('#header-top-rated');
         $('<img>').attr('id', 'top-rated-image').attr('src', "images/album/voice-in-the-night.jpg").addClass('image').appendTo($('#image-container-top-rated'));
         $('<div>').attr('id', 'image-container-recording').addClass('image-container').appendTo('#recordings-header');
         $('<img>').attr('id', 'recording-image').attr('src',  "images/album/eastern-rebellion.jpg").addClass('image').appendTo($('#image-container-recording'));
         
         //7 
         var billyImages = data.images.billy;
         
         $('#image-billy').on('click', function(event){
            if(parseInt($('#image-billy').attr('i'), 10) === billyImages.length -1) {
              $('#image-billy').attr('i', 0);
            } else {
                $('#image-billy').attr('i', parseInt($('#image-billy').attr('i'), 10)+ 1);
            }
         $('#image-billy').fadeOut('fast', function(){
             $('#image-billy').attr('src', billyImages[$('#image-billy').attr('i')]);
         }).fadeIn('fast');
        });
         
        
         //9.
         
        
        let rider = data.rider;
        
         var createTable = function(riders) {
             var createRow = function(rider) {
                 var $row = $('<tr>');
                 var $type = $('<td>').text(rider.type);
                 var $desc = $('<td>').text(rider.desc);
                 $row.append($type);
                 $row.append($desc);
                 return $row;
             };
             var $table = $('<table>');
             var $rows = riders.map(createRow);
             $table.append($rows);
             return $table;
         };
      
         createTable(rider).appendTo('#section-quotes');
         /*
         var table = $('<table></table>').addClass('table');
         for(var i = 0; i < 3; i++){
         var row = $('<tr></tr>').addClass('rows').text(riders.type + i);
         table.append(row);
        }

        $('#section-quotes').append(table);
         */
         
         
         
         
         
         
         
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


