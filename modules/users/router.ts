import { Router } from "express";
import { Index } from "./users.controller";

const router = Router()

router.get('/', Index)

export default router