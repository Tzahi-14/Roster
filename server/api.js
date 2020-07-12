const express = require('express')
const route = express.Router()
const urllib = require('urllib')

const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}

route.get('/teams/:teamName', function (request, response) {
    let chosenPlayers = []
    let teamName = request.params.teamName
    const teamId = teamToIDs[teamName]
    if (typeof teamId == 'undefined') {
        response.status(400)
        response.end("fail to choose teams")
        return
    }


    urllib.request('http://data.nba.net/10s/prod/v1/2018/players.json', function (err, data, res) {
        if (err) {
            throw err;
        }

        const playersArr = JSON.parse(data).league.standard
        for (let player of playersArr) {
            if (teamId === player.teamId && player.isActive) {
                const playerInfo = {
                    firstName: player.firstName,
                    lastName: player.lastName,
                    jersey: player.jersey,
                    id: player.personId,
                    pos: player.pos,
                    pic: `https://nba-players.herokuapp.com/players/${player.lastName}/${player.firstName}`
                }
                chosenPlayers.push(playerInfo)
            }
        }
        response.send(chosenPlayers)
    });

})

// const newTeamToIds = {
//     wizards: "1610612764",
//     raptors: "1610612761",
//     spurs: "1610612759",
//     rockets: "1610612745"
// }
route.put('/teams', function (request, response) {
    teamToIDs[request.body.teamName] = request.body.teamId
    // console.log("new team")
    // console.log(teamToIDs)
    // console.log("---------------")
    // response.end("")
})

const defulatDreamTeam = [
    { "id": "1628366", "name": "Lonzo Ball" },
    { "id": "1629067", "name": "Isaac Bonga" },
    { "id": "2544", "name": "LeBron James" },
    

]

route.get('/dreamTeam', function (request, response) {
    response.send(defulatDreamTeam)
    // response.end()
})

route.post('/dreamTeam', function (request, response) {
    if (defulatDreamTeam.length == 5) {
        defulatDreamTeam.splice(0, 1)
    }

    let newPlayer = { "id": request.body.id, "name": request.body.name }
    
    // const dreamTeamMember = defulatDreamTeam.some(exist => exist.id)
    //     response.end()
    //     alert("player exist")
    // for(let player.id of defulatDreamTeam){
    //     if (newPlayer.id === player.id){
    //         response.end ()
    //         alert ("player exist")
    //     }
    // }

    defulatDreamTeam.push(newPlayer)
    response.end()
})


module.exports = route
