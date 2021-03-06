---
category: Components
type: General
title: Button
---

To trigger an operation.

## When To Use

A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.

## API

To get a customized button, just set `type`/`shape`/`size`/`loading`/`disabled`.

Property | Description | Type | Default
-----|-----|-----|------
type | can be set to `primary` `ghost` `dashed` `danger` or omitted (meaning `default`) | string | `default`
htmlType | set the original html `type` of `button`, see: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string | `button`
icon | set the icon of button, see: Icon component | string | -
shape | can be set to `circle` or omitted | string | -
size | can be set to `small` `large` or omitted | string | `default`
loading | set the loading status of button | boolean <br /> { delay: number } | false
onClick | set the handler to handle `click` event | function | -
ghost | make background transparent and invert text and border colors | boolean | false

`<Button>Hello world!</Button>` will be rendered into `<button>Hello world!</button>`, and all the properties which are not listed above will be transferred to the `<button>` tag.
