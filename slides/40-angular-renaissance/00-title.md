<!-- .slide: class="is-module" data-background="#0f0f11" -->

![Angular](/img/angular.png)

--- 

### Since last time

- Nico.js gave a talk on Angular 2 in 2016
- Simon and Sander gave a redelivery of Angular Connect in 2019

---

### The past few years though...

- Standalone APIs <!-- .element class="fragment" data-fragment-index="1" -->
- Change detection using <!-- .element class="fragment" data-fragment-index="2" --> `OnPush` <!-- .element class="fragment" data-fragment-index="2" --> becoming the new default? <!-- .element class="fragment" data-fragment-index="2" -->
- SSR and SSG with <!-- .element class="fragment" data-fragment-index="3" --> `@angular/ssr` <!-- .element class="fragment" data-fragment-index="3" -->
- Vite and esbuild for faster builds <!-- .element class="fragment" data-fragment-index="4" -->
- Control flow syntax with <!-- .element class="fragment" data-fragment-index="5" --> `@if` <!-- .element class="fragment" data-fragment-index="5" --> and <!-- .element class="fragment" data-fragment-index="5" --> `@for` <!-- .element class="fragment" data-fragment-index="5" -->
- Angular Material switched to MDC-based components <!-- .element class="fragment" data-fragment-index="6" -->
- A fancy new reactive primitive, signals! <!-- .element class="fragment" data-fragment-index="7" -->
- Type-safe forms <!-- .element class="fragment" data-fragment-index="8" -->
- More TypeScript strictness: <!-- .element class="fragment" data-fragment-index="9" --> `null` <!-- .element class="fragment" data-fragment-index="9" --> checks, no implicit <!-- .element class="fragment" data-fragment-index="9" --> `any`s <!-- .element class="fragment" data-fragment-index="9" -->
- More functional notations: no more classes for route guards, route resolvers and HTTP interceptors. Also:  <!-- .element class="fragment" data-fragment-index="10" --> `inject()` <!-- .element class="fragment" data-fragment-index="10" --> and `@Input()` <!-- .element class="fragment" data-fragment-index="10" --> for route params <!-- .element class="fragment" data-fragment-index="10" -->

---

### Yet to come

- Deliver more of signals: easier debugging, optional Zone.js, signal-based `output()`, signal-based forms/routing/`HttpClient`?
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
