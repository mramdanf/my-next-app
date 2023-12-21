export default function handler(req, res) {
  const userPayload = req.body;
  const { username, password } = userPayload;
  console.log(userPayload)
  if (username === "admin" && password === "admin") {
    res.status(200).json({ name: "John Doe" });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}
