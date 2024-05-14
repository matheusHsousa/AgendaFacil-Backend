import express from "express";
import {
  getEstabelecimentos,
  creatEstabelicimento,
  getcustomers,
  updateStatus,
  getCategorias,
  getUserByLoginAndPassword,
  getRoles,
  filterCategory,
  editCustomer,
  getCustomerById,
  getcustomersByPage,
  getStatus,
  getProfilePicture,
  editProfilePicture,
  editPhotos,
  getFotos,
  deleteImage,
  avaliation,
  getAvalatiation,
  getComments,
  postComment,
  postReply,
  getReplies,
  editCustomerViewAdm,
  appointments,
  getAppointments,
  obterQRCode,
  enviarMensagem
} from "../controllers/user.js";

const router = express.Router();

router.get("/getEstabelecimentos", getEstabelecimentos);
router.post("/creatEstabelicimento", creatEstabelicimento);
router.get("/getcustomers", getcustomers);
router.get("/getcustomersById/:id", getCustomerById);
router.put("/deleteCustomer", updateStatus);
router.get("/getCategorias", getCategorias);
router.get("/getRoles", getRoles)
router.post("/getUserByLoginAndPassword", getUserByLoginAndPassword)
router.post("/filterCategory", filterCategory)
router.put("/editCustomer", editCustomer);
router.get("/getcustomersByPage", getcustomersByPage);
router.get("/getStatus/:id", getStatus);
router.get("/getProfilePicture/:id", getProfilePicture)
router.put("/editProfilePicture", editProfilePicture);
router.put("/editPhotos/", editPhotos);
router.get("/getFotos/:id", getFotos)
router.put("/deleteImage", deleteImage);
router.put("/avaliation", avaliation);
router.get("/getAvalatiation/:id", getAvalatiation);
router.get("/getComments/:id", getComments);
router.post("/postComment/:id", postComment);
router.post("/postReply", postReply);
router.post("/getReplies", getReplies)
router.put("/editCustomerViewAdm", editCustomerViewAdm);
router.post("/appointments", appointments);
router.get("/getAppointments", getAppointments)
router.post("/obterQRCode", obterQRCode)
router.post("/enviarMensagem", enviarMensagem)


export default router;
