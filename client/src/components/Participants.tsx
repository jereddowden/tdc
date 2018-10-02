import * as React from 'react';

const Participants = ({ title }: any) => (
  <div>
    {title.Participants &&
      title.Participants.length > 0 && (
        <div>
          <h3>Credits</h3>
          {title.Participants.map((participant: any) => (
            <div key={participant.ParticipantId}>
              <p>
                {participant.Name}
                {participant.RoleType && `, ${participant.RoleType}`}
              </p>
              <p>{participant.IsOnScreen}</p>
            </div>
          ))}
        </div>
      )}
  </div>
);

export default Participants;
