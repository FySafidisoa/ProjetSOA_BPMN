import prisma from '../prisma/client.js';

const create = async (req, res) => {
  try {
    const conseiller = await prisma.conseillerRH.create({ data: req.body });
    res.status(201).json(conseiller);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const findAll = async (req, res) => {
  try {
    const conseillers = await prisma.conseillerRH.findMany();
    res.json(conseillers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const findById = async (req, res) => {
  try {
    const conseiller = await prisma.conseillerRH.findUnique({
      where: { id: req.params.id }
    });
    if (!conseiller) return res.status(404).json({ message: 'Conseiller non trouvé' });
    res.json(conseiller);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const conseiller = await prisma.conseillerRH.update({
      where: { id: req.params.id },
      data: req.body
    });
    res.json(conseiller);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteConseiller = async (req, res) => {
  try {
    await prisma.conseillerRH.delete({
      where: { id: req.params.id }
    });
    res.json({ message: 'Conseiller supprimé' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { create, findAll, findById, update, deleteConseiller };
