$(document).ready(function () {


    $("#myButton").click(function () {
        var user = $('#username').val();
        var link = "https://api.github.com/users/" + user;
       
        requestJSON(link, function (json) {
            console.log(2);

            username = json.login;
            followers = json.followers;
            repos = json.repos_url;
            var output = "<h1>" + username + "</h1>";
            output += "<p> followers " + followers;
            output += "<p> repos " + repos;
            $('#texto').html(output);


            $.getJSON(repos, function (result) {
                $.each(result, function (i, field) {
                    var namerepo = result[i].name;
                    output += "<p>" + i + " " + namerepo;
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



