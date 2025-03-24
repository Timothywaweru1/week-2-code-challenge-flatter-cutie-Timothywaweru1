document.addEventListener("DOMContentLoaded", function () {
    const baseURL = "https://yoh-xi.vercel.app/characters";
    const characterBar = document.getElementById("character-bar");
    const voteForm = document.getElementById("votes-form");
    const resetBtn = document.getElementById("reset-btn");
    let selectedCharacter = null;
    fetch(baseURL)
        .then(res => res.json())
        .then(characters => {
            characters.forEach(cha => {
                let span = document.createElement("span");
                span.setAttribute ("id","text")
                span.innerText = cha.name;
                characterBar.appendChild(span);
                span.addEventListener("click", function () {
                    selectedCharacter = cha;
                    document.getElementById("name").innerText = cha.name;
                    document.getElementById("image").src = cha.image;
                    document.getElementById("vote-count").innerText = cha.votes;
                });
            });
        });

    voteForm.addEventListener("submit", function (ev) {
        ev.preventDefault();
        if (!selectedCharacter) return;

        let voteInput = document.getElementById("votes");
        let votes = parseInt(voteInput.value) || 0;
        selectedCharacter.votes += votes;

        document.getElementById("vote-count").innerText = selectedCharacter.votes;
        voteInput.value = "";
    });

    resetBtn.addEventListener("click", function () {
        if (!selectedCharacter) return;

        selectedCharacter.votes = 0;
        document.getElementById("vote-count").innerText = 0;
    });
});

