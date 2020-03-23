$(function () {

    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        const burger = $("#burgerName").val().trim();
        const obj = {
            "burger_name": burger,
            "devoured": 0
        };
        $.ajax("/api/burgers", {
            type: "post",
            data: obj
        }).then(function (response) {
            console.log(response);
            // Reload the page to get the updated list
            location.reload();
        })

    });
    $(".change-devour").on("click", function (event) {
        event.preventDefault();
        const id = $(this).data("id");
        const obj = {
            "devoured": 1
        };
        $.ajax("/api/burgers/" + id, {
            type: "put",
            data: obj
        }).then(function (response) {
            console.log(response);
            console.log("changed Devoured", id);
            // Reload the page to get the updated list
            location.reload();
        })


    })
});

