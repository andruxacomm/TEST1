import $ from 'jquery';

export default function() {

    $(document).ready(function () {

        $('button.Hero__open-modal').click(function (event) {
            event.preventDefault();
            $('.overlay').fadeIn(400,
                function () {
                    $('.popup')
                        .css('display', 'block')
                        .animate({opacity: 1, top: '50%'}, 200);
                });
        });

        $('.header__close, .overlay').click(function () {
            $('.popup')
                .animate({opacity: 0, top: '45%'}, 200,
                    function () {
                        $(this).css('display', 'none');
                        $('.overlay').fadeOut(400);
                    }
                );
        });

    });
}
