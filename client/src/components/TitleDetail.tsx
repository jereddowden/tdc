import * as React from 'react';
import Awards from './Awards';
import Genres from './Genres';
import Keywords from './Keywords';
import OtherNames from './OtherNames';
import Participants from './Participants';
import Storylines from './Storylines';

const TitleDetail = ({ title }: any) => (
  <div>
    <h2>{title.TitleName}</h2>
    <p>{title.ReleaseYear}</p>
    <Participants title={title} />
    <OtherNames title={title} />
    <Genres title={title} />
    <Keywords title={title} />
    <Awards title={title} />
    <Storylines title={title} />
  </div>
);

export default TitleDetail;
