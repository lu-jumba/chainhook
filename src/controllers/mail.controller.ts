import { NextFunction, Request, Response } from 'express';
import MailService from '@services/mail.service';

class MailController {
  public mailService =  new MailService();

  public postMail = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
      await this.mailService.main();

      return res.status(200).json({ status: 'success' });
    } catch (error) {
      next(error);
    }
  };
}

export default MailController;
