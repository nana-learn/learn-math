/**
 * Animation framework for Grade 9 Math visualizations
 * Provides interactive SVG animations without videos
 */

class VisualAnimation {
  constructor(svgElement, config) {
    this.svg = svgElement;
    this.config = config;
    this.steps = config.steps || [];
    this.currentStep = 0;
    this.isPlaying = false;
    this.timer = null;
    
    this.init();
  }

  init() {
    // Hide all animated elements initially
    this.steps.forEach(step => {
      const elements = this.svg.querySelectorAll(step.selector);
      elements.forEach(el => {
        if (step.initialState === 'hidden') {
          el.style.display = 'none';
        } else if (step.initialState === 'opacity:0') {
          el.style.opacity = '0';
        }
      });
    });
  }

  playStep(stepIndex) {
    const step = this.steps[stepIndex];
    if (!step) return;

    const elements = this.svg.querySelectorAll(step.selector);
    elements.forEach((el, idx) => {
      if (step.animate === 'fade-in') {
        // Handle text, circles, etc.
        el.style.transition = `opacity ${step.duration || 0.5}s ease`;
        el.style.opacity = '1';
        if (el.tagName === 'circle') {
          el.style.stroke = el.getAttribute('stroke') || '#DDDDDD';
          el.style.display = '';
        }
      } else if (step.animate === 'draw') {
        // Draw line/curve effect
        const length = el.getTotalLength();
        if (length > 0) {
          el.style.transition = 'none';
          el.style.strokeDasharray = length;
          el.style.strokeDashoffset = length;
          
          requestAnimationFrame(() => {
            el.style.transition = `stroke-dashoffset ${step.duration || 0.5}s ease`;
            el.style.strokeDashoffset = '0';
          });
        }
      } else if (step.animate === 'transform') {
        el.style.transition = `transform ${step.duration || 0.5}s ease`;
        el.style.transform = step.transform || 'none';
      }
    });
  }

  playForward() {
    if (this.currentStep >= this.steps.length) return;
    this.playStep(this.currentStep);
    this.currentStep++;
  }

  playBackward() {
    if (this.currentStep <= 0) return;
    this.currentStep--;
    // Reset to previous state
    this.steps.forEach((step, idx) => {
      if (idx < this.currentStep) {
        this.playStep(idx);
      }
    });
  }

  play() {
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.timer = setInterval(() => {
      if (this.currentStep < this.steps.length) {
        this.playForward();
      } else {
        this.stop();
      }
    }, 1000);
  }

  stop() {
    this.isPlaying = false;
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  reset() {
    this.stop();
    this.currentStep = 0;
    this.steps.forEach(step => {
      const elements = this.svg.querySelectorAll(step.selector);
      elements.forEach(el => {
        // Clear inline styles to revert to initial state
        el.style.transition = 'none';
        el.style.opacity = '';
        el.style.display = '';
        el.style.transform = '';
        
        // Reset stroke dash for drawing animations
        if (el.tagName === 'line' || el.tagName === 'path') {
          el.style.strokeDasharray = '';
          el.style.strokeDashoffset = '';
        }
      });
    });
  }

  goToStep(index) {
    this.stop();
    this.currentStep = 0;
    this.reset();
    // Play up to target step
    for (let i = 0; i < index; i++) {
      this.playStep(i);
      this.currentStep++;
    }
  }
}

// Animation manager for the page
const AnimationManager = {
  animations: {},
  
  init() {
    // Find all SVG figures with data-animation attribute
    document.querySelectorAll('.figure [data-animation]').forEach(svg => {
      const id = svg.dataset.animation;
      const config = this.getAnimationConfig(id);
      if (config) {
        this.animations[id] = new VisualAnimation(svg, config);
        this.attachControls(svg, id);
      }
    });
  },
  
  getAnimationConfig(id) {
    const configs = {
      // c4-b11: Tỉ số lượng giác của góc nhọn
      'c4-b11-triangle': {
        steps: [
          { selector: 'polygon', initialState: 'hidden', animate: 'draw', duration: 0.6 },
          { selector: 'rect', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'text[font-size="15"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="#58C4DD"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="#83C167"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="#9A72AC"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // c5-b13: Mở đầu về đường tròn
      'c5-b13-circle': {
        steps: [
          { selector: 'circle:not([r="3"])', initialState: 'hidden', animate: 'draw', duration: 1.0 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text:not([fill])', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.5 },
        ]
      },
      
      // c5-b16: Vị trí tương đối của đường thẳng và đường tròn (3 panels)
      'c5-b16-positions': {
        steps: [
          { selector: '#fig-c5-b16-1 circle:not([r="2.5"])', initialState: 'hidden', animate: 'draw', duration: 0.8 },
          { selector: '#fig-c5-b16-1 circle[r="2.5"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: '#fig-c5-b16-1 line:not([x1="65"])', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: '#fig-c5-b16-1 circle[fill="#FC6255"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: '#fig-c5-b16-1 line[x1="65"]', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: '#fig-c5-b16-1 text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          
          // Panel 2: tangent case
          { selector: '#fig-c5-b16-2 circle:not([r="2.5"])', initialState: 'hidden', animate: 'draw', duration: 0.8 },
          { selector: '#fig-c5-b16-2 circle[r="2.5"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: '#fig-c5-b16-2 line:not([x1="65"])', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: '#fig-c5-b16-2 circle[fill="#FC6255"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: '#fig-c5-b16-2 line[x1="65"]', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: '#fig-c5-b16-2 text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: '#fig-c5-b16-2 rect', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          
          // Panel 3: no intersection case
          { selector: '#fig-c5-b16-3 circle:not([r="2.5"])', initialState: 'hidden', animate: 'draw', duration: 0.8 },
          { selector: '#fig-c5-b16-3 circle[r="2.5"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: '#fig-c5-b16-3 line:not([x1="65"])', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: '#fig-c5-b16-3 line[x1="65"]', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: '#fig-c5-b16-3 text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // c9-b27: Góc nội tiếp
      'c9-b27-inscribed': {
        steps: [
          { selector: 'circle:not([r="2.5"])', initialState: 'hidden', animate: 'draw', duration: 0.8 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="#58C4DD"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="#83C167"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'line[stroke-dasharray="5 4"]', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'path', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'text[fill]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // c9-b28: Đường tròn ngoại tiếp và nội tiếp
      'c9-b28-triangle': {
        steps: [
          { selector: 'polygon', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="#83C167"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle[r="2.5"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="#9A72AC"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle[stroke="none"]', initialState: 'hidden', animate: 'draw', duration: 0.6 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
        ]
      },
      
      // c6-b18: Hàm số y = ax²
      'c6-b18-parabola': {
        steps: [
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'path', initialState: 'hidden', animate: 'draw', duration: 1.0 },
          { selector: 'circle:not([r="3"])', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // c3-b7: Căn bậc hai và căn thức bậc hai
      'c3-b7-square': {
        steps: [
          { selector: 'rect', initialState: 'hidden', animate: 'draw', duration: 0.8 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'text[fill="#58C4DD"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="#FC6255"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // c7-b22: Bảng tần số và biểu đồ tần số
      'c7-b22-chart': {
        steps: [
          { selector: 'line:not([stroke-opacity])', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'line[stroke-opacity]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect', initialState: 'hidden', animate: 'fade-in', duration: 0.4 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // c10-b31: Hình trụ và hình nón
      'c10-b31-3d': {
        steps: [
          { selector: 'ellipse', initialState: 'hidden', animate: 'draw', duration: 0.6 },
          { selector: 'line:not([stroke-dasharray])', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      }
    };
    
    return configs[id] || null;
  },
  
  attachControls(svg, id) {
    const controls = document.createElement('div');
    controls.className = 'figure-controls';
    controls.innerHTML = `
      <button class="btn play" data-target="${id}">▶</button>
      <button class="btn pause" data-target="${id}">⏸</button>
      <button class="btn step" data-target="${id}" data-dir="1">⏭</button>
      <button class="btn reset" data-target="${id}">↺</button>
    `;
    
    svg.parentElement.appendChild(controls);
    
    // Add event listeners
    controls.addEventListener('click', (e) => {
      if (e.target.dataset.target !== id) return;
      
      const animation = this.animations[id];
      if (!animation) return;
      
      switch (e.target.dataset.dir) {
        case '1':
          animation.playForward();
          break;
        case '-1':
          animation.playBackward();
          break;
        default:
          switch (e.target.className) {
            case 'btn play':
              animation.play();
              break;
            case 'btn pause':
              animation.stop();
              break;
            case 'btn reset':
              animation.reset();
              break;
          }
      }
    });
  }
};

// Initialize animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  AnimationManager.init();
});
