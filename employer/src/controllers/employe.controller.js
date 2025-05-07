import prisma from '../prisma/client.js';
import axios from 'axios';

// const create = async (req, res) => {
//   try {
//     const employe = await prisma.employe.create({
//       data: { ...req.body },
//     });
//     res.status(201).json(employe);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };


const create = async (req, res) => {
  try {
    // Création de l'employé dans la base
    const employe = await prisma.employe.create({
      data: { ...req.body },
    });

    res.status(201).json(employe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const findAll = async (req, res) => {
  try {
    const employes = await prisma.employe.findMany();
    res.json(employes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const findById = async (req, res) => {
  try {
    const employe = await prisma.employe.findUnique({
      where: { id: req.params.id }
    });
    if (!employe) return res.status(404).json({ message: 'Employé non trouvé' });
    res.json(employe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const employe = await prisma.employe.update({
      where: { id: req.params.id },
      data: req.body
    });
    res.json(employe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteEmploye = async (req, res) => {
  try {
    await prisma.employe.delete({
      where: { id: req.params.id }
    });
    res.json({ message: 'Employé supprimé' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { create, findAll, findById, update, deleteEmploye };
