import cnpjGenerator from '../assets/functions/cnpjGenerator.js';

export const getNewCnpj = (req, res) => {
  const mask = req.query.mask?.toLowerCase() === 'true' ? true : false;
  const newCNPJ = cnpjGenerator(mask);
  res.send(newCNPJ);
};
