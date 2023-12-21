export default function handler(req, res) {
  const userPayload = req.body;
  const { username, password } = userPayload;
  console.log(userPayload)
  res.status(200).json({ name: "John Doe" });
}
