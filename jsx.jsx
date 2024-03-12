class Posts extends React.Component {
  state = { posts: [] };

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/posts', {
      signal: this.abortController.signal,
    })
      .then((response) => response.json())
      .then((posts) => (this.setState({ posts })));
  }

  componentUnmount() {
    this.abortController.abort();
  }

  render() {
    return <ul>{this.state.posts.map((post) =>
        <li>{post.title}</li>)
    }</ul>;
  }
}

// Use
ReactDOM.render(<Posts />, document.getElementById('root'));