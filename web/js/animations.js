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
    // SPA re-renders lesson HTML; rebuild bindings each time
    this.animations = {};
    document.querySelectorAll('.figure-controls').forEach((c) => c.remove());

    // data-animation may be on <figure class="figure"> or on a child (e.g. svg)
    document.querySelectorAll('.figure[data-animation], .figure [data-animation]').forEach((el, index) => {
      const baseId = el.dataset.animation;
      if (!baseId) return;
      const svg = el.tagName === 'svg' ? el : el.querySelector('svg');
      if (!svg) return;
      // unique key so two figures can share a template id without clobbering
      const id = this.animations[baseId] ? `${baseId}__${index}` : baseId;
      const config = this.getAnimationConfig(baseId);
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
      
      // c9-b29: Tứ giác nội tiếp
      'c9-b29-cyclic': {
        steps: [
          { selector: 'circle:not([r="2.5"])', initialState: 'hidden', animate: 'draw', duration: 0.8 },
          { selector: 'polygon', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="#58C4DD"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="#FC6255"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="#9A72AC"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text:not([fill])', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // c9-b30: Đa giác đều
      'c9-b30-regular': {
        steps: [
          { selector: 'circle:not([r="2.5"])', initialState: 'hidden', animate: 'draw', duration: 0.8 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'polygon', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'line:not([stroke-dasharray])', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="#58C4DD"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="#83C167"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="#FC6255"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
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
      },
      
      // c10-b32: Hình cầu
      'c10-b32-sphere': {
        steps: [
          { selector: 'circle:not([r="2.5"])', initialState: 'hidden', animate: 'draw', duration: 0.8 },
          { selector: 'circle[r="2.5"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'rect', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // c4-b12: Một số hệ thức giữa cạnh, góc trong tam giác vuông
      'c4-b12': {
        steps: [
          { selector: 'polygon', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'path', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'rect', initialState: 'hidden', animate: 'fade-in', duration: 0.2 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // c5-b14: Cung chứa góc
      'c5-b14': {
        steps: [
          { selector: 'circle:not([r="2.5"])', initialState: 'hidden', animate: 'draw', duration: 0.8 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:not([stroke-dasharray])', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'path[stroke-dasharray]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // c5-b15: Độ dài đường tròn và hình tròn
      'c5-b15': {
        steps: [
          { selector: 'circle:not([r="2.5"])', initialState: 'hidden', animate: 'draw', duration: 0.8 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'path', initialState: 'hidden', animate: 'draw', duration: 0.5 },
        ]
      },
      
      // c5-b17: Hình quạt tròn
      'c5-b17': {
        steps: [
          { selector: 'circle:not([r="2.5"])', initialState: 'hidden', animate: 'draw', duration: 0.8 },
          { selector: 'path', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // c6-b19: Đồ thị của hàm số y = ax²
      'c6-b19': {
        steps: [
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'circle', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text:not([fill])', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path', initialState: 'hidden', animate: 'draw', duration: 0.8 },
          { selector: 'text[fill]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // c6-b20: Đồ thị của hàm số y = ax² (tiếp)
      'c6-b20': {
        steps: [
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'text:not([fill])', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:not([stroke])', initialState: 'hidden', animate: 'draw', duration: 0.6 },
          { selector: 'path[stroke]', initialState: 'hidden', animate: 'draw', duration: 0.6 },
          { selector: 'text[fill]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // c6-b21: Giải bài toán bằng cách lập phương trình
      'c6-b21': {
        steps: [
          { selector: 'circle', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect', initialState: 'hidden', animate: 'draw', duration: 0.5 },
        ]
      },
      
      // c8-b25: Hình trụ - Diện tích xung quanh
      'c8-b25': {
        steps: [
          { selector: 'ellipse:not([cy="180"])', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'line:not([stroke-dasharray])', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'ellipse[cy="180"]', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // c8-b26: Thể tích hình trụ
      'c8-b26': {
        steps: [
          { selector: 'ellipse:not([cy="180"])', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'line:not([stroke-dasharray])', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'ellipse[cy="180"]', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'path', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // c10-b1: Mở đầu về hình cầu
      'c10-b1': {
        steps: [
          { selector: 'circle:not([r="2.5"])', initialState: 'hidden', animate: 'draw', duration: 0.6 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // c1-b1: Phương trình và hệ hai phương trình bậc nhất hai ẩn
      'c1-b1': {
        steps: [
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'circle', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // c1-b2: Phương trình bậc nhất một ẩn
      'c1-b2': {
        steps: [
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // c1-b3: Phương trình đưa được về dạng ax + b = 0
      'c1-b3': {
        steps: [
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // c2-b5: Bất đẳng thức và tính chất
      'c2-b5': {
        steps: [
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // c2-b6: Bất phương trình bậc nhất một ẩn
      'c2-b6': {
        steps: [
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // c3-b8: Căn thức bậc hai
      'c3-b8': {
        steps: [
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // c3-b9: Liên hệ giữa phép nhân và phép khai phương
      'c3-b9': {
        steps: [
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // c3-b10: Biến đổi đơn giản biểu thức chứa căn thức bậc hai
      'c3-b10': {
        steps: [
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // c7-b23: Biểu đồ cột tần số tương đối
      'c7-b23': {
        steps: [
          { selector: 'line:not([stroke-opacity])', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'rect', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // c7-b24: Bảng tần số, tần số tương đối ghép nhóm
      'c7-b24': {
        steps: [
          { selector: 'line:not([stroke-opacity])', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'rect', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b14: Dữ liệu và biểu đồ
      'g8-b14-data-charts': {
        steps: [
          { selector: 'line:not([stroke-opacity])', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'line[stroke-opacity]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b1: Đơn thức
      'g8-b1-monomial': {
        steps: [
          { selector: 'rect:nth-child(1)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(1) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(2) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(3)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(3) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(3) text:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(4)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(4) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(4) text:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle:nth-child(5)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle:nth-child(6)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b2: Đa thức
      'g8-b2-polynomial': {
        steps: [
          { selector: 'rect:nth-child(1)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(1) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(2) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(3)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(3) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(3) text:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(4)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(4) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(4) text:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'line:nth-child(5)', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle:nth-child(6)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'line:nth-child(7)', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle:nth-child(8)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b3: Phép cộng và trừ đa thức
      'g8-b3-polynomial-add-subtract': {
        steps: [
          { selector: 'rect:nth-child(1)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(1) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(2) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(3)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(3) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(3) text:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(4)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(4) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(4) text:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(5)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(5) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(5) text:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle:nth-child(6)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b4: Phép nhân đa thức
      'g8-b4-multiplication': {
        steps: [
          { selector: 'rect:nth-child(1)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(1) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(2) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(3)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(3) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(4)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(4) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle:nth-child(5)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle:nth-child(6)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b5: Phép chia đa thức cho đơn thức
      'g8-b5-division': {
        steps: [
          { selector: 'rect:nth-child(1)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(1) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(2) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(3)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(3) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(4)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(4) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'line:nth-child(5)', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle:nth-child(6)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'line:nth-child(7)', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle:nth-child(8)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b6: Hằng đẳng thức đáng nhớ (bình phương)
      'g8-b6-identities': {
        steps: [
          { selector: 'rect:nth-child(1)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(1) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(2) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(3)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(3) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(4)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(4) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(5)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(5) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(6)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(6) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle:nth-child(7)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle:nth-child(8)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b7: Hằng đẳng thức đáng nhớ (lập phương)
      'g8-b7-cubic-identities': {
        steps: [
          { selector: 'rect:nth-child(1)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(1) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(2) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(3)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(3) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(4)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(4) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(5)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(5) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(6)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(6) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle:nth-child(7)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b8: Phân tích đa thức thành nhân tử
      'g8-b8-factorization': {
        steps: [
          { selector: 'rect:nth-child(1)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(1) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(2) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(3)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(3) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(4)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(4) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(5)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(5) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(6)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(6) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle:nth-child(7)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b9: Tứ giác
      'g8-b9-quadrilateral': {
        steps: [
          { selector: 'polygon', initialState: 'hidden', animate: 'draw', duration: 0.6 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // c5-b14: Cung và dây của một đường tròn
      'c5-b14-arc-chord': {
        steps: [
          { selector: 'circle', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'path', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle[r="2.5"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // c5-b15: Độ dài cung tròn và diện tích hình quạt
      'c5-b15-arc-sector': {
        steps: [
          { selector: 'circle', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'path', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle[r="2.5"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // c5-b17: Vị trí tương đối của hai đường tròn
      'c5-b17-circle-positions': {
        steps: [
          { selector: 'circle:nth-child(odd)', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'circle:nth-child(even)', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'circle[r="2"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // c6-b19: Phương trình bậc hai một ẩn
      'c6-b19-quadratic': {
        steps: [
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'path', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'circle[r="2.5"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // c6-b20: Định lí Viète và ứng dụng
      'c6-b20-viete': {
        steps: [
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // c6-b21: Giải bài toán bằng cách lập phương trình
      'c6-b21-word-problem': {
        steps: [
          { selector: 'rect', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // c7-b23: Bảng tần số tương đối và biểu đồ
      'c7-b23-relative-frequency': {
        steps: [
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'rect', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // c7-b24: Bảng tần số, tần số tương đối ghép nhóm
      'c7-b24-grouped-frequency': {
        steps: [
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'rect', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b10: Hình thang
      'g8-b10-trapezoid': {
        steps: [
          { selector: 'polygon', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b11: Hình bình hành
      'g8-b11-parallelogram': {
        steps: [
          { selector: 'polygon', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b12: Định lí Thalès trong tam giác
      'g8-b12-thales': {
        steps: [
          { selector: 'polygon', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b13: Định lí Thalès trong hình thang
      'g8-b13-thales-trapezoid': {
        steps: [
          { selector: 'polygon', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'line:not([stroke-dasharray])', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b15: Định lí Thalès trong tam giác
      'g8-b15-thales-triangle': {
        steps: [
          { selector: 'polygon', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b16: Đường trung bình của tam giác
      'g8-b16-midsegment': {
        steps: [
          { selector: 'polygon', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b17: Tính chất đường phân giác của tam giác
      'g8-b17-angle-bisector': {
        steps: [
          { selector: 'polygon', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'path', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b29: Hệ số góc của đường thẳng
      'g8-b29-slope': {
        steps: [
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'line:not([stroke-dasharray])', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b33: Hai tam giác đồng dạng
      'g8-b33-similar-triangles': {
        steps: [
          { selector: 'polygon:nth-child(1)', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'polygon:nth-child(2)', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'circle[r="2"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b34: Ba trường hợp đồng dạng của tam giác
      'g8-b34-similarity-cases': {
        steps: [
          { selector: 'polygon:nth-child(1), polygon:nth-child(3)', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'polygon:nth-child(2), polygon:nth-child(4)', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b35: Định lí Pythagore và ứng dụng
      'g8-b35-pythagoras': {
        steps: [
          { selector: 'polygon', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'rect', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle[r="2"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b36: Các trường hợp đồng dạng của tam giác vuông
      'g8-b36-right-triangle-similarity': {
        steps: [
          { selector: 'polygon:nth-child(odd)', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'polygon:nth-child(even)', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'rect', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b37: Hình đồng dạng
      'g8-b37-similar-shapes': {
        steps: [
          { selector: 'circle:nth-child(1)', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'circle:nth-child(2)', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b38: Hình chóp tam giác đều
      'g8-b38-triangular-pyramid': {
        steps: [
          { selector: 'polygon', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle[r="2"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b39: Hình chóp tứ giác đều
      'g8-b39-quadrilateral-pyramid': {
        steps: [
          { selector: 'polygon', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle[r="2"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b25: Phương trình bậc nhất một ẩn
      'g8-b25-linear-equation': {
        steps: [
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'line:not([stroke-dasharray])', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle[r="2.5"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b26: Giải bài toán bằng cách lập phương trình
      'g8-b26-equation-word-problem': {
        steps: [
          { selector: 'rect', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b27: Khái niệm hàm số và đồ thị
      'g8-b27-function-graph': {
        steps: [
          { selector: 'circle[r="2.5"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b28: Hàm số bậc nhất và đồ thị
      'g8-b28-linear-function-graph': {
        steps: [
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'line:not([stroke-dasharray])', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle[r="2.5"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b18: Thu thập và phân loại dữ liệu
      'g8-b18-statistics-data': {
        steps: [
          { selector: 'rect', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b19: Biểu diễn dữ liệu bằng bảng, biểu đồ
      'g8-b19-bar-chart': {
        steps: [
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'rect', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b20: Phân tích số liệu thống kê
      'g8-b20-pie-chart': {
        steps: [
          { selector: 'circle', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'path', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'rect', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b21: Phân thức đại số
      'g8-b21-algebraic-fraction': {
        steps: [
          { selector: 'rect', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle[r="2"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b22: Tính chất cơ bản của phân thức đại số
      'g8-b22-fraction-properties': {
        steps: [
          { selector: 'rect:nth-child(1), rect:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b23: Phép cộng và phép trừ phân thức đại số
      'g8-b23-fraction-addition': {
        steps: [
          { selector: 'rect', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b24: Phép nhân và phép chia phân thức đại số
      'g8-b24-fraction-multiplication': {
        steps: [
          { selector: 'rect', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b30: Kết quả có thể và kết quả thuận lợi
      'g8-b30-probability-outcomes': {
        steps: [
          { selector: 'circle[r="2.5"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b31: Cách tính xác suất bằng tỉ số
      'g8-b31-probability-ratio': {
        steps: [
          { selector: 'circle', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'path', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g8-b32: Mối liên hệ giữa xác suất thực nghiệm và xác suất
      'g8-b32-probability-experimental': {
        steps: [
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g6-b13: Tập hợp các số nguyên
      'g6-b13-integers': {
        steps: [
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'polygon', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle[r="4"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3, stagger: 5 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g6-b14: Cộng hai số nguyên cùng dấu
      'g6-b14-addition-same-sign': {
        steps: [
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle.point', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'arrow.addition', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'circle.result', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g6-b15: Cộng hai số nguyên khác dấu
      'g6-b15-addition-different-signs': {
        steps: [
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle.positive', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle.negative', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'arrow.sum', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'circle.result', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g6-b16: Tính chất giao hoán của phép cộng
      'g6-b16-commutative': {
        steps: [
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'arrow.a-b', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'arrow.b-a', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'text.sum', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g6-b17: Phép trừ hai số nguyên
      'g6-b17-subtraction': {
        steps: [
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle.minuend', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'arrow.subtraction', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'circle.result', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g6-b24: Thu thập và phân loại dữ liệu
      'g6-b24-data-table': {
        steps: [
          { selector: 'rect', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g6-b25: Biểu đồ tranh
      'g6-b25-pictograph': {
        steps: [
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle', initialState: 'hidden', animate: 'fade-in', duration: 0.3, stagger: 3 },
        ]
      },
      
      // g6-b18: Tam giác cân, tam giác đều
      'g6-b18-triangle': {
        steps: [
          { selector: 'polygon', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g6-b4: Phép cộng và phép trừ số tự nhiên
      'g6-b4-number-line': {
        steps: [
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'polygon', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle', initialState: 'hidden', animate: 'fade-in', duration: 0.3, stagger: 5 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3, stagger: 5 },
          { selector: 'line.add-arrow', initialState: 'hidden', animate: 'draw', duration: 0.5 },
        ]
      },
      
      // g6-b28: Phân số. Tính chất cơ bản của phân số
      'g6-b28-fractions': {
        steps: [
          { selector: 'circle', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'path', initialState: 'hidden', animate: 'draw', duration: 0.3, stagger: 4 },
          { selector: 'rect', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3, stagger: 4 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g6-b31: So sánh phân số
      'g6-b31-fraction-compare': {
        steps: [
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'path', initialState: 'hidden', animate: 'draw', duration: 0.3, stagger: 4 },
          { selector: 'rect', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3, stagger: 4 },
        ]
      },
      
      // g6-b38: So sánh số thập phân
      'g6-b38-decimal-number-line': {
        steps: [
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'polygon', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle', initialState: 'hidden', animate: 'fade-in', duration: 0.3, stagger: 4 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3, stagger: 4 },
          { selector: 'circle[fill="#FC6255"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[x="200"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[x="300"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g6-b26: Biểu đồ cột
      'g6-b26-bar-chart': {
        steps: [
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3, stagger: 6 },
          { selector: 'rect', initialState: 'hidden', animate: 'fade-in', duration: 0.4, stagger: 3 },
          { selector: 'text[x="120"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3, stagger: 3 },
          { selector: 'text[x="250"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g6-b22: Hình có trục đối xứng
      'g6-b22-axis-symmetry': {
        steps: [
          { selector: 'path', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g6-b23: Hình có tâm đối xứng
      'g6-b23-center-symmetry': {
        steps: [
          { selector: 'polygon', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g6-b29: Rút gọn phân số
      'g6-b29-simplify-fraction': {
        steps: [
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.4 },
          { selector: 'line', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g6-b30: Quy đồng mẫu số
      'g6-b30-common-denominator': {
        steps: [
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.4 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g6-b32: Hỗn số và số thập phân
      'g6-b32-mixed-decimal': {
        steps: [
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.4 },
          { selector: 'line', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g6-b39: So sánh số thập phân
      'g6-b39-compare-decimal': {
        steps: [
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.4 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
        ]
      },
      
      // g6-b33: Phép cộng phân số
      'g6-b33-fraction-add': {
        steps: [
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.4 },
          { selector: 'line', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g6-b34: Phép trừ phân số
      'g6-b34-fraction-sub': {
        steps: [
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.4 },
          { selector: 'line', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g6-b35: Phép nhân phân số
      'g6-b35-fraction-mul': {
        steps: [
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.4 },
          { selector: 'line', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g6-b36: Phép chia phân số
      'g6-b36-fraction-div': {
        steps: [
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.4 },
          { selector: 'line', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g6-b37: Giá trị của phân số
      'g6-b37-fraction-value': {
        steps: [
          { selector: 'circle:not([r="3"])', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g6-b41: Nhân số thập phân
      'g6-b41-decimal-mul': {
        steps: [
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.4 },
          { selector: 'line', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g6-b42: Chia số thập phân
      'g6-b42-decimal-div': {
        steps: [
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.4 },
          { selector: 'line', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g6-b43: Tỉ số phần trăm
      'g6-b43-percentage': {
        steps: [
          { selector: 'rect:not([fill-opacity])', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g6-b40: Cộng số thập phân
      'g6-b40-decimal-add': {
        steps: [
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.4 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
        ]
      },
      
      // g6-b27: Biểu đồ cột kép
      'g6-b27-double-bar-chart': {
        steps: [
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3, stagger: 6 },
          { selector: 'rect[fill="#58C4DD"]', initialState: 'hidden', animate: 'fade-in', duration: 0.4, stagger: 3 },
          { selector: 'rect[fill="#FC6255"]', initialState: 'hidden', animate: 'fade-in', duration: 0.4, stagger: 3 },
          { selector: 'text[x="110"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3, stagger: 3 },
          { selector: 'rect[x="350"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[x="370"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[x="250"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g6-b19: Hình vuông, hình chữ nhật
      'g6-b19-rectangles': {
        steps: [
          { selector: 'rect', initialState: 'hidden', animate: 'draw', duration: 0.4, stagger: 2 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3, stagger: 4 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3, stagger: 2 },
        ]
      },
      
      // g6-b20: Hình thoi, hình bình hành
      'g6-b20-parallelograms': {
        steps: [
          { selector: 'polygon', initialState: 'hidden', animate: 'draw', duration: 0.4, stagger: 2 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3, stagger: 2 },
        ]
      },
      
      // g7-b8: Góc kề bù, đối đỉnh và tia phân giác
      'g7-b8-angles': {
        steps: [
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle[r="2.5"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b9: Hai đường thẳng song song
      'g7-b9-parallel-lines': {
        steps: [
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle[r="1.5"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b10: Tiên đề Euclid và tính chất đường song song
      'g7-b10-euclid-parallel': {
        steps: [
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle[r="2.5"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b12: Tổng các góc trong một tam giác
      'g7-b12-triangle-angles': {
        steps: [
          { selector: 'polygon', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'circle[r="2.5"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b13: Hai tam giác bằng nhau (cạnh-góc-cạnh)
      'g7-b13-congruent-triangles': {
        steps: [
          { selector: 'polygon:nth-child(1), polygon:nth-child(2)', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle[r="2"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b14: Trường hợp góc-cạnh-góc và cạnh-cạnh-cạnh
      'g7-b14-congruent-cases': {
        steps: [
          { selector: 'polygon', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'path', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle[r="2"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b15: Trường hợp bằng nhau của tam giác vuông
      'g7-b15-right-triangle': {
        steps: [
          { selector: 'polygon', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'rect', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'path', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle[r="2.5"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b16: Tam giác cân và đường trung trực
      'g7-b16-isosceles': {
        steps: [
          { selector: 'polygon', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle[r="2.5"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b11: Định lí và chứng minh định lí
      'g7-b11-proof': {
        steps: [
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b22: Đại lượng tỉ lệ thuận
      'g7-b22-proportional': {
        steps: [
          { selector: 'line:not([stroke-dasharray])', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'polyline', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b23: Đại lượng tỉ lệ nghịch
      'g7-b23-inverse': {
        steps: [
          { selector: 'line:not([stroke-dasharray])', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'polyline', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b17: Thu thập và phân loại dữ liệu
      'g7-b17-statistics-data': {
        steps: [
          { selector: 'line:not([stroke-opacity])', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'line[stroke-opacity]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b18: Biểu đồ hình quạt tròn
      'g7-b18-pie-chart': {
        steps: [
          { selector: 'circle', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'path', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b19: Biểu đồ đoạn thẳng
      'g7-b19-line-chart': {
        steps: [
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'polyline', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b29: Làm quen với biến cố
      'g7-b29-random-events': {
        steps: [
          { selector: 'rect', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle[r="16"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b30: Xác suất của biến cố
      'g7-b30-probability': {
        steps: [
          { selector: 'rect:not([fill-opacity])', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'rect[fill-opacity]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b31: Góc và cạnh đối diện trong tam giác
      'g7-b31-triangle-relationships': {
        steps: [
          { selector: 'polygon', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'circle[r="2.5"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b32: Đường vuông góc và đường xiên
      'g7-b32-perpendicular': {
        steps: [
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle[r="2.5"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b34: Đồng quy trung tuyến và phân giác
      'g7-b34-concurrency': {
        steps: [
          { selector: 'polygon', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'line:nth-child(1)', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'line:nth-child(2)', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'line:nth-child(3)', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle[r="4"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b33: Ba cạnh của một tam giác
      'g7-b33-triangle-inequality': {
        steps: [
          { selector: 'polygon', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'circle[r="2.5"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b35: Đồng quy trung trực và đường cao
      'g7-b35-concurrency': {
        steps: [
          { selector: 'polygon', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'circle[r="2.5"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b36: Hình hộp chữ nhật và hình lập phương
      'g7-b36-cuboid': {
        steps: [
          { selector: 'rect', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b37: Hình lăng trụ đứng
      'g7-b37-prism': {
        steps: [
          { selector: 'polygon:nth-child(1), polygon:nth-child(2)', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g10-b2: Tập hợp
      'g10-b2-sets': {
        steps: [
          { selector: 'circle:not([r="3"])', initialState: 'hidden', animate: 'draw', duration: 0.6 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#83C167"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#FC6255"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g10-b3: Tập con
      'g10-b3-subset': {
        steps: [
          { selector: 'circle[r="28"]', initialState: 'hidden', animate: 'draw', duration: 0.6 },
          { selector: 'circle[r="16"]', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#83C167"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#FC6255"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g10-b4: Phép toán tập hợp (union, intersection, difference)
      'g10-b4-set-operations': {
        steps: [
          { selector: 'circle:not([r="3"])', initialState: 'hidden', animate: 'draw', duration: 0.6 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path', initialState: 'hidden', animate: 'fade-in', duration: 0.4 },
          { selector: 'text[fill="\#83C167"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#FC6255"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text:not([fill])', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g10-b8: Hàm số bậc hai
      'g10-b8-quadratic': {
        steps: [
          { selector: 'line:not([stroke-dasharray])', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path', initialState: 'hidden', animate: 'draw', duration: 0.8 },
          { selector: 'circle[r="2.5"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#58C4DD"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#FC6255"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g10-b9: Dấu tam thức bậc hai
      'g10-b9-quadratic-sign': {
        steps: [
          { selector: 'line:not([stroke-dasharray])', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path', initialState: 'hidden', animate: 'draw', duration: 0.8 },
          { selector: 'circle[r="2.5"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#58C4DD"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#FC6255"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g10-b7: Dấu của nhị thức bậc nhất
      'g10-b7-linear-sign': {
        steps: [
          { selector: 'line:not([stroke-dasharray])', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#58C4DD"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#FC6255"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g10-b1: Mệnh đề - bảng chân trị
      'g10-b1-truth-table': {
        steps: [
          { selector: 'line:not([stroke-dasharray])', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#83C167"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#FC6255"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g10-b25: Tổ hợp
      'g10-b25-combinations': {
        steps: [
          { selector: 'circle:not([r="3"])', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g10-b26: Số gần đúng và sai số
      'g10-b26-approximation': {
        steps: [
          { selector: 'line:not([stroke-dasharray])', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#58C4DD"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#FC6255"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g10-b12: Hiệu của hai vector
      'g10-b12-vector-diff': {
        steps: [
          { selector: 'line:not([stroke-dasharray])', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#58C4DD"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#FC6255"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#83C167"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g10-b13: Tích của vector với một số
      'g10-b13-scalar-mul': {
        steps: [
          { selector: 'line:not([stroke-dasharray])', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#58C4DD"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#83C167"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g10-b14: Hệ trục tọa độ
      'g10-b14-coordinate-system': {
        steps: [
          { selector: 'line:not([stroke-dasharray])', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#DDDDDD"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g10-b17: Giá trị lượng giác
      'g10-b17-trig-values': {
        steps: [
          { selector: 'circle:not([r="3"])', initialState: 'hidden', animate: 'draw', duration: 0.6 },
          { selector: 'line:not([stroke-dasharray])', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#58C4DD"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#FC6255"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#DDDDDD"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g10-b18: Tích vô hướng
      'g10-b18-dot-product': {
        steps: [
          { selector: 'line:not([stroke-dasharray])', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#58C4DD"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#FC6255"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#83C167"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g10-b19: Ứng dụng tích vô hướng
      'g10-b19-dot-product-app': {
        steps: [
          { selector: 'line:not([stroke-dasharray])', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#58C4DD"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#FC6255"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#83C167"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g10-b20: Hệ thức lượng trong tam giác
      'g10-b20-law-of-cosines': {
        steps: [
          { selector: 'polygon', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#58C4DD"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#83C167"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g10-b21: Đường tròn trong mặt phẳng tọa độ
      'g10-b21-circle': {
        steps: [
          { selector: 'circle:not([r="3"])', initialState: 'hidden', animate: 'draw', duration: 0.6 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'text[fill="\#58C4DD"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#83C167"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g10-b22: Ba đường conic
      'g10-b22-conic': {
        steps: [
          { selector: 'ellipse:not([cx])', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'path', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g10-b15: Tọa độ của vector
      'g10-b15-vector-coords': {
        steps: [
          { selector: 'line:not([stroke-dasharray])', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#58C4DD"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#DDDDDD"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g10-b16: Biểu thức tọa độ của phép toán vector
      'g10-b16-vector-expr': {
        steps: [
          { selector: 'line:not([stroke-dasharray])', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#58C4DD"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#FC6255"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#83C167"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g10-b23: Quy tắc cộng và quy tắc nhân
      'g10-b23-addition-rule': {
        steps: [
          { selector: 'circle:not([r="3"])', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g10-b24: Hoán vị, chỉnh hợp
      'g10-b24-permutations': {
        steps: [
          { selector: 'rect', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g10-b29: Xác suất trong một số trò chơi đơn giản
      'g10-b29-probability-game': {
        steps: [
          { selector: 'circle:not([r="3"])', initialState: 'hidden', animate: 'draw', duration: 0.6 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#58C4DD"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#FC6255"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g10-b30: Xác suất của biến cố
      'g10-b30-probability': {
        steps: [
          { selector: 'rect:not([fill-opacity])', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'rect[fill-opacity]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g10-b5: Bất đẳng thức
      'g10-b5-inequality': {
        steps: [
          { selector: 'line:not([stroke-dasharray])', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'line[stroke="\#58C4DD"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'line[stroke="\#FC6255"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#83C167"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g10-b6: Bất phương trình một ẩn
      'g10-b6-linear-inequality': {
        steps: [
          { selector: 'line:not([stroke-dasharray])', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#58C4DD"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g10-b27: Số trung bình cộng
      'g10-b27-mean': {
        steps: [
          { selector: 'line:not([stroke-dasharray])', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g10-b28: Độ lệch chuẩn
      'g10-b28-stddev': {
        steps: [
          { selector: 'line:not([stroke-dasharray])', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g10-b10: Vector trong mặt phẳng
      'g10-b10-vector': {
        steps: [
          { selector: 'line:not([stroke-dasharray])', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#58C4DD"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#FC6255"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g10-b11: Tổng và hiệu của hai vector
      'g10-b11-vector-sum': {
        steps: [
          { selector: 'line:not([stroke-dasharray])', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'line[stroke-dasharray]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle[r="3"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#58C4DD"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="\#FC6255"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },

      
      // Grade 11: Chèn animation cho từng bài sau khi bài học được thêm
      // g11-b1: sin, cos, tan, cot - vòng tròn lượng giác
      // g11-b2: phương trình lượng giác cơ bản
      // g11-b3: một số phương trình lượng giác thường gặp
      // g11-b4: quy tắc đếm
      // g11-b5: hoán vị, chỉnh hợp, tổ hợp
      // g11-b6: nhị thức Newton
      // g11-b7: phép thử và biến cố
      // g11-b8: xác suất của biến cố
      // g11-b9: dãy số
      // g11-b10: cấp số cộng
      // g11-b11: cấp số nhân
      // g11-b12: giới hạn của dãy số
      // g11-b13: giới hạn của hàm số
      // g11-b14: dạng vô định
      // g11-b15: hàm số liên tục
      // g11-b16: định nghĩa đạo hàm
      // g11-b17: quy tắc tính đạo hàm
      // g11-b18: vi phân
      // g11-b19: đạo hàm cấp hai
      // g11-b20: phép dời hình
      // g11-b21: phép đồng dạng
      // g11-b22: đại cương về đường thẳng và mặt phẳng
      // g11-b23: hai đường thẳng song song
      // g11-b24: đường thẳng song song với mặt phẳng
      // g11-b25: hai mặt phẳng song song
      // g11-b26: vectơ trong không gian
      // g11-b27: quan hệ vuông góc trong không gian
      // g6-b1: Tập hợp
      'g6-b1-sets': {
        steps: [
          { selector: 'ellipse:nth-child(1)', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'ellipse:nth-child(2)', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'circle:first-child', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle:nth-child(3)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text:not([font-size="14"])', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g6-b2: Cách ghi số tự nhiên
      'g6-b2-place-value': {
        steps: [
          { selector: 'rect:nth-child(1)', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'rect:nth-child(2)', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'rect:nth-child(3)', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'rect:nth-child(4)', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'text[font-size="12"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[font-size="18"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.3 },
        ]
      },
      
      // g6-b3: Thứ tự trong tập hợp các số tự nhiên
      'g6-b3-number-line': {
        steps: [
          { selector: 'line', initialState: 'hidden', animate: 'draw', duration: 0.4 },
          { selector: 'circle:nth-child(1)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle:nth-child(3)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle:nth-child(4)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle:nth-child(5)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text:not([fill="#58C4DD"])', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path', initialState: 'hidden', animate: 'draw', duration: 0.3 },
          { selector: 'text[fill="#58C4DD"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g6-b5: Phép nhân và phép chia số tự nhiên
      'g6-b5-multiplication-division': {
        steps: [
          { selector: 'g:nth-child(1) rect', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'g:nth-child(1) text:first-child', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'g:nth-child(1) text:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'g:nth-child(2) rect', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'g:nth-child(2) text:first-child', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'g:nth-child(2) text:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'g:nth-child(3) path', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'g:nth-child(3) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'g:nth-child(4) path', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'g:nth-child(4) text', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g6-b6: Luỹ thừa với số mũ tự nhiên
      'g6-b6-exponent': {
        steps: [
          { selector: 'rect', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[font-size="18"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[font-size="11"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(3)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(4)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(5)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[font-size="11"][y="140"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g6-b7: Hành động với luỹ thừa
      'g6-b7-exponent-operations': {
        steps: [
          { selector: 'rect:nth-child(1)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[font-size="14"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(3)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(4)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(5)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g6-b8: Thứ tự thực hiện phép tính
      'g6-b8-order-of-operations': {
        steps: [
          { selector: 'rect:nth-child(1)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[font-size="12"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(3)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g6-b9: Một số hình phẳng
      'g6-b9-geometry': {
        steps: [
          { selector: 'rect:nth-child(1)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'ellipse', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[font-size="12"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g6-b10: Hình chữ nhật
      'g6-b10-rectangle': {
        steps: [
          { selector: 'rect', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text:not([transform])', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[transform]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g6-b11: Hình vuông
      'g6-b11-square': {
        steps: [
          { selector: 'rect', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text:not([transform])', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[transform]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g6-b12: Tam giác
      'g6-b12-triangle': {
        steps: [
          { selector: 'polygon', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text:not([font-size="10"])', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'line', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b1: Tập hợp số tự nhiên
      'g7-b1-natural-numbers': {
        steps: [
          { selector: 'ellipse', initialState: 'hidden', animate: 'draw', duration: 0.5 },
          { selector: 'text[font-size="14"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text:not([fill="#333330"])', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[fill="#333330"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b2: Phép cộng và nhân số tự nhiên
      'g7-b2-operations': {
        steps: [
          { selector: 'path:nth-child(1)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text[font-size="12"]', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(3)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(4)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b3: Phép trừ và chia số tự nhiên
      'g7-b3-subtraction-division': {
        steps: [
          { selector: 'path:nth-child(1)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(3)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(4)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b4: Luỹ thừa
      'g7-b4-powers': {
        steps: [
          { selector: 'rect', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(3)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(4)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b5: Thứ tự thực hiện phép tính
      'g7-b5-priority': {
        steps: [
          { selector: 'rect:nth-child(1)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(3)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b6: Dấu hiệu chia hết
      'g7-b6-divisibility': {
        steps: [
          { selector: 'rect:nth-child(1)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(3)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b7: Số nguyên tố và hợp số
      'g7-b7-prime-composite': {
        steps: [
          { selector: 'path:nth-child(1)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle:nth-child(1)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'circle:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'text:not([fill])', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b20: Phương trình bậc nhất một ẩn
      'g7-b20-equations': {
        steps: [
          { selector: 'rect', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(3)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(4)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b21: Giải bài toán bằng cách lập phương trình
      'g7-b21-word-problems': {
        steps: [
          { selector: 'rect:nth-child(1)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(3)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(4)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b24: Tỉ lệ thức
      'g7-b24-ratio': {
        steps: [
          { selector: 'rect', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(3)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(4)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b25: Tính chất của tỉ lệ thức
      'g7-b25-properties': {
        steps: [
          { selector: 'rect:nth-child(1)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'rect:nth-child(3)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b26: Đại lượng tỉ lệ thuận
      'g7-b26-proportional': {
        steps: [
          { selector: 'rect', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(3)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(4)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b27: Đại lượng tỉ lệ nghịch
      'g7-b27-inverse': {
        steps: [
          { selector: 'rect', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(3)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(4)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
      
      // g7-b28: Hàm số
      'g7-b28-function': {
        steps: [
          { selector: 'rect', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(2)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(3)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
          { selector: 'path:nth-child(4)', initialState: 'hidden', animate: 'fade-in', duration: 0.3 },
        ]
      },
    };
    
    if (configs[id]) return configs[id];
    // Generic fade-in for Grade 2 (and any unlisted) diagram animations
    if (id && String(id).startsWith('g2-')) {
      return {
        steps: [
          { selector: 'rect', initialState: 'opacity:0', animate: 'fade-in', duration: 0.35 },
          { selector: 'circle', initialState: 'opacity:0', animate: 'fade-in', duration: 0.35 },
          { selector: 'ellipse', initialState: 'opacity:0', animate: 'fade-in', duration: 0.35 },
          { selector: 'line', initialState: 'opacity:0', animate: 'draw', duration: 0.4 },
          { selector: 'polygon', initialState: 'opacity:0', animate: 'fade-in', duration: 0.35 },
          { selector: 'path', initialState: 'opacity:0', animate: 'draw', duration: 0.4 },
          { selector: 'text', initialState: 'opacity:0', animate: 'fade-in', duration: 0.3 },
        ],
      };
    }
    return null;
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
