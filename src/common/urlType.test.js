import urlType from "./urlType";

describe("UrlType funtion", () => {
  it("test returns", () => {
    const paramNull = urlType("");
    expect(paramNull).toEqual("");

    const paramType = urlType("micro");
    expect(paramType).toEqual("by_type=micro");
  });
});
