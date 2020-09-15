const status = require("../../../services/esi/status")

test("ESI Status", async () =>{
    const response = await status.getStatus();
    expect(response.body).toBeDefined();
    expect(response.headers).toBeDefined();
    expect(response.body["players"]).toBeDefined();
    expect(response.body["start_time"]).toBeDefined();
    expect(response.body["players"]).toBeGreaterThan(100);
    expect(response.headers["x-esi-error-limit-remain"]).toBeDefined();
    expect(response.headers["x-esi-error-limit-reset"]).toBeDefined();
})