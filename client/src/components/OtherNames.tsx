import * as React from 'react';

const OtherNames = ({ title }: any) => (
  <div>
    {title.OtherNames &&
      title.OtherNames.length > 1 && (
        <div>
          <h3>Alternate Names</h3>
          {title.OtherNames.reduce((acc: any, name: any) => {
            return name.TitleNameType !== 'Primary' ? (
              <div>
                <p>{name.TitleName}</p>
                <p>{name.TitleNameLanguage}</p>
              </div>
            ) : (
              acc
            );
          }, null)}
        </div>
      )}
  </div>
);

export default OtherNames;
