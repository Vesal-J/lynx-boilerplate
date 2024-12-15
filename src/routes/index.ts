import { Router } from "express";
import api from './api'
import web from './web'

const router = Router()

router.use('/api', api)
router.use('/web', web)

router.get('/', async (req, res) => {
    res.send('[Lynx Boilerplate] - Greeting Sire')
})

export default router