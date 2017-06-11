## What is gordHoverEffect repository for? ##

The component in the container it creates creates menu items, and by means of pseudo-classes organizes the effect of the flow of one element to another during the actions of the user.

[Demo](http://gordievskiy.com/lab/gordHoverEffect)

## How to use? ##

**First, make sure you are using valid DOCTYPE and the jQuery library.**

**Include necessary js files:**
    
```
#!html

<script type="text/javascript" src="js/gordHoverEffect.js"></script>
```

**Add CSS file:**
    
```
#!html

<link href="css/gordHoverEffect.css" rel="stylesheet">
```
*Read carefully the css file, some settings of the component depend on it:*

* the speed of the effect playback

* background-color of the effect

**Create a element <ul> like this:**
    
```
#!html

<ul class="horizontal-hover-effect"></ul> or this one:
<ul class="vertical-hover-effect"></ul>
```

*You can use any class, the main thing is to transfer the component to the container, in which it will place the necessary elements and perform the necessary actions.*

**Fire plugin using jQuery selector.**

This is basic - uses default settings:
    
```
#!javascript

$('.horizontal-hover-effect').gordHoverEffect({
    itemsNames: [
        'item 1',
        'item 2',
        'item 3',
        'item 4',
        'item 5',
        'item 6'
    ],
    itemsLinks: [
        '/item-1',
        '/item-2',
        '/item-3',
        '/item-4',
        '/item-5',
        '/item-6'
    ]
});
```

**You can set the following custom settings:**

* Names of menu items

* Links that should open when you click on menu items


```
#!html

    <a href='/item-1'></a>
```


* Direction of the effect: vertical or horizontal

    *Default: 'horizontal'*

    *If your component should work vertically, do not forget to add the parameter:* 


```
#!javascript

    direction: 'vertical'
```

**Optional settings:**


* set the class for the elements created by the component
    
    *Dafault: null*

* set the handler for the click event
    
    *Default: null*


**Example:**
```
#!javascript

$('.vertical-hover-effect').gordHoverEffect({
    direction : 'vertical',
    itemsNames: [
        'Clothing',
        'Electronics',
        'Shoes',
        'Watches',
        'Jewellery',
        'Sports'
    ],
    itemsLinks: [
        '/item-1',
        '/item-2',
        '/item-3',
        '/item-4',
        '/item-5',
        '/item-6'
    ],
    itemsClass: "list-items",
    onClick   : handler
});

function handler ( event ) {
    console.log( $( event.target ) );
    return false;
};

```

*You can initialize instances of the effect one at a time, or you can specify settings for multiple instances at once, if they are the same.
Vertical and horizontal effects are set separately using different initial options 'directions'.*