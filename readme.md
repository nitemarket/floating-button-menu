# Expandable Floating Button

This library is an improvement of floating buttons in the existing MDL components library (https://getmdl.io).

  - **Fixed positioned** floating button (FAB)
  - FAB contains **expandable children** - mini floating button
  - Bottom FAB **animate with Snackbar**

Demo: [https://jsfiddle.net/nitemarket/bg8kghL4](https://jsfiddle.net/nitemarket/bg8kghL4/)

![Floating buttons](https://github.com/nitemarket/expandable-floating-button/blob/master/screenshot/fab.png?raw=true)

### Installation

Simple steps:

1. Include CSS file - */dist/mdl-expandablefab.min.css*
2. Include JS file - */dist/mdl-expandablefab.min.js*
3. Write HTML
```html
<div class="mdl-fab-bottom-right mdl-button--fab-expandable bottom right mdl-fab-expandable--snack">
    <button class="mdl-button--fab"></button>
    <div class="mdl-fab-expandable--children">
        <!-- Include multiple children: -->
        <div class="mdl-fab-expandable--child">
            <button class="mdl-button--fab"></button>
            <div class="mdl-fab-expandable--child-label">
                <label>Create</label>
            </div>
        </div>
        <!-- End of children: -->
    </div>
</div>
```
4. Write CSS
```css
.mdl-fab-bottom-right {
    position: fixed;
    bottom: 24px;
	right: 24px;
	transition: bottom .25s cubic-bezier(0,0,.2,1);
}
```
5. Activate in Javascript
```javascript
$(document).ready(() => {
    demo.MaterialUtils.activateExpandableFAB();
});
```

### HTML class guideline

| Class | Usage | Required | Requirements |
| ------ | ------ | ------ | ------ |
| *mdl-button--fab-expandable* | Main class wrap all elements | Yes | Contains button |
| *top* | Children appear at bottom | No | - |
| *bottom* | Children appear on top | No | - |
| *left* | Children label appear on the right | No | - |
| *right* | Children label appear on the left | No | - |
| *mdl-fab-expandable--snack* | To animate with snackbar | No | Class **bottom** is required |
| *mdl-fab-expandable--children* | Container of children | Yes | - |
| *mdl-fab-expandable--child* | Container of each child  | Yes | Contains button |
| *mdl-fab-expandable--child-label* | Each child label  | Yes | - |

### Working with MDL Snackbar

1. Write HTML
```html
<div id="toastMessage" class="mdl-js-snackbar mdl-snackbar">
    <div class="mdl-snackbar__text"></div>
    <button class="mdl-snackbar__action" type="button"></button>
</div>
```
2. Insert class `mdl-fab-expandable–snack` in parent (**must have class `bottom`**).
```html
<div class="mdl-button--fab-expandable bottom right mdl-fab-expandable--snack">
    ...
</div>
```
3. Activate in Javascript
```javascript
$(document).ready(() => {
    $('#showSnackbarBtn').on('click', () => {
        nitemarket.MaterialUtils.showToastMessage("Warning! This is awesome.", "error");
    });
});
```

### Development

Want to contribute? Great!

* **Node.js** is used as a server to run examples.
* **Gulp** is used as a automater to generate `/dist` files.

Open your favorite Terminal and run these commands.

```sh
$ npm install
$ node examples/server
```

For production release:
```sh
$ gulp
```

### To improve

 - Animation when children buttons show up

### License

MIT
