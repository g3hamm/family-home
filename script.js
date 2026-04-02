// Enhanced 3D model interaction
document.addEventListener('DOMContentLoaded', () => {
    const modelViewer = document.querySelector('model-viewer');
    
    if (modelViewer) {
        // Add custom interaction feedback
        modelViewer.addEventListener('camera-change', () => {
            // Optional: Add any custom behavior when camera moves
        });

        // Handle model load
        modelViewer.addEventListener('load', () => {
            console.log('3D model loaded successfully');
        });

        // Handle errors
        modelViewer.addEventListener('error', (event) => {
            console.error('Error loading 3D model:', event);
        });

        // Add keyboard controls for accessibility
        document.addEventListener('keydown', (e) => {
            if (!modelViewer) return;

            const rotationSpeed = 0.1;
            const currentOrbit = modelViewer.getCameraOrbit();

            switch(e.key) {
                case 'ArrowLeft':
                    modelViewer.cameraOrbit = `${currentOrbit.theta - rotationSpeed}rad ${currentOrbit.phi}rad ${currentOrbit.radius}m`;
                    e.preventDefault();
                    break;
                case 'ArrowRight':
                    modelViewer.cameraOrbit = `${currentOrbit.theta + rotationSpeed}rad ${currentOrbit.phi}rad ${currentOrbit.radius}m`;
                    e.preventDefault();
                    break;
                case 'ArrowUp':
                    modelViewer.cameraOrbit = `${currentOrbit.theta}rad ${Math.max(0, currentOrbit.phi - rotationSpeed)}rad ${currentOrbit.radius}m`;
                    e.preventDefault();
                    break;
                case 'ArrowDown':
                    modelViewer.cameraOrbit = `${currentOrbit.theta}rad ${Math.min(Math.PI, currentOrbit.phi + rotationSpeed)}rad ${currentOrbit.radius}m`;
                    e.preventDefault();
                    break;
                case '+':
                case '=':
                    modelViewer.cameraOrbit = `${currentOrbit.theta}rad ${currentOrbit.phi}rad ${Math.max(1, currentOrbit.radius - 0.5)}m`;
                    e.preventDefault();
                    break;
                case '-':
                case '_':
                    modelViewer.cameraOrbit = `${currentOrbit.theta}rad ${currentOrbit.phi}rad ${Math.min(10, currentOrbit.radius + 0.5)}m`;
                    e.preventDefault();
                    break;
                case 'r':
                case 'R':
                    // Reset to default view
                    modelViewer.cameraOrbit = '0deg 75deg 2.5m';
                    e.preventDefault();
                    break;
            }
        });
    }
});

// Made with Bob
