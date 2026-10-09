# Quick Start: Visual Animations in Grade 9 Math

## Overview

This project adds **interactive SVG animations** to Grade 9 math lessons. Instead of static images, figures now animate step-by-step to reveal concepts gradually.

## How It Works

### Animation Types

1. **Drawing Animation** - Lines/curves appear as if being drawn
   - Uses `stroke-dasharray` and `stroke-dashoffset`
   - Simulates hand-drawing effect

2. **Fade-in Animation** - Elements appear gradually
   - Uses CSS opacity transitions
   - Labels and points fade in

3. **Step-by-Step Reveal** - Logical sequence
   - Follows pedagogical flow
   - Each step reveals one concept

### Example: Circle Lesson (c5-b13)

```
Step 1: Draw circle
         ┌─────────────────┐
         │         ○       │
         │                 │
         └─────────────────┘

Step 2: Add center point
         ┌─────────────────┐
         │         ○       │
         │         •       │
         │        O        │
         └─────────────────┘

Step 3: Draw radius line
         ┌─────────────────┐
         │        ┌─●      │
         │       /         │
         │      / R        │
         │     •           │
         └─────────────────┘

Step 4: Add labels
         ┌─────────────────┐
         │        ┌─● A    │
         │       /         │
         │      / R        │
         │     • B         │
         └─────────────────┘
```

### Example: Trigonometry (c4-b11)

```
Step 1: Draw triangle
         ┌─────────────────┐
         │      C          │
         │     /│          │
         │    / │          │
         │   /  │          │
         │  /   │          │
         │ /____│          │
         │ A    B          │
         └─────────────────┘

Step 2: Add right angle marker
         ┌─────────────────┐
         │      C          │
         │     /│          │
         │    / └─         │
         │   /             │
         │  /              │
         │ /____________   │
         │ A             B │
         └─────────────────┘

Step 3: Draw angle arc
         ┌─────────────────┐
         │      C          │
         │     /│          │
         │    / └─         │
         │   /  °          │
         │  /              │
         │ /____________   │
         │ A             B │
         └─────────────────┘

Step 4: Add all labels
         ┌─────────────────┐
         │      C          │
         │     /│ cạnh đối │
         │    / └─ α       │
         │   /  °          │
         │  /              │
         │ /____________   │
         │ A cạnh kề   B   │
         └─────────────────┘
```

## Controls

Each animated figure has 4 control buttons:

- **▶ Play** - Automatically steps through all animations
- **⏸ Pause** - Stop the automatic playback
- **⏭ Step** - Move forward one step
- **↺ Reset** - Return to initial state

## Using Animations

### For Students
1. Open any animated lesson (c5-b13, c4-b11, etc.)
2. Look for figures with play buttons
3. Click **▶** to see animation
4. Use **⏭** to control pace
5. Click **↺** to restart

### For Developers

#### Add Animation to New Lesson

1. **Mark SVG with animation ID:**
```html
<figure class="figure" data-animation="lesson-id">
  <svg id="fig-lesson-id">
    <!-- SVG content -->
  </svg>
</figure>
```

2. **Add animation elements:**
```html
<!-- Line that draws -->
<line x1="..." y1="..." stroke-dasharray="100" stroke-dashoffset="100"/>

<!-- Element starts hidden -->
<text opacity="0">Label</text>
```

3. **Configure animation in animations.js:**
```javascript
'lesson-id': {
  steps: [
    { selector: 'line', animate: 'draw', duration: 0.5 },
    { selector: 'text', animate: 'fade-in', duration: 0.3 },
  ]
}
```

## Technical Details

### Animation Framework
- **File**: `web/js/animations.js`
- **Class**: `VisualAnimation`
- **Manager**: `AnimationManager`

### Configuration
- **SVG attributes**:
  - `stroke-dasharray="length"` - Defines dash pattern
  - `stroke-dashoffset="length"` - Controls visible portion
  - `opacity="0"` - Hidden element
  - `opacity="1"` - Visible element (default)

### CSS Classes
- `.figure` - Container (relative positioning)
- `.figure-controls` - Button container
- `.btn` - Control buttons

## Benefits

### vs Static Images
- ✅ Reveals concepts gradually
- ✅ Shows relationships dynamically
- ✅ More engaging
- ✅ Better memory retention

### vs Videos
- ✅ Lighter (no MP4 files)
- ✅ More interactive
- ✅ Easier to modify
- ✅ Better accessibility
- ✅ No buffering
- ✅ Simpler workflow

## Performance

- **GPU accelerated** CSS transitions
- **Lazy initialization** only visible figures
- **Minimal code** ~200 lines total
- **No dependencies** pure vanilla JS

## Browser Support

- Chrome/Edge: ✅ Full
- Firefox: ✅ Full
- Safari: ✅ Full
- Opera: ✅ Full

## Future Enhancements

### Short Term
- [ ] c5-b16: Line-circle positions (animate movement)
- [ ] c9-b27: Inscribed angles (animate point on circumference)
- [ ] c6-b18: Parabola (slider for coefficient)

### Medium Term
- Sliders for interactive parameters
- Drag-to-rotate for 3D concepts
- Adaptive animations based on progress
- Mobile optimization

## Files

| File | Purpose |
|------|---------|
| `web/js/animations.js` | Animation framework |
| `web/index.html` | Added animations script |
| `web/css/style.css` | Added control button styles |
| `web/js/lessons.js` | Added animation attributes to SVGs |
| `docs/animation-plan.md` | Planning document |
| `docs/animation-implementation.md` | Implementation details |

## Testing

To test animations:

1. Open `web/index.html` in browser
2. Navigate to: `#/g/9/lesson/c5-b13`
3. Look for the circle figure with control buttons
4. Click **▶** to play animation
5. Try **⏭** to step through manually

## Summary

This implementation adds **interactive, animated visualizations** that:
- Reveal concepts step-by-step
- Keep students engaged
- Are easier to create/maintain than videos
- Work reliably across all devices

The framework is designed to scale to all Grade 9 lessons and can be extended for other math topics.
