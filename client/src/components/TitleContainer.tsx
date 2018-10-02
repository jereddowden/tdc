import * as React from 'react';
import TitleDetail from './TitleDetail';

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
        `${TITLES_API}/${this.props.match.params.TitleId}`
      );
      const json: {} = await res.json();
      this.setState({ data: json });
    } catch (err) {
      alert(`Whoops! Looks like we couldn\'t get any titles!\n\n${err}`);
    }
  }

  public render() {
    return (
      <div>
        {this.state.data ? (
          <TitleDetail title={this.state.data} />
        ) : (
          <span>No Titles Found</span>
        )}
      </div>
    );
  }
}

export default TitleContainer;
