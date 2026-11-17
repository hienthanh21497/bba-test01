// Bài 1
let playerName = "Mario";
let currentLives = 3;
const levelCoin = [
    { Level: 1, coin: 25 },
    { Level: 2, coin: 30 },
    { Level: 3, coin: 45 }
]
let sumCoin = 0;
for (let level of levelCoin) {
    sumCoin += level.coin
}
let soCoinDu = sumCoin % 3;
console.log(`Số coin dư khi chia tổng số coin cho 3 là ${soCoinDu}`)

// Bài 2
