import React from 'react';
import './Styles.css';

export default class Grid_Match extends React.Component {

  render() {
    return (
    <main id="page-wrap">
      <div class="wrapper">
        <div class="post">
          <div class="post_header">
            <header class="header">
              <div class="header_inner clear">
                <div class="header_brand">
                  <div class="header_profile">
                    <a href="/profile">
                      <img class="header_picture" src="http://imagizer.imageshack.us/v2/280x200q90/922/OnNMZB.jpg"
                       alt="toretore's Picture" />
                    </a>
                  </div>
                  <div class="header_titles">
                    <a href="/">
                      <h1 class="header_title">asdfasdf</h1>
                    </a>
                  </div>
                </div>
              </div>
            </header>
          </div>
          <div class="post_body">
            <article class="post_mainland">
              <div class="post_header">
                <h1 class="post_title">asdfasdfasadf</h1>
                <div class="post_meta">
                  <div class="meta">
                    <div class="meta_inner ellipsis">
                      <div class="meta_datetime">
                        <i class="fa fa-clock-o" aria-hidden="true">
                        </i>
                        <time datetime="2017-11-20"> 2017.11.20</time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="post_contents">
                <div class="contents">
                  <div class="contents_inner">
                    <p>
                      adfasdfasdf
                    </p>
                    <img src="https://cdn-images-1.medium.com/max/2000/1*bUtWGJQv8QFXTkLF_WBINA.png" />

                    <h2 id="What is similar">
                      <a href="#What is similar" class="headerlink"
                      title="What is similar">What is similar</a>
                    </h2>
                    <p>
                      adsfasdf

                    </p>

                    <p>
                      <strong>1. tags</strong>
                    </p>
                    <p>
                      When you want to put contents, you should use <br />
                      <br />
                      React Native: {'<View>'}, {'<Text>'} <br />
                      React.js: {'<div>'}, {'<p>'} <br />
                      <br />
                      Because React Native doesn't use HTML to render the app.
                    </p>

                    <h2 id="And..">
                      <a href="#And.." class="headerlink"
                      title="And..">And..</a>
                    </h2>
                    <p>
                    React.js installation command is <br />
                    npm install -g create-react-app <br />
                    <a href="https://github.com/facebookincubator/create-react-app">https://github.com/facebookincubator/create-react-app</a>
                    <br />
                    <br />
                    React Native installation command is <br />
                    npm install -g create-react-native-app <br />
                    <a href="https://facebook.github.io/react-native/docs/getting-started.html">https://facebook.github.io/react-native/docs/getting-started.html</a>

                    </p>
                  </div>
                </div>
                <div class="post_footer">
                  <div class="tags">
                    <div class="tags_inner ellipsis">
                      <i class="fa fa-tags" aria-hidden="true">
                      </i>
                      <ul class="tags_tag-list">
                        <li class="tags_tag-list-item">
                          <a class="tags_tag-list-link" href="/tags/React">React, </a>
                        </li>
                        <li class="tags_tag-list-item">
                          <a class="tags_tag-list-link" href="/tags/disqus">React Native</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <div class="post_attachment">
            </div>
          </div>
        </div>
      </div>
    </main>
    )
  }
}
