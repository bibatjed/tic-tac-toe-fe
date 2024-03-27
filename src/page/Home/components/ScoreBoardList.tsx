import { useEffect, useRef, useState } from "react";
import ScoreBoardItem from "./ScoreBoardItem";
import { GamesResult, getGames } from "../api";

export default function ScoreBoardList() {
  const currentPage = useRef(1);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [data, setData] = useState<GamesResult>({
    result: [],
    pages: 1,
  });
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getGames()
      .then((value) => {
        setData(value);
      })
      .finally(() => {
        setIsLoading(false);
      });
    return () => {
      currentPage.current = 1;
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoading && currentPage.current < data.pages) {
        setIsLoading(true);
        getGames(++currentPage.current)
          .then((value) => {
            setData((prev) => ({ ...prev!, result: [...prev!.result, ...value.result] }));
          })
          .finally(() => setIsLoading(false));
      }
    });

    if (bottomRef.current) {
      observer.observe(bottomRef.current);
    }

    return () => {
      if (bottomRef.current) {
        observer.unobserve(bottomRef.current);
      }
    };
  }, [data.pages, isLoading]);

  return (
    <div className="flex mt-2 flex-col gap-4 overflow-y-auto max-h-[400px]">
      {data.result.length === 0 && !isLoading && (
        <div className="bg-white hover:cursor-pointer flex flex-col justify-center p-5 rounded-lg relative">
          <p className="text-lg font-bold">No previous game</p>
        </div>
      )}

      {data.result.map((value, index) => {
        return <ScoreBoardItem key={index} {...value} />;
      })}
      <div className="p-[0.1px]" ref={bottomRef}>
        {" "}
      </div>
      {isLoading && <span className="text-md font-bold text-white">Loading...</span>}
    </div>
  );
}
