export default function PostDetailCard({ post, onClose }) {
    if (!post) return null;
  
    return (
      <div className="card">
        <div className="card__header">
          <h3 className="card__title">#{post.id} — {post.title}</h3>
          <button className="btn btn--ghost" onClick={onClose}>Close ✕</button>
        </div>
  
        <div className="card__meta">
          <span><strong>UserID:</strong> {post.userId}</span>
          <span><strong>PostID:</strong> {post.id}</span>
        </div>
  
        <p className="card__body">{post.body}</p>
      </div>
    );
  }
  