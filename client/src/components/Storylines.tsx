import * as React from 'react';

const Storylines = ({ title }: any) => (
  <div>
    {title.Storylines &&
      title.Storylines.length > 0 && (
        <div>
          <h3>Storylines</h3>
          {title.Storylines.map((storyline: any, idx: number) => (
            <div key={`storyline_${idx}`}>
              <p>{storyline.Language}</p>
              <p>{storyline.Type}</p>
              <p>{storyline.Description}</p>
            </div>
          ))}
        </div>
      )}
  </div>
);

export default Storylines;
