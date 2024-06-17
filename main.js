$(document).ready(function () {
    // jquery per validimin e formes tek faqja contact us

    $("#sendBtn").on("click", function (event) {
        event.preventDefault();
        var firstName = $("#firstName").val()
        var lastName = $("#lastName").val()
        var email = $("#email").val()
        var message = $("#message").val()
        $("#reminder").html("");
        if (firstName.length == 0) {
            $("#reminder").html("<p>Please enter your name</p>");
            $("#reminder").css("color", "red");
            $("#reminder").addClass("fs-3");
        }
        else if (lastName.length == 0) {
            $("#reminder").html("<p>Please enter your last name</p>");
            $("#reminder").css("color", "red");
            $("#reminder").addClass("fs-3");
        }
        else if (email.length < 5) {
            $("#reminder").html("<p>Please enter a valid email</p>");
            $("#reminder").css("color", "red");
            $("#reminder").addClass("fs-3");
        }
        else if (message.length == 0) {
            $("#reminder").html("<p>Please you must write your message!!</p>");
            $("#reminder").css("color", "red");
            $("#reminder").addClass("fs-3");
        }
        else {
            alert("Login success");
        }
    })


    // jquery per butonin subscribe
    
    $("#liveToastBtn").click(function () {
        var txt = $("#subscribeTxt").val();
        if (txt.length > 0) {
            $("#toatmsg").html("You will be informed about our latest news with an email");
            $("#liveToast").addClass("toast-success").removeClass("toast-error");
        }
        else {
            $("#toatmsg").html("Please insert your email");
            $("#liveToast").addClass("toast-error").removeClass("toast-success");
        }
    })
    const toastTrigger = document.getElementById('liveToastBtn');
    const toastLiveExample = document.getElementById('liveToast');

    if (toastTrigger) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
        toastTrigger.addEventListener('click', () => {
            toastBootstrap.show()
        })
    }

})
