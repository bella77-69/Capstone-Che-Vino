const dbConn = require('../config/db.config');

const AllComments = function (comment) {
    // this.id = comment.id;
   
    this.name = comment.name
    this.email = comment.email;
    this.comment = comment.comment;
}

//get all Comments
AllComments.getAllComments = (result) => {
  dbConn.query("SELECT * FROM review_comment", (err, res) => {
    if (err) {
      console.log("Error while fetching All Comments", err);
      result(null, err);
    } else {
    //  console.log("Admin fetched successfully");
      result(null, res);
    }
  });
};


//get comments by comment id
AllComments.getByCommentId = (email, result) => {
  dbConn.query(
    "SELECT * FROM review_comment WHERE email= ?",
    email,
    (err, res) => {
      if (err) {
       console.log("Error while fetching data by email", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

  // create new comment
  AllComments.createNewComment = (CommentsReqData, result) => {
    dbConn.query(
      "INSERT INTO review_comment SET ?",
      CommentsReqData,
      (err, res) => {
        if (err) {
          console.log("Error while inserting data");
          result(null, err);
        } else {
          console.log("comment created successfully");
          result(null, res);
        }
      }
    );
  };
  
  //get comment by ID
  AllComments.getCommentByID = (id, result) => {
    dbConn.query("SELECT * FROM comments WHERE comment_id = ?", id, (err, res) => {
      if (err) {
        console.log("Error while fetching comment by id", err);
        result(err, null);
      } else {
        result(null, res);
      }
    });
  };
  
  //update comment
  AllComments.updateComment = (id, CommentsReqData, result) => {
    dbConn.query(
      "UPDATE review_comment SET comment=?, name=?, email=?  WHERE id = ?",
      [CommentsReqData.comments, CommentsReqData.name, CommentsReqData.email, id],
      (err, res) => {
        if (err) {
          console.log("Error while updating Comments");
          result(null, err);
        } else {
          console.log("Comments updated successfully");
          result(null, res);
        }
      }
    );
  };
  
  //delete comment
  AllComments.deleteComment = (id, result) => {
    dbConn.query("DELETE from review_comment WHERE id=?", [id], (err, res) => {
      if (err) {
        console.log("Error while deleting the comment");
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  module.exports = AllComments;
  