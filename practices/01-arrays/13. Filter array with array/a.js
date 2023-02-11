const solution = (targets, products) => {
  if (!targets?.length || !products?.length) return [];
  const productMap = {};
  for (const item of products) {
    productMap[item.name] = item;
  }

  return targets
    .filter((t) => t === productMap[t]?.name)
    .map((t) => productMap[t]);
};

console.log(
  solution(
    ["a", "c", "b", "h", "e"],
    [
      { id: 1, name: "e" },
      { id: 2, name: "b" },
      { id: 3, name: "c" },
      { id: 4, name: "d" },
      { id: 5, name: "a" },
      { id: 5, name: "f" },
    ]
  )
);
