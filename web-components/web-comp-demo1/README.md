# 🚀 Web Component Demo

This project has been created using **webpack-cli**, you can now run

```
npm run build
```

or

```
yarn build
```

to bundle your application


Ways to share styles with web component:

1. CSS variables
Pros:
    We can have default css property inside web component
Cons:
    Lot of CSS properties need to provide individually, can be time consuming

2. ::part(some-box)   // some-box is part name in template of web component
For Ex: In user-card web component: <div part="some-box" class="default-css">some box</div>
        In consumer CSS: user-card::part(some-box) {...}
Pros:
    We can have default css properties for whole group
    We can have lot of CSS properties together in single group, much better than first approach (CSS variables)

3. slot tag in web component, we can style from outside for that slot (Slot is not a part of shadow root if template is coming from outside, default template of slot will bepart of shadow root)
For Ex: In user-card web component: <slot name='email'></slot> and CSS: ::slotted(div.slot-email) {...}
        In consumer: <user-card><div slot='email' class='slot-email'>abc@xyz.com<div></user-card>
        In consumer CSS: .slot-email {...}
Note: ::slotted doesn't work for internal template, we can provide normal css with css selectors for default template
Pros: (If there is no default template inside web component)
    1. We can have default css for slot template which is coming from outside.
    2. We can also override css for slot template which is coming from outside.
Cons: (If there is a default template inside web component)
    1. We can't override css for default template of slot which is written inside web component

4. ::shadow, almost like ::part
For Ex: In consumer CSS:
    usercard::shadow .user-card img {
       width: 10%;
    }
Cons: Very less support of browsers, doesn't work mostly

5. @apply CSS variables group
For Ex:
    @apply --typography
Cons: Very less support of browsers, doesn't work mostly
