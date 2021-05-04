import { ClassMiddleware, Controller, Get, Middleware } from '@overnightjs/core'
import { Request, Response } from 'express'
import ReservationRepository from '../ReservationRepository';
import ReservationResource from './ReservationResource';
import { RestaurantRepository } from '../../restaurants';
import { Reservation } from '..';


@Controller('reservations')
export default class RestaurantsController {

  protected repository;

  constructor() 
  {
    this.repository = new ReservationRepository();
  }

  @Get('/')
  private async get(req: Request, res: Response) {

    Reservation
    if(req.query.restaurant_id)
    {
      return  res.send( await Reservation.findAll({
        where: {
          restuarnt_id: req.query.restaurant_id
        }
      }) )
    }

    const restuarant = await new RestaurantRepository().findById(req.params.restuarant_id);
    if(restuarant)
    {
      return res.send(JSON.stringify(restuarant));
    }
    return res.sendStatus(404);
  }
  
}
