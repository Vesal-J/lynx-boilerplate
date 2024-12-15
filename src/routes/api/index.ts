import { Router } from "express";
import UsersModule from '../../modules/users/router'

const router = Router()

router.use('/users', UsersModule)

router.get('/', async (req, res) => {
    res.send('Index Router')
})

export default router