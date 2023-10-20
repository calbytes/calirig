import Cookies from 'cookies';
import log4js from 'log4js';

export default async function handler(req, res) {
  const logger = log4js.getLogger();
  logger.level = "info";

  logger.log("LOGGING OUT");

  if (req.method == "POST"){
    const cookies = new Cookies(req, res);
    cookies.set('username');
    cookies.set('role');
  }

  res.status(200);
}