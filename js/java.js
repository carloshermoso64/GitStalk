$(document).ready(function () {


    $("#username").keypress(function (event) {
        if (event.key === "Enter") {
            $("#myButton").click();
        }
    });

    $("#myButton").click(function () {
        var user = $('#username').val();
        var link = "https://api.github.com/users/" + user;
       
        requestJSON(link, function (json) {
            username = json.login;
            followers = json.followers;
            repos = json.repos_url;
            var output = "<label>" + username + "</label>";
            output += "<p> followers: " + followers;
            output += "<p> Repositories:";
            $('#texto').html(output);


            $.getJSON(repos, function (result) {
                $.each(result, function (i, field) {
                    var namerepo = result[i].name;
                    var number = i + 1;
                    output += "<p>" + number + " " + namerepo;
                    $('#texto').html(output);
                });
            });


        })
        
    });


    function requestJSON(url,callback) {
        $.ajax({
            url: url,
            complete: function (xhr) {
                callback.call(null, xhr.responseJSON);
            }
        });
    }
});



