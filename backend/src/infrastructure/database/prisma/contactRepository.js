import prisma from "./client.js";
import Contact from "../../../domain/contactEntity.js";
import { NotFoundError } from "../../../core/AppError.js";

class ContactRepository {
  async create(contactData) {
    const contact = await prisma.contact.create({
      data: contactData,
    });
    return this.toDomain(contact);
  }

  async findAll(filters = {}) {
    const where = {};

    // Filtrar por estado
    if (filters.status) {
      where.status = filters.status;
    }

    // Búsqueda por nombre o email
    if (filters.search) {
      where.OR = [
        { name: { contains: filters.search, mode: "insensitive" } },
        { email: { contains: filters.search, mode: "insensitive" } },
      ];
    }

    const contacts = await prisma.contact.findMany({
      where,
      orderBy: [{ createdAt: "desc" }],
    });

    return contacts.map((c) => this.toDomain(c));
  }

  async findById(id) {
    const contact = await prisma.contact.findUnique({
      where: { id },
    });

    if (!contact) {
      throw new NotFoundError("Contact");
    }

    return this.toDomain(contact);
  }

  async findByStatus(status) {
    const contacts = await prisma.contact.findMany({
      where: { status },
      orderBy: [{ createdAt: "desc" }],
    });

    return contacts.map((c) => this.toDomain(c));
  }

  async update(id, updateData) {
    try {
      const contact = await prisma.contact.update({
        where: { id },
        data: updateData,
      });

      return this.toDomain(contact);
    } catch (error) {
      if (error.code === "P2025") {
        throw new NotFoundError("Contact");
      }
      throw error;
    }
  }

  async delete(id) {
    try {
      await prisma.contact.delete({
        where: { id },
      });
      return true;
    } catch (error) {
      if (error.code === "P2025") {
        throw new NotFoundError("Contact");
      }
      throw error;
    }
  }

  async count(filters = {}) {
    const where = {};

    if (filters.status) {
      where.status = filters.status;
    }

    return await prisma.contact.count({ where });
  }

  async exists(id) {
    const count = await prisma.contact.count({
      where: { id },
    });
    return count > 0;
  }

  toDomain(contactRecord) {
    if (!contactRecord) return null;

    return new Contact({
      id: contactRecord.id,
      name: contactRecord.name,
      email: contactRecord.email,
      subject: contactRecord.subject,
      message: contactRecord.message,
      status: contactRecord.status,
      createdAt: contactRecord.createdAt,
      updatedAt: contactRecord.updatedAt,
    });
  }
}

export default new ContactRepository();
