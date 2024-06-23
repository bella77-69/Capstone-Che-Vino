const CommentsModel = require("../models/comments.model");

// get all comments list
exports.getAllComments = (req, res) => {
  //console.log('here all users list');
  CommentsModel.getAllComments((err, user) => {
    // console.log("We are here");
    if (err) res.send(err);
    //console.log("user", user);
    res.send(user);
  });
};

// get comment by name
exports.getByCommentId= (req, res) => {
  CommentsModel.getByCommentId(req.params.id, (err, user) => {
    if (err) res.send(err);
   // console.log("single email user data", user);
    res.send(user);
  });
};
  
  // create new comment
  exports.createNewComment = (req, res) => {
    const commentReqData = new CommentsModel(req.body);

    // Check for null or empty request body
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ success: false, message: "Please fill all fields" });
    } else {
        CommentsModel.createNewComment(commentReqData, (err, comment) => {
            if (err) {
                res.send(err);
            } else {
                res.json({
                    status: true,
                    message: "Comment Created Successfully",
                    data: comment.insertId,
                });
            }
        });
    }
};
  
  // get comment  by ID 
  exports.getCommentByID = (req, res) => {
    CommentsModel.getCommentByID(req.params.id, (err, comment) => {
      if (err) {
        console.log("Error retrieving comment by ID:", err);
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving comment."
        });
      } else {
        res.status(200).send(comment);
      }
    });
  };
  
  // update comment
  exports.updateComment = (req, res) => {
    const CommentsReqData = new CommentsModel(req.body);
  //  console.log("AllWinesReqData update", AllWinesReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      CommentsModel.updateComment(
        req.params.id,
        CommentsReqData,
        (err, user) => {
          if (err) res.send(err);
          res.json({ status: true, message: "comment updated Successfully" });
        }
      );
    }
  };
  
  // delete comment
  exports.deleteComment = (req, res) => {
    CommentsModel.deleteComment(req.params.id, (err, user) => {
      if (err) res.send(err);
      res.json({ success: true, message: "Comment deleted successully!" });
    });
  };