const AllWinesModel = require("../models/allWines.model");

// get all wines
exports.getAllWines = (req, res) => {
  AllWinesModel.getAllWines((err, user) => {
    if (err) res.send(err);
    res.send(user);
  });
};

// get wine by type
exports.getWineByType = (req, res) => {
  AllWinesModel.getWineByType(req.params.type, (err, type) => {
    if (err) res.send(err);
    res.send(type);
  });
};

exports.createNewWine = (req, res) => {
  const allWinesReqData = new AllWinesModel(req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    AllWinesModel.createNewWine(allWinesReqData, (err, user) => {
      if (err) res.send(err);
      res.json(user);
    });
  }
};

// get wine by ID  for Update
exports.getWineByID = (req, res) => {
  AllWinesModel.getWineByID(req.params.id, (err, user) => {
    if (err) res.send(err);
    res.send(user);
  });
};

// update wine
exports.updateWine = (req, res) => {
  const allWinesReqData = new AllWinesModel(req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    AllWinesModel.updateWine(req.params.id, allWinesReqData, (err, user) => {
      if (err) res.send(err);
      res.json({ status: true, message: "wine updated Successfully" });
    });
  }
};

// delete wine
exports.deleteWine = (req, res) => {
  AllWinesModel.deleteWine(req.params.id, (err, user) => {
    if (err) res.send(err);
    res.json({ success: true, message: "Wine deleted successully!" });
  });
};
