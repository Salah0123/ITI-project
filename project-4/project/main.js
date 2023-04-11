/* 1- autocomplete Search */
$(document).ready(function () {
    var topics = ["HTML", "HTML5", "CSS", "CSS3", "JavaScript", "jQuery", "BootStrap", "SWE"];
    $("#searched").autocomplete({
        source: topics
    });
});

