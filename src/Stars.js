import React from 'react';
import Star from './Star';

function Stars(props) {
  if (props.count <= 0 || props.count >= 6) {
    return null;
  }
  let content = [];
  for (let i = 0; i < props.count; i++) {
    const item = i;
    content.push(<Star key={item.id}></Star>);
  }

  return (
    <ul class="card-body-stars">
      <li>
        {content}
      </li>
    </ul>
  );
}
Stars.defaultProps = {
  count: 0
};

export default Stars;
