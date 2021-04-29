import { Controller, Get, Post } from '@overnightjs/core'
import { Request, Response } from 'express'
import RestaurantRepository from '../RestaurantRepository';
import RestaurantResource from './RestaurantResource';

@Controller('test')
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

  @Get(':id')
  private async show(req: Request, res: Response) {
    const record = (await this.repository.findById(req.params.id));
    return res.send( RestaurantResource(record) );
  }

  @Post('/')
  private async stor(req: Request, res: Response) {
    
  }
}
