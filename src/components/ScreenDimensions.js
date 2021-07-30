import { useState, useEffect } from 'react';

function getScreenDimensions() {
    const {
        innerWidth: width,
        innerHeight: height,
    } = window;
    return { width, height }
}

function useScreenDimensions() {
    const [windowDim, setWindowDim] = useState(getScreenDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDim(getScreenDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowDim;
}

export default useScreenDimensions;