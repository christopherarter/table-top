import { Reservation } from "@/types";

export default {
  reservations: [
      {
          name: 'Han Solo',
          email: 'solo@millenniumfalconspacecharters.com',
          party_size: 6,
          reserved_for: new Date(),
          restaurant_id: 1,
      },
      // plz dont visit these websites, I have no idea if they're real and I'm too scared to check.
      {
        name: 'Darth Vader',
        email: 'vader@notthefather.com',
        party_size: 6,
        reserved_for: new Date(),
        restaurant_id: 1,
    }
  ]
}
