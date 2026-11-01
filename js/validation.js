const form = document.getElementById("registrationForm");


form.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("fullName").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const github =
        document.getElementById("github").value.trim();

    const avatar =
        document.getElementById("avatar").files[0];


    document.getElementById("nameError").textContent = "";

    document.getElementById("emailError").textContent = "";

    document.getElementById("githubError").textContent = "";

    document.getElementById("avatarError").textContent = "";


    let valid = true;


    /* Check name */

    if (name === "") {

        document.getElementById("nameError").textContent =
            "Please enter your full name.";

        valid = false;
    }



    /* Check email */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.com$/;


    if (!emailPattern.test(email)) {

        document.getElementById("emailError").textContent =
            "Please enter an email such as user@domain.com.";

        valid = false;
    }



    /* Check GitHub username */

    const githubPattern =
        /^@[A-Za-z0-9-]+$/;


    if (!githubPattern.test(github)) {

        document.getElementById("githubError").textContent =
            "GitHub username must start with @.";

        valid = false;
    }



    /* Check avatar */

    if (!avatar) {

        document.getElementById("avatarError").textContent =
            "Please choose a JPG or PNG image.";

        valid = false;

    } else {

        const validType =
            avatar.type === "image/jpeg" ||
            avatar.type === "image/png";


        const validSize =
            avatar.size <= 500 * 1024;


        if (!validType) {

            document.getElementById("avatarError").textContent =
                "Only JPG and PNG files are allowed.";

            valid = false;

        } else if (!validSize) {

            document.getElementById("avatarError").textContent =
                "The image must be under 500KB.";

            valid = false;
        }
    }



    if (!valid) {
        return;
    }



    /*
        Read the image so it can be displayed
        on the ticket page.
    */

    const reader = new FileReader();


    reader.onload = function() {

        const registrationData = {

            name: name,

            email: email,

            github: github,

            avatar: reader.result

        };


        localStorage.setItem(
            "codingConfData",
            JSON.stringify(registrationData)
        );


        window.location.href = "ticket.html";

    };


    reader.readAsDataURL(avatar);

});