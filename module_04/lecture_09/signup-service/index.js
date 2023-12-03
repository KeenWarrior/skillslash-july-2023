const express = require("express");
const { Kafka } = require("kafkajs");
const app = express();

const kafka = new Kafka({
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();

app.use(express.json());

app.post("/api/users", async (req, res) => {
    await producer.send({
        topic: 'signup',
        messages: [
          { value: JSON.stringify(req.body) },
        ],
      })
  res.send("User Created");
});

async function run() {
  try {
    await producer.connect();
    console.log("Producer connected");
    app.listen(5000, () => {
      console.log("Listening on port 5000...");
    });
  } catch (error) {
    console.log("Error connecting to producer", error);
  }
}

run();
