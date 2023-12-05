import request from "supertest";
import server from "../index.js";

describe("Express App",() => {
  it("responds with 200 status for GET /api", async () => {
    expect(await server.address().port).toBe(3000);
  });

  afterAll(async () => {
    await server.close(); 
  });
});
