import * as React from 'react';

const TITLES_API: string = 'http://localhost:5000/titles';

// interface ITitleListProps {};
interface ITitleListState {
  data: [];
}

class TitleList extends React.Component<{}, ITitleListState> {
  constructor(props: React.Props<TitleList>) {
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
              <a href={`/title/${title._id}`}>{title.TitleName}</a>
            </li>
          ))
        ) : (
          <li>No Titles Found</li>
        )}
      </ul>
    );
  }
}

export default TitleList;
