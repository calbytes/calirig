import Cookies from 'cookies';

export default async function handler(req, res) {
  if (req.method == "POST"){
    const username = req.body['username'];
    const password = req.body['password'];

    const cookies = new Cookies(req, res);
    cookies.set('username', username);
    if(username === "admin" && password === "passw0rd!!!"){
      cookies.set('role', "ADMIN");
    }else{
      cookies.set('role', "USER");
    }
    
    res.status(200).redirect("/");
  }
}