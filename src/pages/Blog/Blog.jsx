import React from "react";
import "./Blog.scss";
import blogger from "../../media/News/news-author.jpg";
import facebook from "../../media/icons/facebook.svg";
import youtube from "../../media/icons/youtube.svg";
import telegram from "../../media/icons/tele.svg";
import twitter from "../../media/icons/twitter.svg";
import blogimg from "../../media/blog/img1.jpg";
import blogimg2 from "../../media/blog/img2.jpg";
import { RiReplyAllFill } from "react-icons/ri";
import BlogsData from "../../Data/BlogsData";
import post1 from "../../media/related-posts/post1.jpg"
import RelatedPostsData from "../../Data/RelatedPostsData";
const Blog = () => {
  return (
    <>
      <div className="blog  mt-3">
        <div className="container p-4">
          <div className="blog-type">
            <button>Traveler</button>
            <div className="blog-heading pt-4">
              <h2 className="fw-bold fs-2">
                Keep Up the spirit of the desire to travel around the world
              </h2>
            </div>
            <div className="blog-details">
              <p className="text-muted">
                We’re an online magazine dedicated to covering the best in
                international product design. We started as a little blog back
                in 2002 covering student work and over time
              </p>
            </div>
            <hr />
            <div className="blog-writer">
              <div className="writer-details d-flex justify-content-between">
                <div className="updates-by d-flex gap-2">
                  <img src={blogger} alt="" />
                  <div className="blogger d-flex flex-column">
                    <strong className="name">Fones Mini</strong>
                    <small className="date">
                      May 10, 2020 . <span />
                      <span>6 min read</span>
                    </small>
                  </div>
                </div>
                <div className="social-media ">
                  <div className="icons d-flex gap-2 pt-4">
                    <div className="facebook icon d-flex justify-content-center gap-2 cursor-pointer">
                      <img src={facebook} alt="" />
                    </div>
                    <div className="youtube icon d-flex justify-content-center gap-3">
                      <img src={youtube} alt="" />
                    </div>
                    <div className="telegram icon d-flex justify-content-center gap-2">
                      <img src={telegram} alt="" />
                    </div>
                    <div className="twitter icon d-flex justify-content-center gap-4">
                      <img src={twitter} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container blogimg">
            <img src={blogimg} alt="" />
          </div>
          <div className="blog-typography">
            <p>
              Eiusmod cillum ex id irure esse est. Pariatur commodo est fugiat
              minim in Lorem mollit cillum amet. Sit do elit consectetur non
              aliquip mollit id Lorem incididunt quis quis cupidatat nisi
              aliquip.
              <br />
              <br />
              It is a long established fact that a <strong>reader</strong> will
              be distracted by the readable content of a page when looking at
              its <strong>hahhaha</strong>. The point of using Lorem Ipsum is
              that it has a more-or-less normal{" "}
              <strong>
                <u> distribution of letters.</u>
              </strong>
            </p>
            <ol className="d-flex flex-column pt-3 gap-3">
              <li>We want everything to look good out of the box.</li>
              <li>We want everything to look good out of the box.</li>
              <li>
                Here's a third pretend reason though a list with three items
                looks more realistic than a list with two items.
              </li>
            </ol>
          </div>
          <div className="easy-typography">
            <span className="fs-4 fw-bold">Typography should be easy</span>
            <br />
            <br />
            <p>
              So that's a header for you — with any luck if we've done our job
              correctly that will look pretty reasonable.
              <br />
              <br />
              Something a wise person once told me about typography is:
            </p>
            <div className="blockquote d-flex gap-3 justify-content-center align-items-center">
              <div className="starter"></div>
              <em className="fw-bold fs-6">
                " Typography is pretty important if you don't want your stuff to
                look like trash. Make it good then it won't be bad. "
              </em>
              <br />
            </div>
            <p>
              It's probably important that images look okay here by default as
              well:
            </p>
            <div className="container blogimg">
              <img src={blogimg2} alt="" />
            </div>

            <p className="text-muted ts-6">
              Amet voluptate labore voluptate nostrud officia culpa ut.
              Adipisicing occaecat Lorem proident reprehenderit excepteur
              occaecat officia id. Dolor quis deserunt adipisicing dolore est
              deserunt amet. <br />
              <br />
              Now I'm going to show you an example of an unordered list to make
              sure that looks good, too:
              <ul className="d-flex flex-column gap-1 pt-4">
                <li>So here is the first item in this list</li>
                <li>So here is the first item in this list</li>
                <li>Later, we'll use longer, more complex list items.</li>
              </ul>
              and that's the end of this section.
            </p>
            <span className="fs-4 fw-bold ">
              Code Should Look okay by default.
            </span>
            <p className="pt-3">
              I think most people are going to use highlight.js or Prism or
              something if they want to style their code blocks but it wouldn't
              hurt to make them look okay out of the box, even with no syntax
              highlighting.
              <br />
              <br />
              What I've written here is probably long enough, but adding this
              final sentence can't hurt.
              <br />
              <br /> Hopefully that looks good enough to you.
              <br />
              <br />
              <span className="fw-bold fs-5">
                We still need to think about stacked headings though.
              </span>
              <br />
              <br />
              <span className="fw-bold fs-6">
                Let's make sure we don't screw that up with h4 elements, either.
              </span>
              <br />
              <br />
              Phew, with any luck we have styled the headings above this text
              and they look pretty good. <br />
              <br /> Let's add a closing paragraph here so things end with a
              decently sized block of text. I can't explain why I want things to
              end that way but I have to assume it's because I think things will
              look weird or unbalanced if there is a heading too close to the
              end of the document. <br /> <br /> What I've written here is
              probably long enough, but adding this final sentence can't hurt.
            </p>
          </div>
          <div className="group d-flex gap-3 ">
            <button className="text-decoration-none">Php (12)</button>
            <button className="text-decoration-none">Javascript (12)</button>
            <button className="text-decoration-none">Travel (22)</button>
            <button className="text-decoration-none">Beauty (20)</button>
          </div>
          <br />
          <br />
          <div className="hr-holder">
            <hr />
          </div>
          <div className="writtenby">
            <div className="written-by d-flex gap-2">
              <img src={blogger} alt="" />
              <div className="blogger d-flex flex-column">
                <strong className="name">Fones Mini</strong>
                <small className="date">
                  May 10, 2020 . <span />
                  <span>6 min read</span>
                  <p className="pt-2">
                    There’s no stopping the tech giant. Apple now opens its
                    100th store in China.There’s no stopping the tech giant.
                    <strong className="btn fw-bold">ReadMore</strong>
                  </p>
                </small>
              </div>
            </div>
          </div>
          <div className="responses pt-4">
            <h4>Responses (14)</h4>
            <br />
            <textarea name="" id="" cols="80" rows="6"></textarea>
            <div className="btn-group d-flex gap-2">
              <button className="submit" type="submit">
                Submit
              </button>
              <button className="cancel">Cancel</button>
            </div>
          </div>
          <br />
          <br />
          {BlogsData.map((item, index) => {
            return (
              <div className="replies pt-4 pb-3">
                <div className="reply-by d-flex gap-2">
                  <img src={item.img} alt="" />
                  <div className="reply d-flex flex-column">
                    <small className="reply-details">
                      <span className="name fs-6 fw-bold">{item.replier}</span>{" "}
                      <span> </span> {item.date} <span />
                      <p className="">{item.content}</p>
                    </small>
                    <button className="d-flex align-items-center gap-1">
                      <RiReplyAllFill /> reply
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="related-posts">
        <div className="related-posts container">
          <h4 className="fw-bold fs-2">Related Posts</h4>
          <div className="d-flex categories justify-content-center gap-4 pt-4">
{RelatedPostsData.map((item,index)=>{
  return(
            <div className="category-highlight position-relative">
                <img src={item.img} alt="" />
                <div className="category-desc position-absolute d-flex flex-column gap-2">
                <small className="heading" >{item.heading}</small>
                <strong >{item.desc}</strong>
                <div className="posted-by d-flex gap-3">
                  <small className="name">{item.author}</small>
                  <small className="date">{item.date}</small>
                </div>
                </div>
            </div>
            )
          })}
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
