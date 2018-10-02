import * as React from 'react';
import { Link } from 'react-router-dom';

const TITLES_API: string = 'http://localhost:5000/titles';

// interface ITitlesListProps {};
interface ITitlesListState {
  data: [];
}

class TitlesList extends React.Component<{}, ITitlesListState> {
  constructor(props: React.Props<TitlesList>) {
    super(props);

    this.state = {
      data: []
    };
  }

  public async componentDidMount() {
    try {
      const res: Response = await fetch(TITLES_API);
      const json: [] = await res.json();
      this.setState({ data: json });
    } catch (err) {
      alert(`Whoops! Looks like we couldn\'t get any titles!\n\n${err}`);
    }
  }

  public render() {
    return (
      <ul>
        {this.state.data.length > 0 ? (
          this.state.data.map((title: any) => (
            <li key={title._id}>
              <Link to={`/title/${title._id}`}>{title.TitleName}</Link>
            </li>
          ))
        ) : (
          <li>No Titles Found</li>
        )}
      </ul>
    );
  }
}

export default TitlesList;
