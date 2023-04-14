import mergeObjectsInArraysByProperty from "../mergeObjectsInArraysByProperty";

describe("mergeObjectsInArraysByProperty", () => {
  it("merges objects by prop", () => {
    const lists = [
      [{ id: 1, foo: "foo" }, { id: 2 }, { id: 3 }],
      [{ id: 1, bar: "bar" }, { id: 4, bar: "bar" }, { id: 5 }],
      [{ id: 1, baz: "baz" }, { id: 4, bar: "bar" }, { id: 6 }],
    ];

    expect(mergeObjectsInArraysByProperty(lists, "id")).toEqual([
      { id: 1, foo: "foo", bar: "bar", baz: "baz" },
      { id: 2 },
      { id: 3 },
      { id: 4, bar: "bar" },
      { id: 5 },
      { id: 6 },
    ]);
  });
});
