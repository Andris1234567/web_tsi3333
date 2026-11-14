
$(document).ready(function () {

    // Sākuma baneru saturs
    const slides = [
        {
            title: "JUST DO IT.",
            text: "Katrs liels sasniegums sākas ar pirmo soli."
        },
        {
            title: "ATTĪSTI SEVI",
            text: "Mācies šodien, lai rīt būtu labāks."
        },
        {
            title: "NEPADODIES",
            text: "Tava neatlaidība veido tavu nākotni."
        }
    ];

    let current = 0;

    // 1. un 2. efekts - fadeOut un fadeIn
    function changeSlide() {

        $("#heroText").fadeOut(600, function () {

            current = (current + 1) % slides.length;

            $("#heroText h1").text(slides[current].title);

            $(".intro").text(slides[current].text);

            $("#heroText").fadeIn(600);

        });

    }

    // Automātiska baneru maiņa ik pēc 6 sekundēm
    setInterval(changeSlide, 6000);


    // 3. efekts - slideToggle
    $(".toggle").click(function () {

        $(this).next(".tip").slideToggle(500);

    });


    // 4. efekts - slideDown
    $(".cards article").hide();

    $(window).on("scroll", function () {

        if ($(window).scrollTop() + $(window).height()
            > $("#padomi").offset().top + 100) {

            $(".cards article").slideDown(800);

        }

    });

    $("#start").click(function () {

        $("#message").slideDown(700);

    });


    // 5. efekts - animate
    $(".cards article").hover(

        function () {

            $(this).stop(true).animate({
                top: "-10px"
            }, 250);

        },

        function () {

            $(this).stop(true).animate({
                top: "0px"
            }, 250);

        }

    );


    // Papildu progresa joslu animācija
    $("#progress").click(function () {

        $(".bar").each(function () {

            $(this).css("width", "0").animate({

                width: $(this).data("width")

            }, 1500);

        });

    });


    // Motivācijas citātu maiņa
    const quotes = [
        "Tava nākotne sākas šodien.",
        "Nekad nepārstāj mācīties.",
        "Panākumi sākas ar drosmi.",
        "Tikai tu vari mainīt savu nākotni."
    ];

    let quoteIndex = 0;

    $("#newQuote").click(function () {

        $("#quote").fadeOut(400, function () {

            quoteIndex = (quoteIndex + 1) % quotes.length;

            $(this).text(quotes[quoteIndex]).fadeIn(500);

        });

    });

    // Pārbaude pārlūkprogrammas konsolē
    console.log("jQuery darbojas!");
    console.log("jQuery versija: " + $.fn.jquery);

});
