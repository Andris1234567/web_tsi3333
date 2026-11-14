
$(document).ready(function () {

    // 1. ANIMĀCIJA - fadeIn()
    // Sākuma teksta pakāpeniska parādīšanās.

    $('#heroText').hide().fadeIn(1200);


    // 2. ANIMĀCIJA - slideToggle()
    // Karjeras padomu atvēršana un aizvēršana.

    $('.toggle').click(function () {

        const open = $(this).attr('aria-expanded') === 'true';

        $(this).attr('aria-expanded', String(!open));

        $(this).text(open ? 'Lasīt vairāk +' : 'Aizvērt −');

        $(this).next('.tip').stop(true, true).slideToggle(400);

    });


    // 3. ANIMĀCIJA - animate()
    // Prasmju progresa joslu animācija.

    $('#progress').click(function () {

        $('.bar').each(function () {

            $(this).stop(true).css('width', '0').animate({

                width: $(this).data('width')

            }, 1200);

        });

    });


    // Motivācijas citātu masīvs.

    const quotes = [

        '“Negaidi ideālo brīdi. Sāc ar to, kas tev ir.”',

        '“Mazs solis šodien ir lielu pārmaiņu sākums.”',

        '“Tavas prasmes aug ar katru mēģinājumu.”',

        '“Kļūdas ir daļa no ceļa uz panākumiem.”'

    ];

    let index = 0;


    // 4. ANIMĀCIJA - fadeOut()
    // Iepriekšējā motivācijas citāta pazušana.

    $('#newQuote').click(function () {

        const button = $(this).prop('disabled', true);

        $('#quote').fadeOut(300, function () {

            index = (index + 1) % quotes.length;

            $(this).text(quotes[index]).fadeIn(400, function () {

                button.prop('disabled', false);

            });

        });

    });


    // 5. ANIMĀCIJA - slideDown()
    // Motivācijas ziņojuma parādīšanās.

    $('#start').click(function () {

        $('#message').stop(true, true).slideDown(500);

    });

});
