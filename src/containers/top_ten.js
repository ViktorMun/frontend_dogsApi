import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
//import './Styles.css';



const ResponsiveReactGridLayout = WidthProvider(Responsive);


export default class Grid_AllDogs extends React.Component {

  render() {
    return (
      <div>
      <div style={{backgroundColor: "#f9f4f7", overflow: "scroll", color: 'black'}}
                 key={"b"}
                 _grid={{i: 'b',
                         x: 1,
                         y: 0,
                         w: 3,
                         h: 2,
                         minW: 2,
                         maxW: 4}}>
            <div class="wrapper">
              <div class="home">
                <div class="home_inner">
                  <div class="home_articles">
                    <div class="articles">
                      <div class="articles_inner">
                        <ul class="articles_list clear">
                        <li class="articles_item">
                            <article class="articles_contents">
                              <div class="articles_header">
                                <h1 class="articles_title">
                                  <a href="/2017/11/20/develope/">dddd</a> </h1>
                                  <div class="articles_meta">
                                    <div class="meta">
                                      <div class="meta_inner ellipsis">
                                        <div class="meta_datetime">
                                          <i class="fa fa-clock-o" aria-hidden="true">
                                          </i>
                                          <time datetime="2017-11-20">2017.11.20</time>
                                      </div>
                                      <div class="meta_categories">
                                        <i class="fa fa-map-marker" aria-hidden="true">
                                        </i>
                                        <div class="meta_category-list">
                                            <a href="#" class="meta_category-list-item">concept</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                            <div class="articles_body">
                              <div class="contents">
                                <div class="contents_inner">
                                  <p>asdsad</p>
                                </div>
                              </div>
                            </div>
                          </article>
                        </li>
                        <li class="articles_item">
                            <article class="articles_contents">
                              <div class="articles_header">
                                <h1 class="articles_title">
                                  <a href="/2017/11/20/develope/">asdasd</a> </h1>
                                  <div class="articles_meta">
                                    <div class="meta">
                                      <div class="meta_inner ellipsis">
                                        <div class="meta_datetime">
                                          <i class="fa fa-clock-o" aria-hidden="true">
                                          </i>
                                          <time datetime="2017-11-20">2017.11.20</time>
                                      </div>
                                      <div class="meta_categories">
                                        <i class="fa fa-map-marker" aria-hidden="true">
                                        </i>
                                        <div class="meta_category-list">
                                            <a href="#" class="meta_category-list-item">concept</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                            <div class="articles_body">
                              <div class="contents">
                                <div class="contents_inner">
                                  <p>asdasdasd</p>
                                </div>
                              </div>
                            </div>
                          </article>
                        </li>
                        <li class="articles_item">
                            <article class="articles_contents">
                              <div class="articles_header">
                                <h1 class="articles_title">
                                  <a href="/2017/11/20/develope/">adasdasd</a> </h1>
                                  <div class="articles_meta">
                                    <div class="meta">
                                      <div class="meta_inner ellipsis">
                                        <div class="meta_datetime">
                                          <i class="fa fa-clock-o" aria-hidden="true">
                                          </i>
                                          <time datetime="2017-11-20">2017.11.20</time>
                                      </div>
                                      <div class="meta_categories">
                                        <i class="fa fa-map-marker" aria-hidden="true">
                                        </i>
                                        <div class="meta_category-list">
                                            <a href="#" class="meta_category-list-item">concept</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                            <div class="articles_body">
                              <div class="contents">
                                <div class="contents_inner">
                                  <p>adfadsff</p>
                                </div>
                              </div>
                            </div>
                          </article>
                        </li>
                        <li class="articles_item">
                          <article class="articles_contents">
                            <div class="articles_header">
                              <h1 class="articles_title">
                                <a href="/2017/11/19/develope.discus/">Hasdfasd</a> </h1>
                                <div class="articles_meta">
                                  <div class="meta">
                                    <div class="meta_inner ellipsis">
                                      <div class="meta_datetime">
                                        <i class="fa fa-clock-o" aria-hidden="true">
                                        </i>
                                        <time datetime="2017-07-12">2017.11.19</time>
                                    </div>
                                    <div class="meta_categories">
                                      <i class="fa fa-map-marker" aria-hidden="true">
                                      </i>
                                      <div class="meta_category-list">
                                          <a href="#" class="meta_category-list-item">component</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                          </div>
                          <div class="articles_body">
                            <div class="contents">
                              <div class="contents_inner">
                                <p> asdfasdfadsf</p>
                              </div>
                            </div>
                          </div>
                        </article>
                      </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

    </div>
    );
  }
}
