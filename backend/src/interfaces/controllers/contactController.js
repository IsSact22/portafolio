import createContactUseCase from "../../application/contact/createContactUseCase.js";
import getAllContactsUseCase from "../../application/contact/getAllContactsUseCase.js";
import getContactByIdUseCase from "../../application/contact/getContactByIdUseCase.js";
import updateContactUseCase from "../../application/contact/updateContactUseCase.js";
import deleteContactUseCase from "../../application/contact/deleteContactUseCase.js";

class ContactController {
  // Crear un nuevo mensaje de contacto
  async create(req, res, next) {
    try {
      const contact = await createContactUseCase(req.body);

      res.status(201).json({
        success: true,
        message: "Mensaje de contacto enviado exitosamente",
        data: contact,
      });
    } catch (error) {
      next(error);
    }
  }

  // Obtener todos los mensajes de contacto (Admin)
  async getAll(req, res, next) {
    try {
      const filters = {
        status: req.query.status,
        search: req.query.search,
      };

      const contacts = await getAllContactsUseCase(filters);

      res.status(200).json({
        success: true,
        data: contacts,
      });
    } catch (error) {
      next(error);
    }
  }

  // Obtener un mensaje por ID (Admin)
  async getById(req, res, next) {
    try {
      const { id } = req.params;
      const contact = await getContactByIdUseCase(id);

      res.status(200).json({
        success: true,
        data: contact,
      });
    } catch (error) {
      next(error);
    }
  }

  // Actualizar estado de un mensaje (Admin)
  async update(req, res, next) {
    try {
      const { id } = req.params;
      const contact = await updateContactUseCase(id, req.body);

      res.status(200).json({
        success: true,
        message: "Mensaje actualizado exitosamente",
        data: contact,
      });
    } catch (error) {
      next(error);
    }
  }

  // Eliminar un mensaje (Admin)
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      await deleteContactUseCase(id);

      res.status(200).json({
        success: true,
        message: "Mensaje eliminado exitosamente",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new ContactController();
