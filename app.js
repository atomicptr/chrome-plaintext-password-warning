if(document.location.protocol == "http:") {
    var pw = $("[type=\"password\"]")

    if(pw.length > 0) {
        pw.css("border", "1px solid red");

        $("body").before("<div class='cpp-warning'><b>This website isn't using HTTPS!</b> " +
            "Which means your password will be sent as plain text. " +
            "<a id='cpp-warning-close-btn' href='#'>X</a></div>");

        $("#cpp-warning-close-btn").click(function() {
            $(".cpp-warning").hide();
        });

        $("head").append(
            "<style>" +
                ".cpp-warning {" +
                    "border: 3px solid #ebccd1;" +
                    "border-radius: 15px;" +
                    "background-color: #f2dede;" +
                    "padding: 10px;" +
                    "position: fixed;" +
                    "margin-left: auto;" +
                    "margin-right: auto;" +
                    "top: 5px;" +
                    "left: 0px;" +
                    "right: 0px;" +
                    "max-width: 1000px;" +
                    "z-index: 1337;" +

                    "font-size: 24px;" +
                    "text-align: center;" +
                    "font-family: Helvetica;" +
                    "color: #a94442;" +
                "}" +
                ".cpp-warning a {" +
                    "color: black;" +
                    "font-size: 14px;" +
                    "font-weight: bold;" +
                    "display:inline-block;" +
                    "vertical-align: middle;" +
                    "margin-left: 5px;" +
                    "transition: color 0.5s ease;" +
                    "text-decoration: none;" +
                "}" +
                ".cpp-warning a:hover {" +
                    "color: #a94442;" +
                "}" +
            "</style>"
        );
    }
}
