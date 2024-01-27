
const livre = require('../models/livre')

const livreController = {
  getAllLivres: (req, res) => {
    livre.getAllLivres((err, livres) => {
        if (err) res.status(404).json(JSON.parse(err));
      res.json(livres);
    });
  },
   
  getLivreById: (req, res) => {
    const livreId = req.params.id;
    livre.getLivreById(livreId, (err, livre) => {
        if (err) res.status(404).json(JSON.parse(err));
      res.json(livre );
    });
  },

  addLivre: (req, res) => {
    const livreData = req.body;
    livre.addLivre(livreData, (err, result) => {
        if (err) res.status(404).json(JSON.parse(err));
      res.send('Livre  ajouté avec succès');
    });
  },

  updateLivre: (req, res) => {
    const livreId = req.params.id;
    const livreData = req.body;
    livre.updateLivre(livreId, livreData, (err, result) => {
        if (err) res.status(404).json(JSON.parse(err));
      res.send('Livre mis à jour avec succès');
    })
  },

  deleteLivre: (req, res) => {
    const livreId = req.params.id;
    livre.deleteLivre(livreId, (err, result) => {
        if (err) res.status(404).json(JSON.parse(err));
      res.send('Livre supprimé avec succès');
    });
  },
}

module.exports = livreController;

