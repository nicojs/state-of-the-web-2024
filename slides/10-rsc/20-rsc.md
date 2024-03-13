## With RSC <small>(+ SSR)</small>

![alt text](../../img/image-2.png)

<!-- .element class="img-react-dark" -->

source: https://www.joshwcomeau.com/react/server-components/

<!-- .element class="source" -->

With react server components, the data is loaded once on the server and then sent to the client.

<!-- .slide: class="is-empty react-dark" -->

---

### Remember this?

```jsx []
function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const abortController = new AbortController();
    fetch('http://jsonplaceholder.typicode.com/posts', {
      signal: abortController.signal,
    })
      .then((response) => response.json())
      .then((posts) => setPosts(posts));

    return () => abortController.abort();
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  );
}
```

<!-- .element class="kc-smallest" -->

<!-- .slide: data-auto-animate -->

---

### Remember this?

```jsx []
export async function Posts() {
  const response = await fetch("http://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.title}>{post.title}</li>
      ))}
    </ul>
  );
}
```

<!-- .element class="kc-smallest" -->

<!-- .slide: data-auto-animate -->

🤯 

<!-- .element style="font-size: 3em; text-align: center" class="fragment" -->

---

### Comparison

With server components:

- Static data can be loaded on the server <em>once</em>
- <!-- .element class="fragment" --> Server components <em>never</em> end up in the client bundle
- <!-- .element class="fragment" --> Data is <em>streamed in</em> when it is available (works together with <code>&lt;Suspense&gt;</code>)
- <!-- .element class="fragment" --> Dealing with Promises is as simple as <code>async</code>/<code>await</code>


