import Cookies from 'cookies';

export default async function handler(req, res) {
  if (req.method == "POST"){
    const email = req.body['email'];
    const username = req.body['username'];
    const cookies = new Cookies(req, res);
    res.redirect("/");
  }
}