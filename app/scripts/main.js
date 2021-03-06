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
            var controls = program.siblings('.js-carousel-controls'),
                programItem = '.auditory-program__item',
                prev = controls.find('.js-jcarousel-prev'),
                next = controls.find('.js-jcarousel-next'),
                countContainer = controls.find('.js-carousel-items-count'),
                itemNumContainer = controls.find('.js-acrousel-item-num');

            $(programItem).each(function(index) {
                $(this).attr('data-index', index + 1);
            });

            program.on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth(),
                    countItems = carousel.jcarousel('items').length;

                if(countItems === 2) {
                    program.parents('.auditory-program-wr').addClass('is-items2');
                }

                if (width >= 600) {
                    width = width / 2;
                }

                itemNumContainer.text(program.find('.auditory-program__item.is-visible').first().attr('data-index'));
                countContainer.text(countItems);
                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
                .jcarousel({
                    wrap: 'circular',
                    transitions: false,
                    vertical: false
                })
                .jcarouselSwipe();

            program.on('jcarousel:visiblein', programItem, function() {
                $(this).addClass('is-visible');
            });

            program.on('jcarousel:visibleout', programItem, function() {
                $(this).removeClass('is-visible');
            });

            program.on('jcarousel:scrollend', function() {
                itemNumContainer.text(program.find('.auditory-program__item.is-visible').first().attr('data-index'));
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
            var testimItem = '.auditory-testimon__list .auditory-testimon__item';

            testimonials.flexslider({
                selector: testimItem,
                animation: 'slide',
                controlNav: false,
                prevText: '&lsaquo;',
                nextText: '&rsaquo;',
                slideshowSpeed: 5000,
                animationSpeed: 300
            });

        }
    }

    function initTarifsCarousel() {
        var tarifs = $('.js-tarifs-carousel');

        if(tarifs.length) {
            var controls = tarifs.siblings('.js-carousel-controls'),
                tarifItem = '.auditory-tarif__item',
                prev = tarifs.siblings('.js-carousel-controls').find('.js-jcarousel-prev'),
                next = tarifs.siblings('.js-carousel-controls').find('.js-jcarousel-next'),
                countContainer = controls.find('.js-carousel-items-count'),
                itemNumContainer = controls.find('.js-acrousel-item-num');


            $(tarifItem).each(function(index) {
                $(this).attr('data-index', index + 1);
            });

            tarifs.on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth(),
                    countItems = carousel.jcarousel('items').length;

                if(countItems === 2) {
                    tarifs.parents('.auditory-tarifs-wr').addClass('is-items2');
                }

                if (width >= 600) {
                    width = width / 2;
                }

                itemNumContainer.text(tarifs.find('.auditory-tarif__item.is-visible').first().attr('data-index'));
                countContainer.text(countItems);
                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
                .jcarousel({
                    wrap: 'circular'
                })
                .jcarouselSwipe();

            tarifs.on('jcarousel:visiblein', tarifItem, function() {
                $(this).addClass('is-visible');
            });

            tarifs.on('jcarousel:visibleout', tarifItem, function() {
                $(this).removeClass('is-visible');
            });

            tarifs.on('jcarousel:scrollend', function() {
                itemNumContainer.text(tarifs.find('.auditory-tarif__item.is-visible').first().attr('data-index'));
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

    function initSlideLink() {
        var cont = $('.site-menu, .site-menu-mobile, .site-menu-fixed'),
            link = cont.find('a[href^="#"]');

        if(link.length) {
            link.each(function() {

                $(this).on('click', function(e) {
                    var targetId = $(this).attr('href'),
                        target = $(targetId),
                        fixedHeader = $('.js-header-fixed'),
                        fixedHeaderHeight;

                    if(fixedHeader.length) {
                        if($(window).width() <= 1200) {
                            fixedHeaderHeight = 0;
                        }
                        else {
                            fixedHeaderHeight = fixedHeader.outerHeight();
                        }
                    }

                    $('html, body').animate({
                        scrollTop: target.offset().top - fixedHeaderHeight
                    }, 1000);

                    $('.auditory-menu-mobile').removeClass('is-opened');

                    e.preventDefault();
                });
            });
        }

    }

    function initFixedHeader() {
        var fixedHeader = $('.js-header-fixed'),
            secondSlide = $('#sectionInfo');

        if(fixedHeader.length) {
            if($(window).scrollTop() > secondSlide.offset().top) {
                fixedHeader.addClass('is-visible');
            }
            else {
                fixedHeader.removeClass('is-visible');
            }
        }
    }

    function initMapHeight() {
        var contactsMapWr = $('.js-contacts-map'),
            contactsCard = $('.js-contacts-card');

        if(contactsCard.length && contactsMapWr.length) {
            var height = contactsCard.outerHeight();

            contactsMapWr.css({'height': height + 'px'});
        }
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
    initFixedHeader();
    initSlideLink();
    initMapHeight();
    initModalForm();
    initExpandBlock();
    inputMaskedPhone();

    $(window).resize(function() {
        initMapHeight();
        initFixedHeader();
    });

    $(window).scroll(function() {
        initFixedHeader();
    });

});
