import { useQuery } from "@tanstack/react-query";
// import { useAppState } from "@appState";
import { AxiosResponse } from "axios";
import Comment, { CommentType } from "./components/Comment";
import Chart from "./components/Chart";
import useAppState from "./appState/appState";
import commentsQuery from "./queries";

function App() {
  const setWordCounts = useAppState((state) => state.setWordCounts);
  const wordCounts = useAppState((state) => state.wordCounts);

  function onCommentsFetchSuccess(response: AxiosResponse) {
    const comments = response.data;
    setWordCounts(comments);
  }

  const { data: commentsResponse, isFetching } = useQuery(
    commentsQuery(onCommentsFetchSuccess)
  );

  const comments = commentsResponse?.data || [];
  return (
    <div className="grid grid-flow-row px-3 md:px-0 w-full justify-items-center md:w-10/12 lg:w-8/12 xl:w-6/12 mx-auto">
      <div className="flex w-full h-44 sm:h-56 md:h-80 lg:h-96 m-4 justify-center border-teal-100 border-solid border-8 p-4 rounded-xl">
        <Chart key="chart" wordCounts={wordCounts} />
      </div>
      <div className="">
        {comments.map((comment: CommentType) => (
          <Comment
            key={comment.id}
            id={comment.id}
            name={comment.name}
            email={comment.email}
            body={comment.body}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
