$(function () {
    var chat = $.connection.chatHub;
    chat.client.addNewMessageToPage = function (name, message) {
        if (name == "Atir") {
            $('#discussion').append('<p style="color:green; text-align:left; width:500px"><strong><img = src="https://www.phplivesupport.com/pics/icons/avatars/public/avatar_7.png" title="Atir">'
                + ' </strong> ' + htmlEncode(message) + '</p>');
        }
        else if (name != "Atir") {
            $('#discussion').append('<p style="color:blue;text-align:right;"><strong><img = src="https://www.phplivesupport.com/pics/icons/avatars/public/avatar_71.png" title="Peter">'
                + ' </strong> ' + htmlEncode(message) + '</p>');
        }
    };

    $('#displayname').val(prompt('Enter your name:', ''));
    $('#message').focus();
    $.connection.hub.start().done(function () {
        $('#sendmessage').click(function () {
            chat.server.send($('#displayname').val(), $('#message').val());
            $('#message').val('').focus();
        });
    });
});

function htmlEncode(value) {
    var encodedValue = $('<div />').text(value).html();
    return encodedValue;
}