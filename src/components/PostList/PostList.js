import PostlistItem from "./PostlistItem";
import "./PostList.css";
const PostList = ({ posts, onDelete, onToogleLike, onToogleimportant }) => {
  const elements = posts.map((item) => {
    const { id, ...IdProps } = item;
    return (
      <li key={id} className="list-group-item">
        <PostlistItem
          {...IdProps}
          onDelete={() => onDelete(id)}
          onToogleLike={() => onToogleLike(id)}
          onToogleimportant={() => onToogleimportant(id)}
        />
      </li>
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};
export default PostList;
