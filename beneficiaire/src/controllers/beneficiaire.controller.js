import prisma from '../prisma/client.js';

const create = async (req, res) => {
  try {
    const beneficiaire = await prisma.beneficiaire.create({ data: req.body });
    res.status(201).json(beneficiaire);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const findAll = async (req, res) => {
  try {
    const beneficiaires = await prisma.beneficiaire.findMany();
    res.json(beneficiaires);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const findById = async (req, res) => {
  try {
    const beneficiaire = await prisma.beneficiaire.findUnique({
      where: { id: req.params.id }
    });
    if (!beneficiaire) return res.status(404).json({ message: 'Bénéficiaire non trouvé' });
    res.json(beneficiaire);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const beneficiaire = await prisma.beneficiaire.update({
      where: { id: req.params.id },
      data: req.body
    });
    res.json(beneficiaire);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteBeneficiaire = async (req, res) => {
  try {
    await prisma.beneficiaire.delete({
      where: { id: req.params.id }
    });
    res.json({ message: 'Bénéficiaire supprimé' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { create, findAll, findById, update, deleteBeneficiaire };
