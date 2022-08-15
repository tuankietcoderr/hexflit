import moment from "moment";
import Image from "next/image";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import Slider from "react-slick";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import useFetchData from "../../hooks/useFetchData";
import { imageLibrary } from "../../request/axios";
import Loading from "../Layout/Loading";
import PageNavigate from "../Layout/PageNavigate";

const Review = ({ movie_id }) => {
  const [page, setPage] = useState(1);
  const { data, loading } = useFetchData(`/movie/${movie_id}/reviews`, page);
  const settings = {
    infinite: false,
    adaptiveHeight: true,
    fade: true,
    initialSlide: 0,
  };
  if (data && data.results.length === 0) {
    return (
      <>
        <h2 className="my-6 text-lg font-extrabold text-white sm:text-[2rem]">
          Reviews
        </h2>
        <div className="flex justify-center">
          <p className="text-center text-white text-2xl">No review found</p>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="my-[2rem] border-t" />
      <h3 className="mb-[2rem] text-2xl font-extrabold text-white">Reviews</h3>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Slider {...settings}>
            {data.results.map((review) => (
              <div key={review.id}>
                <div className="!flex my-4 gap-2 w-full">
                  <div className="w-[50px] h-[50px]">
                    <Image
                      src={
                        review.author_details.avatar_path
                          ? imageLibrary(review.author_details.avatar_path)
                          : "/nullavatar.png"
                      }
                      width={80}
                      height={80}
                      alt={review.author}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex justify-between w-full">
                    <div>
                      <a
                        href={review.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="text-white font-bold">
                          {review.author}
                        </div>
                      </a>
                      <cite className="text-slate-400 text-[10px]">
                        {moment(review.created_at).fromNow()}
                      </cite>
                    </div>
                    {review.author_details.rating && (
                      <div className="text-[yellow] text-[10px] font-extrabold">
                        Rating: {review.author_details.rating}/10
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-slate-400 leading-7">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                  >
                    {review.content}
                  </ReactMarkdown>
                </div>
                <div className="border-b" />
              </div>
            ))}
          </Slider>
          <PageNavigate
            page={page}
            setPage={setPage}
            total_pages={data.total_pages}
          />
        </>
      )}
    </>
  );
};

export default Review;
