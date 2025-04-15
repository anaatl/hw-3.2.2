const getBestStudent = require("./student");
const studentData = require("./student-data.json");

describe("Testing function to find best student", () => {
  test("Test if expected best student of group meets actual result", () => {
    const winners = getBestStudent(studentData);
    expect(winners).toStrictEqual([
      { name: "Ivan", score: 35, date: "2022-10-11" },
      { name: "Marina", score: 25, date: "2022-10-01" },
      { name: "Varvara", score: 0, date: "2022-10-01" },
    ]);
  });

  test("Test the output message for win student", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    const winner = getBestStudent(studentData);

    // Expect the console log message for the top and fastest student
    expect(consoleSpy).toHaveBeenCalledWith(
      `Congrat Ivan with best score: 35 and date 2022-10-11 .`
    );
 
    consoleSpy.mockRestore();
  });
});
