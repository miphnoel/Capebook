import React from 'react';
import { connect } from 'react-redux';

import { fetchSearchResults } from '../../actions/search_actions';
import SearchResults from './search_results';
import { openModal, closeModal } from '../../actions/modal_actions';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { query: '', results: this.props.results }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleChange(e) {
    this.setState({'query': e.currentTarget.value});
    this.props.fetchSearchResults(e.currentTarget.value);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleClose() {
    this.props.closeModal();
    this.setState({query: '', results: {}});
  }

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          value={this.state.query}
          placeholder="Search Capebook"
          onChange={this.handleChange}
          onClick={this.props.openModal}
          onBlur={() => this.setState({query: '', results: {}})}
        />
      <button onClick={this.handleSubmit}>
        <i className="fa fa-search fa-lg" aria-hidden="true"></i>
      </button>
      {this.props.resultsVisible &&
        <div>
          <SearchResults
            results={this.props.results}
            closeModal={this.props.closeModal}/>
          <div className="dropdown-wrapper"
            onClick={this.handleClose}>
          </div>
        </div> }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  results: state.search,
  resultsVisible: state.modal.searchResults,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSearchResults: (query) => (dispatch(fetchSearchResults(query))),
  openModal: () => dispatch(openModal('searchResults')),
  closeModal: () => dispatch(closeModal('searchResults'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
