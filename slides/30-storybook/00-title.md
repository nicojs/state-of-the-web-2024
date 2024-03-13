### Introduction to the issue @

![](/img/Zorginfo-RGB.png) <!-- .element class="img-500" -->

---

![](/img/ja-nee-formulier-foto.png) 

---

<video width="960" controls>
  <source src="/img/Opname zorginfo applicatie ja nee formulier.mp4" type="video/mp4">
</video>


---

### Whats a way to solve this?

![](/img/storybook.png) <!-- .element class="img-500" -->

---

### What can storybook also do?

![](/img/storybook-infinite-uis-solution.png) <!-- .element class="img-500" -->

---

### What can storybook also do?

- Use stories in unit testing

```javascript
import { fireEvent, render, screen } from '@testing-library/react';

import { composeStory } from '@storybook/react';

import Meta, { InvalidForm as InvalidFormStory } from './LoginForm.stories'; //👈 Our stories imported here.

const FormError = composeStory(InvalidFormStory, Meta);

test('Checks if the form is valid', () => {
  render(<FormError />);

  const buttonElement = screen.getByRole('button', {
    name: 'Submit',
  });

  fireEvent.click(buttonElement);

  const isFormValid = screen.getByLabelText('invalid-form');
  expect(isFormValid).toBeInTheDocument();
});
```

<!-- .element class="smaller-text-code" -->

---

### What can storybook also do?

- Deploy your storybook as a website
- Living documentation

---

### Possible cons of storybook?

- More code to maintain
- Initial setup of stories takes more time then just writing the component
