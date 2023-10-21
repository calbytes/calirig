import Cookies from 'cookies';
import log4js from 'log4js';

export default async function handler(req, res) {
  const logger = log4js.getLogger();
  logger.level = "info";

  if (req.method == "POST"){
    const cookies = new Cookies(req, res);
    logger.log("Logging out user: " + cookies.get("username"));
    cookies.set("username", null);
    cookies.set("role", null);
  }

  res.status(200).redirect("/");
}