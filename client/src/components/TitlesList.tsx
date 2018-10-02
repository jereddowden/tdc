import * as React from 'react';
import { Link } from 'react-router-dom';

const TitlesList = ({ titles }: any) => (
  <ul>
    {titles.length > 0 ? (
      titles.map((title: any) => (
        <li key={title.TitleId}>
          <Link to={`/title/${title.TitleId}`}>{title.TitleName}</Link>
        </li>
      ))
    ) : (
      <li>No Titles Found</li>
    )}
  </ul>
);

export default TitlesList;
