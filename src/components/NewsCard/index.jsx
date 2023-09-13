import classnames from "classnames";
import PropTypes from "prop-types";

import styles from "./NewsCard.module.css";
import { formatDate } from "../../utils/formatDate";

const NewsCard = ({
  author,
  description,
  publishedAt,
  src,
  sourceName,
  title,
  url,
  notLastChild,
}) => {
  return (
    <>
      <div
        className={classnames(styles.newsCard, {
          [styles.newsCardGap]: notLastChild,
        })}
      >
        <div className={styles.imgContainer}>
          <img
            className={styles.img}
            src={src}
            alt={`${title} Thumbnail Image`}
          />
          <p className={styles.imgTitle}>{title}</p>
        </div>

        <div className={styles.newsCardContent}>
          <p className={styles.newsCardDate}>{formatDate(publishedAt)}</p>
          <p className={styles.newsCardAuthor}>{`${author} • ${sourceName}`}</p>

          <p className={styles.newsCardDesc}>{description}</p>

          <a
            href={url}
            className={styles.url}
            target="_blank"
            rel="noreferrer noopener"
          >
            Go to website
          </a>
        </div>
      </div>
    </>
  );
};

NewsCard.propTypes = {
  author: PropTypes.string,
  description: PropTypes.string,
  publishedAt: PropTypes.string,
  src: PropTypes.string,
  sourceName: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  notLastChild: PropTypes.bool,
};

export default NewsCard;
