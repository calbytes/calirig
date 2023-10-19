import log4js from 'log4js';

export default async function handler(req, res) {
  const logger = log4js.getLogger();
  logger.level = "info";

  if (req.method == "POST"){
    const name = req.body['name'];
    const email = req.body['email'];
    const msg = req.body['message'];
    
    logger.log("<CONTACT> name: " + name + " | email: " + email + " | msg: " + msg);
  }
  
  res.status(200).redirect("/");
}