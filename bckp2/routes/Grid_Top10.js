import React from 'react';
import Top10 from '../components/top10'
import './Styles.css';

export default class Grid_Top10 extends React.Component {

  render() {
    return (
    <main id="page-wrap">
      <div className="wrapper">
        <div className="post">
          <div className="post_header">
            <header className="header">
              <div className="header_inner clear">
                <div className="header_brand">
                  <div className="header_profile">
                    <a href="/profile">
                      <img className="header_picture" src=""
                       alt="toretore's Picture" />

                    </a>
                  </div>
                  <div className="header_titles">
                    <a href="/Grid_AllDogs">
                      <h1 className="header_title">Choose favourite</h1>
                    </a>
                  </div>
                </div>
              </div>
            </header>
          </div>
          <div className="post_body">
            <article className="post_mainland">
              <div className="post_header">
                <h1 className="post_title">Top 10 favourite dogs </h1>
                <div className="post_meta">
                  <div className="meta">
                    <div className="meta_inner ellipsis">
                    </div>
                  </div>
                </div>
              </div>
              <div className="post_contents">
                <div className="contents">
                  <div className="contents_inner">
                  <ul className="list_of_doggis">
                       <div className="firstContainer">

                          <Top10 />
                       </div>
                   </ul>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
    )
  }
}
