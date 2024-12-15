import { Router } from "express";

const web = Router()

web.get('/', async (req, res) => {
    res.render('index')
})

export default web