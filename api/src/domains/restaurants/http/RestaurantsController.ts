import { ChildControllers, ClassOptions, Controller, Get, Post } from '@overnightjs/core'
import { Request, Response } from 'express'
import { ReservationController } from '../../reservations';
import RestaurantRepository from '../RestaurantRepository';
import RestaurantResource from './RestaurantResource';
@Controller('restaurants')
@ClassOptions({mergeParams: true})
@ChildControllers([
  new ReservationController
])
export default class RestaurantsController {

  protected repository: RestaurantRepository;

  constructor()
  {
    this.repository = new RestaurantRepository();
  }

  @Get('/')
  private async index(req: Request, res: Response) {
    return res.send((await this.repository.all()).map(restuarant => {
      return RestaurantResource(restuarant);
    }));
  }

  @Get(':restaurant_id')
  private async show(req: Request, res: Response) {
    const record = (await this.repository.findById(req.params.restaurant_id));
    return res.send( RestaurantResource(record) );
  }

  @Post('/')
  private async stor(req: Request, res: Response) {

  }
}
