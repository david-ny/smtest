import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { CommentType } from "@components/Comment";

type AppState = {
  wordCounts: Map<number, number>;
  setWordCounts: (comments: CommentType[]) => void;
};

const useAppState = create<AppState>((set) => ({
  wordCounts: new Map(),
  setWordCounts: (comments: CommentType[]) => {
    set(() => {
      const wordCounts = comments.map((comment) => [
        comment.id,
        comment.body.trim().replaceAll("\n", " ").split(/\s+/).length,
      ]);
      return {
        wordCounts: new Map(wordCounts as Iterable<readonly [number, number]>),
      };
    });
  },
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", useAppState);
}

export default useAppState;
