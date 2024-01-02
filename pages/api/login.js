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

    logger.info("<LOGIN> ipaddr: " + ipaddr + " | username: " + username 
      + " | pwd: " + password + " | ip : " + ipaddr);

    const userData = {
      username: username, 
      password: password, 
      ip: ipaddr
    };

    try {
      const response = await axios.post("/cnetLogin", userData);
      const role = response.data.role;
      const cookies = new Cookies(req, res);
      cookies.set('role', role);
      cookies.set('username', username);
      logger.info("user <" + username + "> has been authenticated.");
      res.status(200).redirect("/login");
    } catch (error) {
      logger.error('There was an error authenticating user credentials');
      res.status(400).redirect("/login");
    }
  }

}