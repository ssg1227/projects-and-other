export class TfNavigationTracker {
    constructor() {
        this.sequence = [];
        this.setupListeners();
    }
    setupListeners() {
        document.addEventListener('click', (e) => {
            const target = e.target;
            const sectionId = target.closest('[data-track-section]')?.getAttribute('data-track-section');
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
