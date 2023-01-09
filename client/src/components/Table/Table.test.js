import "@testing-library/jest-dom";
import Table from "./Table.js";

jest.mock("./Table.js");

describe(Table, () => {
  it("table (datagrid) is rendered correctly", () => {
    Table();
    expect(Table).toHaveBeenCalledTimes(1);
  });

  it("table is called with initial state", () => {
    Table({
      users: [
        {
          firstName: "Williams",
          lastName: "Santiago",
          participation: "23",
          id: 1,
        },
      ],
    });
    expect(Table).toHaveBeenCalledWith({
      users: [
        {
          firstName: "Williams",
          lastName: "Santiago",
          participation: "23",
          id: 1,
        },
      ],
    });
  });

  it("table should return a div with the mui DataGrid component", () => {
    Table();
    expect(Table).toHaveReturned();
  });
});
