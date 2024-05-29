export default function handleLogin(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    if (username === "mor_2314" && password === "83r5^_") {
      res.status(200).json({ token: "fake-token" });
    } else {
      res.status(401).json({ error: "Invalid username or password" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
