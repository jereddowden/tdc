import * as React from 'react';

const TitleDetail = ({ title }: any) => (
  <div>
    <h3>{title.TitleName}</h3>
    <span>{title.ReleaseYear}</span>
  </div>
);

export default TitleDetail;
