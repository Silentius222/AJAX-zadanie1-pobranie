let linkStrona = 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php'

$('#przycisk').on('click', function()
{
    if($('#dane').length === 0){
        $("<div class='dane'>").appendTo('body')
    }

    $.getJSON(linkStrona, function(pobierz)
        {
            $('<p>').text(pobierz.imie).appendTO('#dane');
            $('<p>').text(pobierz.nazwisko).appendTO('#dane');
            $('<p>').text(pobierz.zawod).appendTO('#dane');
            $('<p>').text(pobierz.firma).appendTO('#dane');
        });
})