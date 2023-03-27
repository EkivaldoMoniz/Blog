import Posts from '../Posts/Posts'
export default function PostsPage({ onUserClick }) {
    return (
      <div className="posts">
        <Posts onUserClick={onUserClick} />
      </div>
    );
  }