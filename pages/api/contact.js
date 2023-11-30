import log4js from 'log4js';
import axios from '../../utils/axios'

export default async function handler(req, res) {
  const logger = log4js.getLogger();
  logger.level = "info";

  if (req.method == "POST"){
    const name = req.body['name'];
    const email = req.body['email'];
    const msg = req.body['message'];
    const ipaddr = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    const userData = {
      name: name, 
      email: email, 
      message: msg, 
      ip: ipaddr
    };

    try {          
      const response = await axios.post("/contact", userData); 
      logger.info('POST /contact response status: ' + response.status);
      res.status(200).redirect("/");
    } catch (error) {
      logger.error('Error processing form:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}