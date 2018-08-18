var cesarjs = {
    getElement: function(element) {
        return document.getElementById(element);
    },
    applyStyles: function(element, styles) {
        styles.forEach( function(styleItem){
            element.style[styleItem.prop] = styleItem.value;
        });
    },
};