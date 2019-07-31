$(document).ready(function () {
    function animate(hoverElement, showElement) {
        if (!$(showElement).is(":animated")) {
            $(hoverElement).hover(function () {
                if (!$(showElement).is(":animated")) {
                    $(showElement).show(300)
                }
            }, function () {
                if (!$(showElement).is(":animated")) {
                    $(showElement).hide(300)
                }
            })
        }

    }
    animate(".zhao", ".con-zhao")
    animate(".li", ".con-li")
    animate(".guo", ".con-guo")
    animate(".xia", ".con-xia")
    animate(".chen", ".con-chen")
});