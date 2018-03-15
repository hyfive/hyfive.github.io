$(document).ready(function () {

    /**style the element*/
    function colorShadow(el, shadowStyle) {
        console.log(el, shadowStyle)
        $(el).hover(function () {
                $(this).css("box-shadow", shadowStyle);
            },
            function () {
                $(this).css("box-shadow", "none");
            })
    }

    /**convert rgb to rgba */
    function convertRGB(el, rgb, opacity) {

        
        shadowColor = 'rgba(' + rgb + ',' + opacity + ')';
        // shadowStyle = "0 35px 50px " + shadowColor + ", 0 15px 20px " + shadowColor + ", 0 2px 3px " + shadowColor ;
        shadowStyle = "0 35px 60px " + shadowColor;
        colorShadow(el, shadowStyle);
    }

    /** extract color */
    function extractColors(el) {
        var colorThief = new ColorThief();
        rgb = colorThief.getColor(el);
       

        convertRGB(el, rgb, 0.6);
    }

    /** load image */
    function startImageListener() {
        var elements = document.querySelectorAll(".thumbnail");
        Array.prototype.forEach.call(elements, function (el, i) {
            if (el.complete) {
                extractColors(el)
            } else {
                el.addEventListener('load', function () {
                    extractColors(el)
                })
            }
        });
    }

    startImageListener();
});