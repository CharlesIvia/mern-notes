export const createTodo = async (todo) =>
  await fetch("http://localhost:400/create", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  }).then((res) => {
    res.json();
  });
