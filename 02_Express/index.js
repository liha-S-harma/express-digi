import express from "express";
const app = express();
const port = 3000;

app.use(express.json());

let teaData = [];
let nextId = 1;

// add a new tea
app.post("/teas", (req, res) => {
  const { name, price } = req.body;
  const newTea = { id: nextId++, name, price };
  teaData.push(newTea);
  res.status(201).send(newTea);
});

// get all tea
app.get("/teas", (req, res) => {
  res.status(200).send(teaData);
});

//get a tea with a unique id
app.get("/teas/:id", (req, res) => {
  const tea = teaData.find((t) => t.id === parseInt(req.params.id)); // if anything comes in the body we say req.body if anything comes through url we call it params
  if (!tea) {
    return res.status(404).send("Tea Not Found");
  }
  res.status(200).send(tea);
});

// update tea

app.put("/teas/:id", (req, res) => {
  const teaid = req.params.id;
  const tea = teaData.find((t) => t.id === parseInt(teaid));
  if (!tea) {
    return res.status(404).send("Tea not Found");
  }
  const { name, price } = req.body;
  tea.name = name;
  tea.price = price;
  res.send(200).send(tea);
});

//  delete tea

app.delete("/teas/:id", (req, res) => {
  const index = teaData.findIndex((t) => t.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send("teas not found");
  }
  teaData.splice(index, 1);
  return res.status(204).send("teas deleted");
});

// app.get("/", (req, res) => {
//   res.send("Hello sahil chai!");
// });
// app.get("/coffee", (req, res) => {
//   res.send("Hello sahil coffee!");
// });
// app.get("/gfg", (req, res) => {
//   res.send("sahilgfg.com");
// });
app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});
