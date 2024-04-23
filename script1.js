const team = {
    name: "Team A",
    players: [
        { name: "Player 1", position: "forward", age: 25 },
        { name: "Player 2", position: "midfielder", age: 27 },
        { name: "Player 3", position: "defender", age: 30 },
        { name: "Player 4", position: "goalkeeper", age: 28 }
    ]
};

function filterPlayersOver25(players) {
    const filteredPlayers = [];
    for (let i = 0; i < players.length; i++) {
        if (players[i].age > 25) {
            filteredPlayers.push(players[i]);
        }
    }
    return filteredPlayers;
}

const playersOver25 = filterPlayersOver25(team.players);

console.log("Players over 25 years old in team " + team.name + ":");
for (let i = 0; i < playersOver25.length; i++) {
    console.log("- " + playersOver25[i].name + ", " + playersOver25[i].position);
}

function calculateAverageAge(players) {
    let totalAges = 0;
    for (let i = 0; i < players.length; i++) {
        totalAges += players[i].age;
    }
    return totalAges / players.length;
}

console.log("Average age of team " + team.name + ": " + calculateAverageAge(team.players));

let youngestPlayer = team.players[0];
for (let i = 1; i < team.players.length; i++) {
    if (team.players[i].age < youngestPlayer.age) {
        youngestPlayer = team.players[i];
    }
}

console.log("The youngest player in team " + team.name + " is: " + youngestPlayer.name);
