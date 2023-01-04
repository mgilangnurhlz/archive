import Aspirasi from "../models/AspirasiModel.js";
import User from "../models/UserModel.js";
import { Op } from "sequelize";

export const getAspirasis = async (req, res) => {
  try {
    let response;
    if (req.role === "admin") {
      response = await Aspirasi.findAll({
        attributes: ["uuid", "name", "deskripsi", "status"],
        include: [
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],
      });
    } else {
      response = await Aspirasi.findAll({
        attributes: ["uuid", "name", "deskripsi", "status"],
        where: {
          userId: req.userId, //? mencari data aspirasi dari userid
        },
        include: [
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getAspirasiById = async (req, res) => {
  try {
    const aspirasi = await Aspirasi.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!aspirasi) return res.status(404).json({ msg: "Data tidak ditemukan" });
    let response;
    if (req.role === "admin") {
      response = await Aspirasi.findOne({
        attributes: ["uuid", "name", "deskripsi", "status"],
        where: {
          id: aspirasi.id,
        },
        include: [
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],
      });
    } else {
      response = await Aspirasi.findOne({
        attributes: ["uuid", "name", "deskripsi", "status"],
        where: {
          [Op.and]: [{ id: aspirasi.id }, { userId: req.userId }], //? aspirasi milik user
        },
        include: [
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createAspirasi = async (req, res) => {
  const { name, deskripsi, status } = req.body;
  try {
    await Aspirasi.create({
      name: name,
      deskripsi: deskripsi,
      status: status,
      userId: req.userId,
    });
    res.status(201).json({ msg: "Aspirasi Created Successfuly" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateAspirasi = async (req, res) => {
  try {
    const aspirasi = await Aspirasi.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!aspirasi) return res.status(404).json({ msg: "Data tidak ditemukan" });
    const { name, deskripsi, status } = req.body;
    if (req.role === "admin") {
      await Aspirasi.update(
        { name, deskripsi, status },
        {
          where: {
            id: aspirasi.id,
          },
        }
      );
    } else {
      if (req.userId !== aspirasi.userId)
        return res.status(403).json({ msg: "Akses terlarang" });
      await Aspirasi.update(
        { name, deskripsi, status },
        {
          where: {
            [Op.and]: [{ id: aspirasi.id }, { userId: req.userId }],
          },
        }
      );
    }
    res.status(200).json({ msg: "Aspirasi updated successfuly" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteAspirasi = async (req, res) => {
  try {
    const aspirasi = await Aspirasi.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!aspirasi) return res.status(404).json({ msg: "Data tidak ditemukan" });
    const { name, deskripsi, status } = req.body;
    if (req.role === "admin") {
      await Aspirasi.destroy({
        where: {
          id: aspirasi.id,
        },
      });
    } else {
      if (req.userId !== aspirasi.userId)
        return res.status(403).json({ msg: "Akses terlarang" });
      await Aspirasi.destroy({
        where: {
          [Op.and]: [{ id: aspirasi.id }, { userId: req.userId }],
        },
      });
    }
    res.status(200).json({ msg: "Aspirasi deleted successfuly" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
