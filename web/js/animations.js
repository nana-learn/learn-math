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
