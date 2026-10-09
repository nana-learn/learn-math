# Visual Animation Plan for Grade 9 Math

## Overview
Replace static SVG figures with **interactive, animated SVGs** that reveal concepts step-by-step. No video generation needed - pure SVG/JavaScript animations.

## Animation Types

### 1. Step-by-Step Reveal
- Draw figures incrementally (line by line, point by point)
- Reveal labels after elements appear
- Use `stroke-dasharray` for drawing effects

### 2. Interactive Parameters
- Sliders to change values (angles, lengths, coefficients)
- Real-time updates to calculations
- Toggle between different cases

### 3. Transformation Animations
- Rotate shapes around points
- Translate objects
- Scale figures
- Reflect across lines

### 4. Dynamic Intersections
- Show how lines intersect
- Animate moving points along curves
- Highlight regions as conditions change

---

## Priority Lessons for Animation

### High Priority (Core Concepts)

#### c5-b13: Mở đầu về đường tròn
**Current**: Static circle with center, radius label
**Animation**: 
- Draw circle center → add radius → rotate radius → show circumference
- Interactive slider for radius → real-time circumference/area update

#### c5-b16: Vị trí tương đối của đường thẳng và đường tròn
**Current**: Static figure showing intersection cases
**Animation**:
- Animate line moving toward circle
- Show 0, 1, 2 intersection points dynamically
- Highlight distance from center vs radius

#### c5-b17: Vị trí tương đối của hai đường tròn
**Current**: Static figure for 4 cases (outer, touching, intersecting, nested)
**Animation**:
- Animate one circle moving toward another
- Show 4 cases in sequence
- Highlight distance between centers vs sum/difference of radii

#### c6-b18: Hàm số y = ax²
**Current**: Static parabola
**Animation**:
- Slider for 'a' coefficient → show how parabola opens wider/narrower
- Show vertex, axis of symmetry
- Animate point moving along parabola

#### c9-b27: Góc nội tiếp
**Current**: Static circle with inscribed angle
**Animation**:
- Animate point on circumference → show angle changes
- Compare with central angle (same arc)
- Show angle = ½ central angle dynamically

#### c9-b28: Đường tròn ngoại tiếp/nội tiếp
**Current**: Static triangle with circumcircle/incircle
**Animation**:
- Show perpendicular bisectors → find circumcenter
- Show angle bisectors → find incenter
- Animate circle expansion/contraction

#### c4-b11: Tỉ số lượng giác của góc nhọn
**Current**: Static right triangle with sine/cosine/tangent
**Animation**:
- Animate angle change → show ratio changes
- Highlight opposite/adjacent/hypotenuse sides
- Show unit circle connection

### Medium Priority (Good Impact)

#### c2-b5: Bất đẳng thức và tính chất
**Current**: Number line with inequalities
**Animation**:
- Animate point moving on number line
- Show addition/multiplication properties
- Compare two expressions

#### c3-b7: Căn bậc hai
**Current**: Square root diagram
**Animation**:
- Show geometric meaning (√a = side of square with area a)
- Animate area → side length

#### c10-b31: Hình trụ và hình nón
**Current**: Static 2D cross-section
**Animation**:
- Show 3D rotation (2D approximation)
- Unfold lateral surface
- Show height, radius, slant height

### Low Priority (Nice to Have)

#### c7-b22/23/24: Biểu đồ tần số
**Current**: Static bar charts
**Animation**:
- Build chart bar-by-bar
- Show frequency → relative frequency conversion
- Animate data point movement

#### c8-b25/26: Xác suất
**Current**: Static sample space diagrams
**Animation**:
- Roll dice/flip coin simulation
- Show event occurrence over time
- Law of large numbers demonstration

---

## Technical Implementation

### Animation Framework
```javascript
// Add to app.js or new file: web/js/animations.js
const AnimationManager = {
  init: () => {
    // Initialize all animations on page load
  },
  play: (id) => {
    // Play animation by figure ID
  },
  reset: (id) => {
    // Reset animation to initial state
  }
};
```

### CSS for Animations
```css
.figure {
  position: relative;
  cursor: pointer;
}
.figure .controls {
  position: absolute;
  bottom: 8px;
  right: 8px;
  display: flex;
  gap: 4px;
}
.figure .btn {
  padding: 4px 8px;
  font-size: 11px;
  border-radius: 6px;
}
.figure svg {
  transition: all 0.3s ease;
}
```

### SVG Animation Techniques
1. **Path Drawing**: `stroke-dasharray`, `stroke-dashoffset`
2. **Element Visibility**: `opacity`, `display` toggles
3. **Transform**: `translate`, `rotate`, `scale`
4. **Color Transitions**: `fill`, `stroke` transitions
5. **Text Reveal**: Character-by-character

---

## Implementation Phases

### Phase 1: Foundation (Week 1)
- Create animation framework
- Add controls (play/pause/reset buttons)
- Implement basic step-by-step animations

### Phase 2: High Priority Lessons (Week 2)
- Implement animations for 6 core lessons
- Test interaction and performance

### Phase 3: Medium Priority (Week 3)
- Implement 6 more lessons
- Add sliders for interactive parameters

### Phase 4: Polish (Week 4)
- Accessibility improvements
- Mobile optimization
- Performance tuning

---

## User Experience

### Controls for Each Figure
- Play/Pause button
- Reset button
- Step forward/backward (for step-by-step)
- Slider (for interactive animations)
- Info button (show/hide labels)

### Learning Benefits
- **Visual understanding**: See concepts unfold
- **Interactive exploration**: Change parameters
- **Step-by-step learning**: Don't overwhelm
- **Memory retention**: Dynamic = memorable

---

## Performance Considerations
- Use CSS animations where possible (GPU accelerated)
- Lazy load animations (only init when visible)
- Limit simultaneous animations (max 2-3)
- Fallback to static SVG for slow devices
