import { Router } from "express";
import {
	getClincData,
	getTherapistAvailability,
	toggleTherapistAvailability,
	updateClincData,
} from "../controllers/Clinic";
import {
	toggleTherapistAvailabilityValidator,
	updateClincDataValidator,
} from "../validators/Clinic";

const Clinic = Router();

Clinic.route("/") // http://localhost:5000//api/clinic/
	.get(getClincData)
	.patch(updateClincDataValidator, updateClincData);
Clinic.route("/therapist") // http://localhost:5000//api/clinic/therapist
	.get(getTherapistAvailability)
	.patch(toggleTherapistAvailabilityValidator, toggleTherapistAvailability);

export default Clinic;
