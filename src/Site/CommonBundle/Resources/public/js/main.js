$(function() {
    $('audio,video').mediaelementplayer({
      success: function(player, node) {
        $('#' + node.id + '-mode').html('mode: ' + player.pluginType);
      }
    });
    $('.carousel').carousel({
        interval: 4000
    }).hover(function(){
        $(this).find('.carousel-control').show();
    },function(){
        $(this).find('.carousel-control').hide();
    });
    $('.carousel-control').hide();
    $('.lightbox').click(function(){
        var _lightbox = $(this);
        $id = $(this).attr('id');
        $id_arr = $id.split('-');
        var url = BASE_URI+'common/frontend/pubvideo/'+$id_arr[1];
        $("#inline").find('video').attr('src',url);
        $.fancybox.open($("#inline"),{
            scrolling: false,
            closeBtn: true,
            keys: {
                close: []
            },
            helpers: {
                overlay: {
                    closeClick: false,
                }
            }
        });
    });
});