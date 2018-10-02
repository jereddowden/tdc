import * as React from 'react';

import TitlesList from './TitlesList';

const TITLES_API: string = 'http://localhost:5000/titles';

// interface ITitlesListContainerProps {};
interface ITitlesListContainerState {
  data: [];
  filteredData: any[];
}

class TitlesListContainer extends React.Component<
  {},
  ITitlesListContainerState
> {
  constructor(props: React.Props<TitlesListContainer>) {
    super(props);

    this.state = {
      data: [],
      filteredData: []
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  public handleSearch(event: React.KeyboardEvent<HTMLInputElement>): void {
    const filteredTitles = this.state.data.filter((title: any) =>
      title.TitleName.includes(event.currentTarget.value)
    );
    this.setState({ filteredData: filteredTitles });
  }

  public async componentDidMount() {
    try {
      const res: Response = await fetch(TITLES_API);
      const json: [] = await res.json();
      this.setState({ data: json });
      this.setState({ filteredData: json });
    } catch (err) {
      alert(`Whoops! Looks like we couldn\'t get any titles!\n\n${err}`);
    }
  }

  public render() {
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="Search for a Title"
            onKeyUp={this.handleSearch}
          />
        </div>
        <TitlesList titles={this.state.filteredData || this.state.data} />
      </div>
    );
  }
}

export default TitlesListContainer;
