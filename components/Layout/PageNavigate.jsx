import { CaretLeft, CaretRight } from "react-bootstrap-icons";

const PageNavigate = ({ page, setPage, total_pages }) => {
  const pageAction = (type) => {
    if (type === "next") {
      if (page < total_pages) {
        setPage((page) => page + 1);
      }
    } else if (type === "prev") {
      if (page > 1) {
        setPage((page) => page - 1);
      }
    }
  };

  return (
    <div className="flex flex-row-reverse">
      <div className="flex items-center gap-4 text-slate-200">
        <div>{`Page ${
          page > 0 && page <= total_pages ? page : setPage(1)
        } / ${total_pages}`}</div>

        <button
          onClick={() => pageAction("prev")}
          className="rounded-sm bg-slate-700 p-2"
        >
          <CaretLeft size={20} />
        </button>
        <button
          onClick={() => pageAction("next")}
          className="rounded-sm bg-slate-700 p-2"
        >
          <CaretRight size={20} />
        </button>
      </div>
      <div />
    </div>
  );
};

export default PageNavigate;
