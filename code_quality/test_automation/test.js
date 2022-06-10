describe("Get Current Time ISO", function () {
  it("ISO String 형식이 맞는지 확인", function () {
    assert.typeOf(getCurrentTime(), "string", "Type: string");
  });
});
