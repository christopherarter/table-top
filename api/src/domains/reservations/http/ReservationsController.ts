import { Controller, Get } from '@overnightjs/core'
import { Request, Response } from 'express'
import ReservationRepository from '../ReservationRepository';
import ReservationResource from './ReservationResource';


@Controller('reservations')
export default class RestaurantsController {

  protected repository: ReservationRepository

  constructor()
  {
    this.repository = new ReservationRepository();
  }

  @Get('/')
  private async get(req: Request, res: Response) {
    return res.send(this.repository.all().map(restuarant => {
      return ReservationResource(restuarant);
    }));
  }
  
}
