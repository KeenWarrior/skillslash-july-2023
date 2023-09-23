// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "John Smith" },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(users);
  }

  if (req.method === "POST") {
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
  }
}
