import React from 'react';

class Photos extends React.Component {
  constructor(props) {
    super(props)

    this.state = {loading: false};
  }

  // componentDidMount() {
  //   this.props.fetchPhotos(this.props.userId)
  //     .then( () => this.setState({loading: false}));
  // }

  // componentWillUnmount() {
  //   this.setState({loading: true});
  // }

  render () {
    let photos;

    if (this.state.loading) {
      photos = <div className="loader">...</div>;
    } else {
      photos = <li>Coming soon!</li>;
    }

    return (
      <div className="photos">
        <div className="photos-header">
          <i className="fa fa-picture-o" aria-hidden="true"></i>
          <span>Photos</span>
        </div>
        <ul className="photo-grid">
          {photos}
        </ul>
      </div>
    );
  }
}

export default Photos;
