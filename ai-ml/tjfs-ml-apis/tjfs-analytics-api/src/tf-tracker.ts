export class TfNavigationTracker {
  private sequence: string[] = [];

  constructor() {
    this.setupListeners();
  }

  private setupListeners() {
    document.addEventListener('click', (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const sectionId = target.closest('[data-track-section]')?.getAttribute('data-track-section');
      if (sectionId) this.record(sectionId);
    });
  }

  private record(section: string) {
    this.sequence.push(section);
    console.log('Tracked sequence:', this.sequence);
  }

  public getSequence() {
    return [...this.sequence];
  }

  public reset() {
    this.sequence = [];
  }
}
