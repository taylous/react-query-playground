import { useMutation, useQuery } from 'react-query';

async function fetchComments(postId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  return response.json();
}

async function deletePost(postId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/postId/${postId}`, {
    method: 'DELETE',
  });
  return response.json();
}

async function updatePost(postId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/postId/${postId}`, {
    method: 'PATCH',
    data: { title: 'REACT QUERY FOREVER!!!!' },
  });
  return response.json();
}

export function PostDetail({ post }) {
  /**
   *  💡 comments는 언제 refresh 될 까요?
   *
   *      현재 comment query는 같은 `key`(comments)를 사용하고 있습니다.
   *      queries는 아래의 경우에만 `trigger`됩니다.
   *
   *      1. component remount
   *      2. window refocus
   *      3. refetch function 실행 되었을 때
   *      4. 자동화된 refetch
   *      5. mutation 이후 query가 invalidation 할 때
   *
   *      🚨 즉 data가 오래되었다고 해서 refetch 하지 않습니다.
   *
   *
   *  🎯 해결책?
   *      `post.id` 별로 query key를 생성하고 cache를 관리하자!
   */
  const { data, isLoading, isError, error } = useQuery(['comments', post.id], () =>
    fetchComments(post.id),
  );

  const deleteMutation = useMutation((postId) => deletePost(postId));
  const updateMutation = useMutation((postId) => updatePost(postId));

  if (isLoading) return <h3>Loading comments...</h3>;
  if (isError) {
    return (
      <>
        <h3>Oops, there was a problem loading comment.</h3>
        <p>{error}</p>
      </>
    );
  }

  return (
    <>
      <h3 style={{ color: 'blue' }}>{post.title}</h3>
      <button onClick={() => deleteMutation.mutate(post.id)}>Delete</button>
      {deleteMutation.isError && <p style={{ color: 'red' }}>Error deleting the post</p>}
      {updateMutation.isError && <p style={{ color: 'red' }}>Error updating the post</p>}
      {deleteMutation.isLoading && <p style={{ color: 'purple' }}>Deleting the post...</p>}
      {updateMutation.isLoading && <p style={{ color: 'purple' }}>Updating the post...</p>}
      {deleteMutation.isSuccess && <p style={{ color: 'green' }}>Post has (not) been deleted</p>}
      {updateMutation.isSuccess && <p style={{ color: 'green' }}>Post has (not) been updated</p>}
      <button onClick={() => updateMutation.mutate(post.id)}>Update title</button>
      <p>{post.body}</p>
      <h4>Comments</h4>
      {data.map((comment) => (
        <li key={comment.id}>
          {comment.email}: {comment.body}
        </li>
      ))}
    </>
  );
}
