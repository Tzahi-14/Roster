const renderTeam = new Renderer()

$(`#get`).click(function () {
    const teamInput = $("#add-team").val()
    $.get(`/teams/${teamInput}`, (players) => {
        // return players[i]
        // console.log(players)
        renderTeam.renderTeamPlayer(players)

    }).catch(function (e) {
        alert(e.responseText)
    })

})
$(`#get`).click(function () {
    const startTeam = { "id": id, "name": name }
    $.get(`/dreamTeam`, (dreamTeam) => {
    })
})


let addPlayer = function (id, name) {
    let newPlayer = { "id": id, "name": name }
    $.post(`/dreamTeam`, newPlayer, (players) => {
        // return players[i]
        // console.log(players)
        alert("added")
    }).catch(function (e) {
        alert(e.responseText)
    })
}
// const updateTeam = function(){
//     const newTeam = $("#new") .val()
//     $.ajax({
//         method: "PUT",
//         url: "/team" + newTeam ,
//         data: {}
//     })

// }
