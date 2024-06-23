const dbConn = require('../config/db.config');

const AllComments = function (comment) {
    // this.id = comment.id;
    this.review_id = comment.review_id;
    this.comment_text = comment.comment_text;
    this.comment_date = comment.comment_date;
    this.comment_name = comment.comment_name;
    // this.name = comment.name
    // this.email = comment.email;
    // this.comment = comment.comment;
}

//get all Comments
AllComments.getAllComments = (result) => {
  dbConn.query("SELECT * FROM comments", (err, res) => {
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
AllComments.getByCommentId = (review_id, result) => {
  dbConn.query(
    "SELECT * FROM comments WHERE review_id = ?",
    review_id,
    (err, res) => {
      if (err) {
       console.log("Error while fetching data by id", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

  // create new comment
  AllComments.createNewComment = (commentReqData, result) => {
    dbConn.query("INSERT INTO comments SET ?", commentReqData, (err, res) => {
        if (err) {
            console.log("Error while inserting comment", err);
            result(null, err);
        } else {
            console.log("Comment created successfully");
            result(null, res);
        }
    });
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
      "UPDATE review_comment SET comment_text=?, comment_name=?, comment_date=?  WHERE id = ?",
      [CommentsReqData.comment_text, CommentsReqData.comment_name, CommentsReqData.comment_date, id],
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
  