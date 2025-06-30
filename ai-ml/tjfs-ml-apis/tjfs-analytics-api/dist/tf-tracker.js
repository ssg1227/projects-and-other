export class TfNavigationTracker {
    constructor() {
        this.sequence = [];
        this.setupListeners();
    }
    setupListeners() {
        document.addEventListener('click', (e) => {
            var _a;
            const target = e.target;
            const sectionId = (_a = target.closest('[data-track-section]')) === null || _a === void 0 ? void 0 : _a.getAttribute('data-track-section');
            if (sectionId)
                this.record(sectionId);
        });
    }
    record(section) {
        this.sequence.push(section);
        console.log('Tracked sequence:', this.sequence);
    }
    getSequence() {
        return [...this.sequence];
    }
    reset() {
        this.sequence = [];
    }
}
