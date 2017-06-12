/**
 * @author   Antonio Gordievskiy
 * @module   jQuery module
 * @name     gordHoverEffect
 * @link     https://bitbucket.org/AntonGordievsky/gordhovereffect
 * @throws   If the containers for component is not specified,
 *           an exception is {"Container is not defined"}
 * @throws   If the itemsNames parameter is not specified,
 *           an exception is {"Items names not specified"}
 * @throws   If the itemsLinks parameter is not specified,
 *           an exception is {"Items links not specified"}
 */

;(function ( $ ) {

    $.fn.gordHoverEffect = function (options) {
        var settings = $.extend({
            containers: $(this),
            direction : 'horizontal',
            itemsNames: [],
            itemsLinks: [],
            /* Optional: */
            itemsClass : null,
            onClick   : null
        }, options );

        if ( settings.containers.length == 0 ) {
            console.warn( 'Container is not defined' );
        } else if ( settings.itemsNames.length == 0 ) {
            console.warn( settings.containers, 'Items names not specified' );
        } else if ( settings.itemsLinks.length == 0 ) {
            console.warn( settings.containers, 'Items links not specified' );
        };

        var horizontalEffectsSettings = {
            firstState : "to-right",
            secondState: "to-left",
            thirdState : "to-right-full",
            fourthState: "to-left-full",
            closeState : "to-close"
        };

        var verticalEffectsSettings = {
            firstState : "to-bottom",
            secondState: "to-top",
            thirdState : "to-bottom-full",
            fourthState: "to-top-full",
            closeState : ""
        };

        if ( settings.containers.length == 0 ) {
            return;
        };

        if ( settings.direction == 'horizontal' ) {
            $(settings.containers).each( function () {
                createContent( $(this) );
                hoverEffect( $(this), horizontalEffectsSettings );
            });
        } else {
            $(settings.containers).each( function () {
                createContent( $(this) );
                hoverEffect( $(this), verticalEffectsSettings );
            });
        };

        function createContent (container) {
            var frag = document.createDocumentFragment();

            $( settings.itemsNames ).each( function ( i ) {
                var newListItem = document.createElement( "li" );
                $(newListItem).text( settings.itemsNames[i] );

                var link = document.createElement("A");
                $(link).attr( "href", settings.itemsLinks[i] )
                    .attr( "data-number", i ).append(newListItem);

                if ( settings.onClick != null ) {
                    $(link).on( "click", settings.onClick );
                };

                if ( settings.itemsClass != null ) {
                    $(link).addClass( settings.itemsClass );
                };

                frag.appendChild(link);
            });

            $(container).append(frag);
        }

        function hoverEffect(container, options) {
            var previousIndex = 0;
            var previousElem  = null;
            var classList = options.secondState + " " +
                options.firstState + " " + options.fourthState + " " +
                options.thirdState + " " + options.closeState;

            $(container.children()).mouseenter(function(event) {
                var target = event.target;
                var index  = $(target).attr("data-number");

                $(target).removeClass(classList);

                if ( index > previousIndex ) {
                    $(previousElem).addClass(options.thirdState);
                    $(target).addClass(options.firstState);
                } else if ( index < previousIndex ) {
                    $(previousElem).addClass(options.fourthState);
                    $(target).addClass(options.secondState);
                } else if ( index == previousIndex ) {
                    $(target).addClass(options.firstState);
                }

                previousElem  = target;
                previousIndex = index;
            });

            $(container.children()).mouseleave(function(event) {
                $(previousElem).removeClass(classList);

                // When the mouse moves quickly from the container
                try {
                    if ( $(event.relatedTarget).get(0).tagName != "A" ) {
                        $(previousElem).addClass(options.closeState);
                    }
                } catch (e) {
                    $(previousElem).addClass(options.closeState);
                }
            });
        }

        return this;
    }
}( jQuery ));
