<!-- .slide: class="is-module" data-background="#0f0f11" -->

![Angular](/img/angular.png)

--- 

### Since last time

- Nico.js gave a talk on Angular 2 in 2016
- Simon and Sander gave a redelivery of Angular Connect in 2019

---

### The past few years though...

- Standalone APIs
- Change detection using `OnPush` becoming the new default?
- SSR and SSG with `@angular/ssr`
- Vite and esbuild for faster builds
- Control flow syntax with `@if` and `@for`
- Angular Material switched to MDC-based components
- A fancy new reactive primitive, signals!
- Type-safe forms
- More TypeScript strictness: `null` checks, no implicit `any`s
- More functional notations: no more classes for route guards, route resolvers and HTTP interceptors. Also: `inject()`

---

### Yet to come

- Deliver more of signals: easier debugging, optional Zone.js, signal-based inputs/queries
- HMR improvements
- Modernize the TX:
  - experimental Jest support has been introduced
  - they've announced a transition from Karma to the Web Test Runner
  - since Vite is the default since v17, will they move to Vitest?
- Partial hydration using deferrable views
- `.ng`?

<div class="kc-columns kc-gap2">

```svelte
<script>
  import { signal } from '@angular/core';
  const count = signal(42);
</script>

Count: {{count()}}
```

```ts
@Component({
  // ...
  template: `Count: {{ count() }}`,
})
export class SomeComponent {
  count = signal(42);
}
```

</div>
