/* Filter High Scores
เขียนฟังก์ชัน getHighScorers(gameResults, threshold) 
ที่รับ array ของผลการเล่นเกม และคะแนนขั้นต่ำ แล้วคืนค่าเป็น 
array ของชื่อผู้เล่นที่ได้คะแนนสูงกว่าหรือเท่ากับ threshold 
โดยให้แปลงชื่อเป็นตัวพิมพ์เล็ก */

const gameResults = [
  { player: 'JOHN', score: 150 },
  { player: 'MARY', score: 180 },
  { player: 'PETER', score: 120 },
  { player: 'ANNA', score: 200 },
  { player: 'TOM', score: 90 }
];
//Expected Output: เมื่อเรียก getHighScorers(gameResults, 140) ควรได้ ["john", "mary", "anna"]

function getHighScorers(gameResults, threshold) {
    let result = [];
    for (let i = 0; i < gameResults.length; i++) {
        let player = gameResults[i];
        if (player.score >= threshold) {
            result.push(player.player.toLowerCase());
        }
    }
    return result;
}

function getHighScorers(gameResults, threshold) {
    return gameResults
        .filter(player => player.score >= threshold)
        .map(player => player.player.toLowerCase());
}

console.log(getHighScorers(gameResults, 140)); 
// Output: ["john", "mary", "anna"]