import * as React from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
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

  public handleSearch(event: React.KeyboardEvent<HTMLDivElement>): void {
    const filteredTitles = this.state.data.filter((title: any) =>
      title.TitleName.includes((event.target as HTMLInputElement).value)
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
      <Grid
        container={true}
        direction="column"
        spacing={32}
        justify="center"
        alignItems="center"
      >
        <Grid item={true} xs={12}>
          <TextField
            type="text"
            label="Search"
            placeholder="Search for a Title"
            onKeyUp={this.handleSearch}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item={true} xs={12}>
          <TitlesList titles={this.state.filteredData || this.state.data} />
        </Grid>
      </Grid>
    );
  }
}

export default TitlesListContainer;
