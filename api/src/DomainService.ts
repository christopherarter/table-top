import { Controller } from "@overnightjs/core/lib/decorators/types";
import { Restaurant, RestaurantsController } from "./domains/restaurants";
import { Reservation, ReservationController } from './domains/reservations';

type Domain = {
    controller: Controller | Array<Controller>,
    model: any,
    seeder?: Promise<any>,
}

/**
 * This class handles all the autoloading
 * for controllers and models for given domains.
 */
export default class DomainService {

    /**
     * To add a new auto-wired domain,
     * add it to this property.
     */
    private domains: Array<Domain> = [
        {
            controller: RestaurantsController,
            model: Restaurant,
        },
        {
            controller: ReservationController,
            model: Reservation,
        },
    ];

    public static controllers()
    {
        return (new DomainService()).domains.map(domain => {
            if(! Array.isArray(domain.controller)) return new domain.controller;
            return domain.controller.map(controller => new controller() );
        }).flat();
    }

    public static models()
    {
        return (new DomainService()).domains.map(domain => domain.model);
    }
}