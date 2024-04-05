import { blogDetailsMain } from "@/data/newsArea";
import React, { Fragment } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-scroll";

const { image, date, admin, comments, title, text1, text2, tags, socials } =
  blogDetailsMain;

const BlogDetailsMain = () => {
  return (
    <div className="blog-details__main">
      <div className="blog-details__image">
        <Image src={image.src} alt="thumb" />
      </div>
      <div className="blog-details__content">
        <span>{date}</span>
        <div className="blog-one__meta">
        <a href="#" >
          {/* <a> */}
            <i className="fa fa-user-o"></i> {admin}
          {/* </a> */}
        </a>
        <a href="#" >
          {/* <a> */}
            <i className="fa fa-comments-o"></i> {comments} comments
          {/* </a> */}
          </a>
        </div>
        <h3>{title}</h3>
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
      <div className="blog-details__meta">
        <div className="blog-details__tags">
          <span>Tags: </span>
          {tags.map((tag, i) => (
            <Fragment key={i}>
              <a href="#" >
              {/* <a> */}
                {tag},
              {/* </a> */}
              </a>
              {" "}
            </Fragment>
          ))}
        </div>
        <div className="blog-details__share">
          <ul>
            {socials.map(({ id, icon, href }) => (
              <li key={id}>
                <a href={href} >
                {/* <a> */}
                  <i className={icon}></i>
                {/* </a> */}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsMain;
