const savedData =
    localStorage.getItem("codingConfData");


if (!savedData) {

    window.location.href = "index.html";

} else {

    const data =
        JSON.parse(savedData);


    document.getElementById("ticketName").textContent =
        data.name;


    document.getElementById("ticketEmail").textContent =
        data.email;


    document.getElementById("ticketNameCard").textContent =
        data.name;


    document.getElementById("ticketGithub").textContent =
        data.github;


    document.getElementById("ticketAvatar").src =
        data.avatar;


    document.getElementById("ticketAvatar").alt =
        data.name + " profile picture";


    const username =
        data.github.substring(1);


    document.getElementById("githubLink").href =
        "https://github.com/" + username;

}