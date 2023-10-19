import Cookies from 'cookies';
import log4js from 'log4js';

export default async function handler(req, res) {
  const logger = log4js.getLogger();
  logger.level = "info";

  if (req.method == "POST"){
    const email = req.body['email'];
    const username = req.body['username'];
    const cookies = new Cookies(req, res);
    cookies.set('role', "USER");

    const ipaddr = req.ipaddr;
    logger.log("<SIGNUP> ipaddr: " + ipaddr + " | username: " + username 
      + " | email: " + email + " | pwd: " + password);

  }

  res.status(200).redirect("/");
}