import React from "react";

function BlogContent(props) {
  if (props.isPusblished){
  //hide unpublished content
  //null will have DOM display zero elements
  return null;
} else {
  //show published content
  return(
    <div id="blog-content">
      <h1>{props.articleText}</h1>
      <p>{props.minutesToRead} minutes to read</p>
      </div>
    );
  }         
}

export default BlogContent;
