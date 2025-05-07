import prisma from '../prisma/client.js';
import axios from 'axios';
const create = async (req, res) => {
  try {
    const demande = await prisma.demandeMiseAJour.create({ data: req.body });
    res.status(201).json(demande);
    await axios.post('http://localhost:3006/api/notifications', {
      type: "DEMANDE",
      message: "Nouvelle demande reçue",
      employeId: demande.employeId,
      conseillerId: demande.conseillerId,
      compagnieId: demande.beneficiaireId
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const findAll = async (req, res) => {
  try {
    const demandes = await prisma.demandeMiseAJour.findMany();
    res.json(demandes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const findById = async (req, res) => {
  try {
    const demande = await prisma.demandeMiseAJour.findUnique({
      where: { id: req.params.id }
    });
    if (!demande) return res.status(404).json({ message: 'Demande non trouvée' });
    res.json(demande);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const demande = await prisma.demandeMiseAJour.update({
      where: { id: req.params.id },
      data: req.body
    });
    res.json(demande);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteDemande = async (req, res) => {
  try {
    await prisma.demandeMiseAJour.delete({
      where: { id: req.params.id }
    });
    res.json({ message: 'Demande supprimée' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { create, findAll, findById, update, deleteDemande };
