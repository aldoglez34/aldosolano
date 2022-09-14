import { Router } from "express";
import { sendEmail } from "./guest/guest";

const BASE_URL = {
  API: "api",
};

const router: Router = Router();

router.use(`/${BASE_URL.API}`, sendEmail);

export default router;
