(function () {
    ('.menu-btn').click(function () {
        ('.navbar .menu').toggleClass("active");
        ('.menu-btn i').toggleClass("active");
    });
    ('.navbar .menu li a').click(function(){
        ('html').css("scrollBehavior", "smooth");
    })
});
// first function: add site responsive
// second function: add light navigation
