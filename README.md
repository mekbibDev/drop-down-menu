# Drop Down for links

Function expects to be passed by an event listener. for example:

```js
var select = document(".select");
select.addEventListener("click",dropDownMenu);
```

It works by making the element which triggered the event, sibling's visible style `hidden` or `visible`
