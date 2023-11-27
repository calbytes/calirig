import Cookies from 'cookies';
import log4js from 'log4js';
import axios from '../../utils/axios'

export default async function handler(req, res) {
  const logger = log4js.getLogger();
  logger.level = "info";

  if (req.method == "POST"){
    const username = req.body['username'];
    const email = req.body['email'];
    const password = req.body['password'];
    const ipaddr = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    const cookies = new Cookies(req, res);
    cookies.set('role', "USER");
    cookies.set('username', username);

    logger.log("<SIGNUP> ipaddr: " + ipaddr + " | username: " + username
      + " | email: " + email + " | pwd: " + password);

    const userData = {
      username: username, 
      email: email, 
      password: password, 
      ip: ipaddr
    };

    try {
      const response = await axios.post("/signup", userData);
      //res.status(response.status).json(response.data);
      res.status(200).redirect("/signup");
    } catch (error) {
      logger.error('Error forwarding form data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }

  }

  res.status(200).redirect("/");
}