// 1. Write a function to flatten an array of arbitrarily nested arrays into a flat array.

function flattenArr(arr) {
  if (arr.length < 1) return "There should be values in input";
  return arr.flat(Infinity);
}

function flattenArrTest(array) {
  array.forEach((element) => {
    let flag = false;
    const result = flattenArr(element[0]);
    if (typeof result === "string" && result === element[1]) {
      console.log("Passed");
    } else {
      for (let i = 0; i < element[1].length; i++) {
        if (typeof result[i] === "object") {
          let resultObj = Object.entries(result[i]).flat();
          let expectObj = Object.entries(element[1][i]).flat();
          for (let j = 0; j < resultObj.length; j++) {
            if (resultObj[i] !== expectObj[i]) {
              console.log("Failed");
              flag = true;
              i = element[1].length;
              j = resultObj.length;
            }
          }
        }

        if (result[i] !== element[1][i] && flag) {
          console.log("Failed");
          flag = true;
          i = element[1].length;
        }
      }

      if (!flag) {
        console.log("Passed");
      }
    }
  });

  return "Completed...!";
}

console.log(
  flattenArrTest([
    [
      [1, [2, [3, [4]], 5]],
      [1, 2, 3, 4, 5],
    ],
    [
      ["1", [2, [3, [4]], 5]],
      ["1", 2, 3, 4, 5],
    ],
    [
      ["1", [{ a: 2 }, [3, [4]], 5]],
      ["1", { a: 2 }, 3, 4, 5],
    ],
    [
      [true, [{ a: 2 }, [3, [4]], 5]],
      [true, { a: 2 }, 3, 4, 5],
    ],
    [
      [(item) => item + item, [{ a: 2 }, [3, [4]], 5]],
      [(item) => item + item, { a: 2 }, 3, 4, 5],
    ],
    [[[1, [2, [3, [[5]]]]]], [1, 2, 3, 5]],
    [
      [true, [false, [{ a: true }]], false],
      [true, false, { a: true }, false],
    ],
    [
      ["2", [true, [{ a: 2 }, [() => console.log("welcome")]]]],
      ["2", true, { a: 2 }, () => console.log("welcome")],
    ],
    [
      [1, [2, 3, 4, [6, 7, [8, 9]]]],
      [1, 2, 3, 4, 6, 7, 8, 9],
    ],
    [
      [{ a: 2, b: "c" }, [2, 4, [{ d: 2 }]]],
      [{ a: 2, b: "c" }, 2, 4, { d: 2 }],
    ],
    [[[[], [[], []]]], "There should be values in input"],
    [
      ["dog", ["cat", "elephant", ["lion"], ["zebra"]]],
      ["dog", "cat", "elephant", "lion", "zebra"],
    ],
    [
      [
        "dog",
        ["cat", "elephant", ["lion", [1, [3], 4, 5]]],
        [true, [false, { name: "walter" }]],
      ],
      [
        "dog",
        "cat",
        "elephant",
        "lion",
        1,
        3,
        4,
        5,
        true,
        false,
        { name: "walter" },
      ],
    ],
    [
      [1, [2, [3, [4, [5, [6, [7, [8, [9, [0]]]]], 11]]]]],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11],
    ],
    [
      [{},[{},[{}]]],
      [{},{},{}]
    ]
  ])
);
