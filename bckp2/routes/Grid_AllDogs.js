import React from 'react';
import AllDogs from '../components/Alldogs'
import AllDogs1 from '../components/Alldogs1'
import AllDogs2 from '../components/Alldogs2'
import AllDogs3 from '../components/Alldogs3'
import AllDogs4 from '../components/Alldogs4'
import AllDogs5 from '../components/Alldogs5'
import UpButton from '../components/thumbsUpButton'
import DownButton from '../components/thumbsDownButton'

import './Styles.css';



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
            <div className="wrapper">
              <div className="home">
                <div className="home_inner">
                  <div className="home_articles">
                    <div className="articles">
                      <div className="articles_inner">
                        <ul className="articles_list clear">
                        <li className="articles_item">
                          <article className="articles_contents">
                            <div className="articles_body">
                              <div className="contents">
                                <div className="contents_inner">
                                  <AllDogs />
                                  <UpButton />
                                  <DownButton />
                                </div>
                              </div>
                            </div>
                          </article>
                        </li>
                        <li className="articles_item">
                        <article className="articles_contents">
                          <div className="articles_body">
                            <div className="contents">
                              <div className="contents_inner">
                                <AllDogs1 />
                              </div>
                            </div>
                          </div>
                        </article>
                        </li>
                        <li className="articles_item">
                        <article className="articles_contents">
                          <div className="articles_body">
                            <div className="contents">
                              <div className="contents_inner">
                                <AllDogs2 />
                              </div>
                            </div>
                          </div>
                        </article>
                        </li>
                        <li className="articles_item">
                        <article className="articles_contents">
                          <div className="articles_body">
                            <div className="contents">
                              <div className="contents_inner">
                                <AllDogs3 />
                              </div>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li className="articles_item">
                      <article className="articles_contents">
                        <div className="articles_body">
                          <div className="contents">
                            <div className="contents_inner">
                              <AllDogs4 />
                            </div>
                          </div>
                        </div>
                      </article>
                    </li>
                    <li className="articles_item">
                    <article className="articles_contents">
                      <div className="articles_body">
                        <div className="contents">
                          <div className="contents_inner">
                            <AllDogs5 />
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
