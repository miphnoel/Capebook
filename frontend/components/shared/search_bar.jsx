import React from 'react';
import { connect } from 'react-redux';

import { fetchSearchResults } from '../../actions/search_actions';
import SearchResults from './search_results';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { query: '', results: this.props.results, show: false }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({'query': e.currentTarget.value});
    this.props.fetchSearchResults(e.currentTarget.value);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          value={this.state.query}
          placeholder="Search Capebook"
          onChange={this.handleChange}
          onClick={() => this.setState({ show: true })}
        />
      <button onClick={this.handleSubmit}>
        <i className="fa fa-search fa-lg" aria-hidden="true"></i>
      </button>
      {this.state.show &&
        <div>
          <SearchResults results={this.props.results} />
          <div className="dropdown-wrapper"
            onClick={() => this.setState({ show: false })}>
          </div>
        </div> }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  results: state.search,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSearchResults: (query) => (dispatch(fetchSearchResults(query)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
