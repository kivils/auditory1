'use strict';

/* eslint-disable no-undef */

$(document).ready(function(){

    function initVideo() {
        var videoLink = $('.js-video-link'),
            videoContainer = $('.js-video-modal'),
            close = videoContainer.find('.js-modal-close'),
            overlay = $('.js-overlay');

        if(videoLink.length) {
            videoLink.each(function() {
                var $this = $(this);

                $this.on('click', function(e) {
                    videoContainer.show();
                    overlay.show();
                    e.preventDefault();
                });
            });
        }

        if(close.length) {
            close.each(function() {
                var $this = $(this);

                $this.on('click', function(e) {
                    videoContainer.hide();
                    overlay.hide();
                    e.preventDefault();
                });
            });
        }
    }

    function initProgramCarousel() {
        var program = $('.js-program-carousel');

        if(program.length) {
            var prev = program.siblings('.js-carousel-controls').find('.js-jcarousel-prev'),
                next = program.siblings('.js-carousel-controls').find('.js-jcarousel-next');

            program.on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();

                if (width >= 600) {
                    width = width / 2;
                }

                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
                .jcarousel({
                    wrap: 'circular'
                });

            prev.jcarouselControl({
                    target: '-=1'
                });

            next.jcarouselControl({
                    target: '+=1'
                });
        }
    }

    function initTestimonialsCarousel() {
        var testimonials = $('.js-testimonials-carousel');

        if(testimonials.length) {
            var prev = testimonials.siblings('.js-jcarousel-prev'),
                next = testimonials.siblings('.js-jcarousel-next');

            testimonials.on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();

                if (width >= 600) {
                    width = width / 2;
                }

                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
                .jcarousel({
                    wrap: 'circular'
                });

            prev.jcarouselControl({
                target: '-=1'
            });

            next.jcarouselControl({
                target: '+=1'
            });
        }
    }

    function initTarifsCarousel() {
        var tarifs = $('.js-tarifs-carousel');

        if(tarifs.length) {
            var prev = tarifs.siblings('.js-carousel-controls').find('.js-jcarousel-prev'),
                next = tarifs.siblings('.js-carousel-controls').find('.js-jcarousel-next');

            tarifs.on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();

                if (width >= 600) {
                    width = width / 2;
                }

                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
                .jcarousel({
                    wrap: 'circular'
                });

            prev.jcarouselControl({
                target: '-=1'
            });

            next.jcarouselControl({
                target: '+=1'
            });
        }
    }

    function initMenu() {
        var menu = $('.js-menu'),
            menuWr = menu.parents('.auditory-menu-mobile'),
            menuIconOpen = $('.js-menu-open'),
            menuIconClose = $('.js-menu-close');

        if(menuIconOpen.length) {
            menuIconOpen.each(function() {
                $(this).click(function() {
                    menuWr.addClass('is-opened');
                });
            });
        }

        if(menuIconClose.length) {
            menuIconClose.each(function() {
                $(this).click(function() {
                    menuWr.removeClass('is-opened');
                });
            });
        }
    }

    function initMapHeight() {
        //var contactsMapWr = $('.js-contacts-map'),
        //    contactsCard = $('.js-contacts-card');
        //
        //if(contactsCard.length && contactsMapWr.length) {
        //    var height = contactsCard.outerHeight();
        //
        //    contactsMapWr.css({'height': height + 'px'});
        //}
    }

    function initModalForm() {
        var form = $('.js-contacts-form'),
            formLink = $('.js-form-link'),
            close = form.find('.js-modal-close'),
            overlay = $('.js-overlay');

        if(form.length) {

            if(formLink.length) {
                formLink.each(function() {
                    var $this = $(this);

                    $this.on('click', function(e) {
                        form.addClass('is-form-modal');
                        overlay.show();
                        e.preventDefault();
                    });
                });
            }

            if(close.length) {
                close.each(function() {
                    var $this = $(this);

                    $this.on('click', function(e) {
                        form.removeClass('is-form-modal');
                        overlay.hide();
                        e.preventDefault();
                    });
                });
            }

        }
    }

    function initExpandBlock() {
        var expandLink = $('.js-expand-link'),
            expandBlock = expandLink.parents('.js-expand-block');

        if(expandLink.length && expandBlock.length) {
            expandLink.each(function() {
                var $this = $(this);

                $this.on('click', function(e) {
                    expandBlock.addClass('is-expanded');
                    $this.hide();

                    e.preventDefault();
                });
            });
        }
    }

    function inputMaskedPhone() {
        var input = $('.js-phone-masked');

        if(input.length) {
            input.inputmask({
                mask: '+7 (999) 999-99-99',
                placeholder: '_'
            });
        }

    }



    // Init
    initVideo();
    initProgramCarousel();
    initTestimonialsCarousel();
    initTarifsCarousel();
    initMenu();
    initMapHeight();
    initModalForm();
    initExpandBlock();
    inputMaskedPhone();

    $(window).resize(function() {
        initMapHeight();
    });

});
