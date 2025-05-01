import prisma from '../prisma/client.js';

const create = async (req, res) => {
  try {
    const notification = await prisma.notification.create({ data: req.body });
    res.status(201).json(notification);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const findAll = async (req, res) => {
  try {
    const notifications = await prisma.notification.findMany();
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const findById = async (req, res) => {
  try {
    const notification = await prisma.notification.findUnique({
      where: { id: req.params.id }
    });
    if (!notification) return res.status(404).json({ message: 'Notification non trouvée' });
    res.json(notification);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const notification = await prisma.notification.update({
      where: { id: req.params.id },
      data: req.body
    });
    res.json(notification);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteNotification = async (req, res) => {
  try {
    await prisma.notification.delete({
      where: { id: req.params.id }
    });
    res.json({ message: 'Notification supprimée' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { create, findAll, findById, update, deleteNotification };
