import cpfGenerator from '../assets/functions/cpfGenerator.js';

export const getNewCpf = (req, res) => {
  const p = req.query.p === 'true' ? true : false;
  const newCPF = cpfGenerator(p);
  res.send(newCPF);
};
