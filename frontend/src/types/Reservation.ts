type Reservation = {
  id?: number
  name: string
  email: string
  party_size: number
  reserved_for: Date | string
  created_at?: string
  restaurant_id: number
}

export default Reservation
