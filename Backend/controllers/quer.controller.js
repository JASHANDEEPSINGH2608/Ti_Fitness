// controllers/queryController.js
import Query from "../Models/query.model.js"

export const submitQuery = (req, res) => {
  const { instrument, query } = req.body;
  const newQuery = new Query({
    instrument,
    query,
  });
  newQuery.save()
    .then(() => {
      res.status(200).json({ success: true, message: 'Query submitted successfully' });
    })
    .catch((err) => {
      console.error('Error saving query:', err);
      res.status(500).json({ success: false, message: 'Error submitting query' });
    });
};


export const getQueries = (req, res) => {
    Query.find({})
      .then(queries => {
        res.status(200).json({ success: true, queries });
      })
      .catch(err => {
        console.error('Error retrieving queries:', err);
        res.status(500).json({ success: false, message: 'Error retrieving queries' });
      });
  };
  
