import * as React from 'react';
import TitleDetail from './TitleDetail';

const TITLES_API: string = 'http://localhost:5000/titles';

// interface ITitleDetailContainerProps {};
interface ITitleDetailContainerState {
  data: any;
}

class TitleDetailContainer extends React.Component<
  any,
  ITitleDetailContainerState
> {
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
      alert(`Whoops! Looks like we couldn\'t get this title!\n\n${err}`);
    }
  }

  public render() {
    return (
      <div>
        {this.state.data ? (
          <TitleDetail title={this.state.data} />
        ) : (
          <span>Sorry! Nothing to See Here.</span>
        )}
      </div>
    );
  }
}

export default TitleDetailContainer;
