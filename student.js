const studentData = require("./student-data.json");

function getBestStudent(studentData) {    
    const winners = [];

  studentData.forEach((group) => {
    const maxScore = Math.max(...group.map((s) => s.score));

    const topScorers = group.filter((s) => s.score === maxScore);

    const winner = topScorers.reduce((earliest, current) => {
      return new Date(current.date) < new Date(earliest.date)
        ? current
        : earliest;
    });
    console.log(
       `Congrat ${winner.name} with best score: ${winner.score} and date ${
        winner.date
      } .`
    );
    winners.push(winner);
  });
  return winners;
}

module.exports = getBestStudent;
