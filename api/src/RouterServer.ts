import * as bodyParser from 'body-parser'
import morgan from 'morgan'
import { Server } from '@overnightjs/core'
import cors from 'cors'
import Logger from './logger'
import DomainService from './DomainService'

export class RouterServer extends Server {

  private registerGlobalMiddleware() : void
  {
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: true }))
    this.app.use(
      cors({
        origin: '*',
      })
    )
    this.app.use(morgan('combined'))
  }

  private registerControllers() : void
  {
    super.addControllers(DomainService.controllers());
    // register additional controllers here :) 
  }

  constructor() {
    super(process.env.NODE_ENV === 'development')
    this.registerGlobalMiddleware();
    this.registerControllers();
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      Logger.info(`Server listening on port: ${port}`)
    })
  }
}
