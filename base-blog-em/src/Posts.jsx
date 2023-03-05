import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { PostDetail } from './PostDetail';

const maxPostPage = 10;

async function fetchPosts(pageNum) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}`,
  );
  return response.json();
}

export function Posts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);

  const queryClient = useQueryClient();

  useEffect(() => {
    if (currentPage < maxPostPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(['posts', nextPage], () => fetchPosts(nextPage), {
        staleTime: 10000,
      });
    }
  }, [currentPage, queryClient]);

  /**
   * 💡 Stale Data
   *    데이터가 오래되었다? 이게 무슨 의미일까요? 🤔
   *
   *    data refetch 는 오직 stale data에 대해서만 triggers 됩니다.
   *    (ex: component remount, window refocus, ...)
   *
   *    위의 예시(ex) 말고도 refetch가 되는 경우가 있는데,
   *    바로 `staleTime`입니다.
   *    (staleTime은 `설정된 값`을 보고 있다가 refetch를 trigger 합니다.)
   *
   *    🚨 max age 값은 `얼마나 오랫동안 데이터를 최신화 안 해도 된다`를 용인하는 것과 같습니다.
   *    (이 값은 application의 상황과 data의 속성에 따라 달라집니다)
   *
   *    그런데 왜? staleTime의 default 값은 "0"일까요?
   *    `언제 사용자가 최신화된 데이터가 필요할까?`에 초점을 맞추기 떄문입니다.
   *
   *    staleTime 🥊 cacheTime
   *
   *        staleTime
   *        staleTime은 `re-fetching을 위한 time` 입니다.
   *        cache는 추후에 재사용할 데이터를 의미합니다.
   *        만약 어떤 query가 오랫동안 사용되지 않는다면 해당 query의 data는,
   *        `cold storage`로 이동하게 됩니다.
   *
   *        cache data는 `cacheTime`에 의하여 expired 되는데,
   *        default 값은 5분입니다.
   *        cache time은 사용된 query가 activate 된 후 얼마나 오래 지속 되었는지 입니다.
   *
   *        🚨 cache 가 expired 된다면 garbage collection에 의하여,
   *        더 이상 client에서 사용할 수 없습니다.
   *
   *        그러나 data가 cache에 있는 동안에는,
   *        refetching 동안 표시하는데 사용할 수 있습니다.
   */
  const { data, isError, error, isLoading } = useQuery(
    ['posts', currentPage],
    () => fetchPosts(currentPage),
    {
      staleTime: 2000,
      /**
       * 사용자가 이전 page로 돌아간다고 해도 data를 유지하기 위한 option
       */
      keepPreviousData: true,
    },
  );

  /**
   * 💡 isFetching
   *    async query가 해결(resolved)되지 않은상태
   *    (🎯 the async query function hasn't yet resolved)
   *    아직 완료하지 않았음을 의미
   *
   * 💡 isLoading
   *    isFetching의 하위집합이다.
   *    (🎯 no cached data, plus isFetching)
   *    우리가 가져오는 상태에 있음을 의미한다.
   *    (🚨 cached data가 없는 상태)
   */
  if (isLoading) return <h3>Loading...</h3>;
  if (isError)
    return (
      <>
        <h3>Oops, something went wrong.</h3>
        <p>{error}</p>
      </>
    );

  return (
    <>
      <ul>
        {data.map((post) => (
          <li key={post.id} className="post-title" onClick={() => setSelectedPost(post)}>
            {post.title}
          </li>
        ))}
      </ul>
      <div className="pages">
        <button
          disabled={currentPage <= 1}
          onClick={() => {
            setCurrentPage((prevState) => prevState - 1);
          }}
        >
          Previous page
        </button>
        <span>Page {currentPage}</span>
        <button
          disabled={currentPage >= maxPostPage}
          onClick={() => {
            setCurrentPage((prevState) => prevState + 1);
          }}
        >
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  );
}
