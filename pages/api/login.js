import Cookies from 'cookies';
import log4js from 'log4js';

export default async function handler(req, res) {
  const logger = log4js.getLogger();
  logger.level = "info";

  if (req.method == "POST"){
    const username = req.body['username'];
    const password = req.body['password'];

    const cookies = new Cookies(req, res);

    cookies.set('username', username);
    const role = "USER";

    if(username === "admin" && password === "passw0rd!!!"){
      cookies.set('role', "ADMIN");
    }else{
      cookies.set('role', role);
    }

    const ipaddr = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    logger.log("<LOGIN> ipaddr: " + ipaddr + " | username: " + username 
      + " | pwd: " + password + " | role: " + role);
  }

  res.status(200).redirect("/");
}