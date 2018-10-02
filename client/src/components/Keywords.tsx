import * as React from 'react';

const Keywords = ({ title }: any) => (
  <div>
    {title.Keywords &&
      title.Keywords.length > 0 && (
        <div>
          <h3>Keywords</h3>
          {title.Keywords.map((keyword: string, idx: number) => (
            <span key={`${keyword}_${idx}`}>{keyword}</span>
          )).reduce((prev: any, curr: any) => [prev, ', ', curr])}
        </div>
      )}
  </div>
);

export default Keywords;
