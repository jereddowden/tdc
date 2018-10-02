import * as React from 'react';

const Awards = ({ title }: any) => (
  <div>
    {title.Awards &&
      title.Awards.length > 0 && (
        <div>
          <h3>Awards</h3>
          {title.Awards.map((award: any, idx: number) => (
            <div key={`award_${idx}`}>
              <p>
                {award.AwardYear && `${award.AwardYear}, `}
                {award.Award}
                {award.AwardCompany && `, ${award.AwardCompany}`}
                {award.AwardWon ? (
                  <span>
                    , <b>Won</b>
                  </span>
                ) : (
                  <span>, Nominated</span>
                )}
              </p>
              {award.Participants && (
                <p>
                  {award.Participants.map(
                    (participant: string) => participant
                  ).join(', ')}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
  </div>
);

export default Awards;
