import { Router } from 'express'

import validate from 'express-validation'

import authMiddleware from './app/middlewares/Auth'
import checkAccommodation from './app/middlewares/CheckAccommodationMiddleware'
import getUnavailableAccommodation from './app/middlewares/GetUnavailableAccommodationMiddleware'

import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import AccommodationController from './app/controllers/AccommodationController'
import ReservationController from './app/controllers/ReservationController'
import BlockDateController from './app/controllers/BlockDateController'
import GuestController from './app/controllers/GuestController'

import Accommodation from './app/validators/Accommodation'
import Reservation from './app/validators/Reservation'
import User from './app/validators/User'
import Session from './app/validators/Session'

const routes = Router()

routes.post('/sessions', validate(Session), SessionController.store)
routes.post('/users', validate(User), UserController.create)

/**
 * Rotas protegidas por token jwt
 */
routes.use(authMiddleware)

routes.get(
  '/accommodations',
  getUnavailableAccommodation,
  AccommodationController.read
)
routes.post(
  '/accommodations',
  validate(Accommodation),
  AccommodationController.create
)
routes.put('/accommodations/:id', AccommodationController.update)
routes.delete('/accommodations/:id', AccommodationController.delete)

routes.get('/reservations', ReservationController.index)
routes.get('/reservations/:id', ReservationController.read)
routes.post(
  '/reservations',
  validate(Reservation),
  checkAccommodation,
  ReservationController.create
)
routes.put('/reservations/:id', ReservationController.update)
routes.delete('/reservations/:id', ReservationController.delete)

routes.get('/block', BlockDateController.read)
routes.post('/block', BlockDateController.create)
routes.put('/block', BlockDateController.update)
routes.delete('/block', BlockDateController.delete)

routes.get('/guests', GuestController.show)

export default routes
