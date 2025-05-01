import prisma from '../prisma/client.js';

const create = async (req, res) => {
  try {
    const compagnie = await prisma.compagnieAssurance.create({ data: req.body });
    res.status(201).json(compagnie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const findAll = async (req, res) => {
  try {
    const compagnies = await prisma.compagnieAssurance.findMany();
    res.json(compagnies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const findById = async (req, res) => {
  try {
    const compagnie = await prisma.compagnieAssurance.findUnique({
      where: { id: req.params.id }
    });
    if (!compagnie) return res.status(404).json({ message: 'Compagnie non trouvée' });
    res.json(compagnie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const compagnie = await prisma.compagnieAssurance.update({
      where: { id: req.params.id },
      data: req.body
    });
    res.json(compagnie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCompagnie = async (req, res) => {
  try {
    await prisma.compagnieAssurance.delete({
      where: { id: req.params.id }
    });
    res.json({ message: 'Compagnie supprimée' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { create, findAll, findById, update, deleteCompagnie };
