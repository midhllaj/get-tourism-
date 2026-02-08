import React from 'react';
import { createRoot } from 'react-dom/client';
import GlobeDemo from '../components/globe-demo';

export default class GlobePage {
    async mount(container) {
        // Create a dedicated container for React
        this.rootContainer = document.createElement('div');
        this.rootContainer.style.width = '100%';
        this.rootContainer.style.height = '100%';
        container.appendChild(this.rootContainer);

        this.root = createRoot(this.rootContainer);
        this.root.render(<GlobeDemo />);
    }

    unmount() {
        if (this.root) {
            this.root.unmount();
        }
        if (this.rootContainer) {
            this.rootContainer.remove();
        }
    }
}
