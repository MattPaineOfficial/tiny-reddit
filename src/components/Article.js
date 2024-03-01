import React from 'react';

function Article(props) {
  return (
    <article>
        <a href={ "https://reddit.com" + props.article.permalink } target='_blank' rel="noreferrer">
            <h3>{ props.article.title }</h3>
            <p>Posted By: { props.article.author }</p>
        </a>
    </article>
  )
}

export default Article;