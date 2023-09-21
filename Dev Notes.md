# Notes

Switching between horizontal flex and vertical flex based on screen size
<br />

**CSS:**
```css
.container {
  display:flex;
  flex-direction:column;
}

.row-container {
  display:flex;
  flex-direction:row;
  justify-content:space-between;
}

.box {
  border:3px solid #000;
  width:300px;
  height:300px;
  margin-bottom:10px;
}

.box2 {
  width:200px;
  height:200px;
 }

@media only screen and (max-width: 600px) {
  .row-container {
    flex-direction:column;
  }
  
  .box2 {
    width:300px;
    height:300px;
  }
}
```

<br />

**HTML:**
```html
<div class="container">
  <div class="row-container">
    <div class="box1 box">1</div>
    <div class="box2 box">2</div>
  </div>
  <div class="box3 box">3</div>
</div>
```

What about using `.win.btn` and `.tab.btn` instead of `.win-btn` and `.tab-btn`? 

Can we get rounded corners for the window with hard corners for the tabs?