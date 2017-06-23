import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { query: '' }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({'query': e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.query) {
      e.currentTarget.classList.toggle('in-search');
      this.setState({'query': ''});
    } else {
      this.setState({'query': "Searching..."});
    }
  }

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          value={this.state.query}
          placeholder="Search Capebook"
          onChange={this.handleChange}
        />
      <button onClick={this.handleSubmit}>
        <i className="fa fa-search fa-lg" aria-hidden="true"></i>
      </button>
      </div>
    );
  }
}

export default Search;
