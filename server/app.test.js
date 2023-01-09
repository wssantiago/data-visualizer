const app = require("./app.js");
const request = require("supertest");

describe("POST /users", () => {
  it("should respond with a 200 status code", async () => {
    const resp = await request(app).post("/users").send({
      firstName: "Williams",
      lastName: "Santiago",
      participation: "13",
    });
    expect(resp.statusCode).toBe(200);
  });

  it("should respond with a json content-type in the header", async () => {
    const resp = await request(app).post("/users").send({
      firstName: "Williams",
      lastName: "Santiago",
      participation: "13",
    });
    expect(resp.headers["content-type"]).toEqual(
      expect.stringContaining("text/html")
    );
  });
});

describe("GET /users", () => {
  it("should respond with a 200 status code", async () => {
    await request(app).get("/users").expect(200);
  });

  it("should respond with a JSON as header content-type", async () => {
    await request(app)
      .get("/users")
      .expect("Content-Type", "application/json; charset=utf-8");
  });

  it("should respond with the whole object from /data folder", async () => {
    
  })
});
