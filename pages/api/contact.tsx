export default async function handler(req, res) {
  if (req.method == "POST"){
    const name = req.body['name'];
    const email = req.body['email'];
    const msg = req.body['message'];
    
    console.log(name + ", " + email + ", " + msg);
  }

  res.redirect("/");
}