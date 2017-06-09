# README #

This README describes a component that creates an interesting menu flow effect

### What is this repository for? ###

* The component in the container it creates creates menu items, 
* and by means of pseudo-classes organizes the effect of the flow 
* of one element to another during the actions of the user
* 1
* [Learn Markdown](http://gordievskiy.com/lab/hover_effect)

### Рow to use? ###

1. First, make sure you are using valid DOCTYPE
    and the jQuery library

2. Include necessary JS files (hover-effect.js and the jQuery library)
    <script defer type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
    <script defer type="text/javascript" src="js/hover-effect.js"></script>

    We should wait for the readiness of the DOM tree, so we recommend using
    the 'defer' attribute for the <script> tag

3. Add CSS file
    <link href="css/hover-effect-styles.css" rel="stylesheet">

    Read carefully the css file, some settings of the component depend on it:
    1) the speed of the effect playback
    2) background-color of the effect

4. Create a element (<ul>) like this:
    <ul class="horizontal-hover-effect"></ul> or this one:
    <ul class="vertical-hover-effect"></ul>

    You can use any class, the main thing is to transfer
    the component to the container, in which it will place the necessary
    elements and perform the necessary actions

5. Fire plugin using jQuery selector
    This is basic - uses default settings:
    $(selector).gordHoverEffect();

You can set the following custom settings:
1) names of menu items
    Default: 'item 1', 'item 2' and so on

2) links that should open when you click on menu items
    Default: 'javascript:;'

3) direction of the effect: vertical or horizontal
    Default: 'horizontal'

    If your component should work vertically, do not forget to
    add the parameter:
    directions: 'vertical'

Optional settings:
1) set the class for the elements created by the component
    Dafault: null

2) set the handler for the click event
    Default: null

$(selector).gordHoverEffect({
    directions: 'horizontal',
    itemsName : [
        'item 1',
        'item 2'
    ],
    links     : [
      'javascript:;',
      'javascript:;'
    ],
    // Optional settings:
    itemClass : null,
    onClick   : null
});

You can initialize instances of the effect one at a time,
or you can specify settings for multiple instances at once,
if they are the same.
Vertical and horizontal effects are set separately
using different initial options 'directions'

Example of setting a full configuration:

$('.vertical-hover-effect').gordHoverEffect({
    directions: 'vertical',
    itemsName : [
        'Clothing',
        'Electronics',
        'Shoes',
        'Watches',
        'Jewellery',
        'Sports'
    ],
    links     : [
      '/clothing',
      '/electronics',
      '/shoes',
      '/watches',
      '/jewellery',
      '/sports',
    ],
    // Optional settings:
    itemClass : 'myClass',
    onClick   : handler
});

function handler (event) {
    console.log( $( event.target ) );
};

### Who do I talk to? ###

* I'm a repo owner