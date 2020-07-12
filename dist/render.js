class Renderer {
    constructor() {
    }
    renderTeamPlayer = (players) => {
        $("#team").empty()
        for (let player of players) {
            let playerList = `<div><span>${player.firstName} ${player.lastName}<br> ${player.jersey}<br>
           <img id="picture" src= ${player.pic} onerror="this.src='https://image.chitra.live/api/v1/wps/5c355ce/9e7cb112-37f4-4fd0-95d5-62fe96d0067b/2/Britney-Spears-350x250.jpg'">
               ${player.pos} </span>
               <button id="Dream Team" onclick="addPlayer('${player.id}','${player.firstName} ${player.lastName}')">add to dream team</button>
               </div>` 
            $(`#team`).append(playerList)
        }

    }
    dreamTeamDef = (startTeam) =>{

    }

    addNewPlayer =(newPlayer) => {

    }
}
