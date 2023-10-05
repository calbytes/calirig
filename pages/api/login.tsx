import Cookies from 'cookies';

export default async function handler(req, res) {
  if (req.method == "POST"){
    const username = req.body['username']
    const password = req.body['password']
    
    const cookies = new Cookies(req, res);
    cookies.set('usr', username);
    cookies.set('role', "admin");
    res.redirect("/");
  }
}