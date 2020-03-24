import React from 'react';
import Skeleton from 'react-loading-skeleton/lib';
import FormatDate from '../../Helpers/Format-date';

function CardItem({
  children, articleClass, date, text, isLoad
}) {
  const formattedDate = FormatDate(date);
  return (
    <article className={articleClass}>
      <figure className="w-100 border border-info p-2 rounded bg-white h-100 d-flex flex-column">
        <figcaption className="w-100">
          <small className="w-100 font-weight-bold">
            <span className="text-secondary">Date:</span>
            <span className="px-1 text-success">{(isLoad)? <Skeleton width="50%" />: formattedDate}</span>
          </small>
          <p className="w-100 my-2 font-weight-light text-secondary">{(isLoad)? <Skeleton count={2} />: text}</p>
        </figcaption>
        <div className="btn-group mt-auto">
          {(isLoad)? <div className="w-100"><Skeleton width="20%" /></div>: children}
        </div>
      </figure>
    </article>
  );
}

export default CardItem;
