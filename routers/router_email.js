import { Router } from 'express'

import controller_email from '../controllers/controller_email'

const router = new Router()

// Crear un nuevo ejercicio
router.post('/send-email', controller_email.sendEmail)


export default router