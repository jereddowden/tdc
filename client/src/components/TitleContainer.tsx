import * as React from 'react';

const TITLES_API: string = 'http://localhost:5000/titles';

// interface ITitleContainerProps {};
interface ITitleContainerState {
  data: any;
}

class TitleContainer extends React.Component<any, ITitleContainerState> {
  constructor(props: any) {
    super(props);

    this.state = {
      data: {}
    };
  }

  public async componentDidMount() {
    try {
      const res: Response = await fetch(
        `${TITLES_API}/${this.props.match.params.titleId}`
      );
      const json: {} = await res.json();
      this.setState({ data: json });
    } catch (err) {
      alert(`Whoops! Looks like we couldn\'t get any titles!\n\n${err}`);
    }
  }

  public render() {
    return (
      <ul>
        {this.state.data ? (
          <li>{this.state.data.TitleName}</li>
        ) : (
          <li>No Titles Found</li>
        )}
      </ul>
    );
  }
}

export default TitleContainer;
