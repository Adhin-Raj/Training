// Write a function that filters out expired items. It takes an array of objects, each with data and an expires-at value in milliseconds.

interface dataType {
  value: string;
  expiresAt: number;
}

function expItems(data: dataType[]) {
  const today = new Date();

  const expired = data.filter((item) => {
    const itemDate = new Date(item.expiresAt);
    let arr = [];
    arr.push();
    if (
      itemDate.getFullYear() <= today.getFullYear() &&
      itemDate.getMonth() <= today.getMonth() &&
      itemDate.getDate() <= today.getDate() &&
      itemDate.getHours() <= today.getHours() &&
      itemDate.getMinutes() <= today.getMinutes() &&
      itemDate.getSeconds() <= today.getSeconds()
    ) {
      return true;
    }
  });

  return expired;
}

console.log(
  expItems([
    { value: "data1", expiresAt: 1764385871929 },
    { value: "data2", expiresAt: 1766448000000 },
    { value: "data3", expiresAt: 1728691200000 },
    { value: "data4", expiresAt: 1665532800000 },
  ])
);
