import cpfGenerator from '../assets/functions/cpfGenerator.js';

export const getNewCpf = (req, res) => {
  const mask = req.query.mask === 'true' ? true : false;
  const newCPF = cpfGenerator(mask);
  res.send(newCPF);
};
