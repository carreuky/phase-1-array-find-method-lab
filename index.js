// code your solution here
function superbowlWin(record){
    const winYear = record.find((score) => score.result === "W")
return winYear ? winYear.year : undefined
}
