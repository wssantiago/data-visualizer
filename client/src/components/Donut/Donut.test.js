import "@testing-library/jest-dom";
import Donut from "./Donut.js";

jest.mock("./Donut.js");

describe(Donut, () => {
  it("donut chart is rendered correctly", () => {
    Donut();
    expect(Donut).toHaveBeenCalledTimes(1);
  });

  it("donut chart is called with initial state", () => {
    Donut({
      users: [
        {
          firstName: "Williams",
          lastName: "Santiago",
          participation: "23",
          id: 1,
        },
        {
          firstName: "Elaine",
          lastName: "Santiago",
          participation: "22",
          id: 2,
        },
      ],
    });
    expect(Donut).toHaveBeenCalledWith({
      users: [
        {
          firstName: "Williams",
          lastName: "Santiago",
          participation: "23",
          id: 1,
        },
        {
          firstName: "Elaine",
          lastName: "Santiago",
          participation: "22",
          id: 2,
        },
      ],
    });
  });

  it("donut should return the Chart component from apexcharts", () => {
    Donut();
    expect(Donut).toHaveReturned();
  });
});
