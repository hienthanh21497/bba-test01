// Bài 1
function createCharacter(name, level, health) {
    const characters = [
        { name: "A", level: 11, health: 123 },
        { name: "B", level: 23, health: 339 },
        { name: "C", level: 35, health: 422 },
        { name: "D", level: 94, health: 219 }
    ]
    let charactersPowerUp = characters.map(character => {
        return {
            name: character.name.toUpperCase(),
            level: character.level * 2,
            health: character.health * 3
        }
    })
    console.log("charactersPowerUp là: ", charactersPowerUp)
    let possibleWinner = charactersPowerUp.filter(character => character.health > 1000)
    console.log("Phần tử có chỉ số health > 1000 là: ", possibleWinner)
}
createCharacter()

// Bài 2
function printLeaderboard() {
    let players = [
        { name: "Mario", score: 900 }, //0
        { name: "Luigi", score: 500 }, //1
        { name: "Peach", score: 800 }, //2
        { name: "Yoshi", score: 1000 }, //3
        { name: "Phong", score: 850 }, //4
    ]
    players.sort((a, b) => b.score - a.score);
    console.log(players);

    players.forEach(function (player, i) {
        let huyChuong = ""
        if (i === 0) {
            huyChuong = `🥇 ${i+1}`;
        }
        else if (i=== 1) {
            huyChuong = `🥈 ${i+1}.`;
        }
        else if (i===2) {
            huyChuong = `🥉 ${i+1}.`;
        }
        else {
            huyChuong = `   ${i+1}.`;
        }
        console.log(`${huyChuong} ${player.name} - ${player.score} pts`)
    })
    }
printLeaderboard()