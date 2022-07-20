let linkStrona = 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php'

$('#przycisk').on('click', function()
{
    if($('#dane-programisty').length === 0){
        $("<div id='dane-programisty'>").appendTo('body')
    }

    $.getJSON(linkStrona, function(pobierz)
        {
            $('<p>').text(pobierz.imie).appendTo($('#dane-programisty'));
            $('<p>').text(pobierz.nazwisko).appendTo($('#dane-programisty'));
            $('<p>').text(pobierz.zawod).appendTo($('#dane-programisty'));
            $('<p>').text(pobierz.firma).appendTo($('#dane-programisty'));
        });
})
