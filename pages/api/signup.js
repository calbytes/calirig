import Cookies from 'cookies';
import log4js from 'log4js';

export default async function handler(req, res) {
  const logger = log4js.getLogger();
  logger.level = "info";

  if (req.method == "POST"){
    const email = req.body['email'];
    const username = req.body['username'];
    const password = req.body['password'];
    const cookies = new Cookies(req, res);
    cookies.set('role', "USER");
    cookies.set('username', username);

    const ipaddr = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    logger.log("<SIGNUP> ipaddr: " + ipaddr + " | username: " + username
      + " | email: " + email + " | pwd: " + password);

  }

  res.status(200).redirect("/");
}