import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h2>Warning!</h2>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:05PM"
          text="Fantastic!"
          avatar={faker.image.avatar()} 
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 3:37PM"
          text="I agree!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Eric"
          timeAgo="Yesterday at 1:45AM"
          text="Nice blog post!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
    
  )
};

ReactDOM.render(<App />, document.querySelector("#root"));