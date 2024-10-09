import css from "./LoadMoreBtn.module.css";
import React from "react";

type Props = {
  onLoadMore: () => void;
};

const LoadMoreBtn: React.FC<Props> = ({ onLoadMore }) => {
  return (
      <button
          type="button"
          className={css.btn}
          onClick={onLoadMore}
      >Load more</button>
  );
};
export default LoadMoreBtn