const ResizeScreen = () => {
    
    let resizeValue: string | null = null;

    const screen: Record<string, Number> = {
        small: 0,
        medium: 550,
        large: 800
    };

    // calculate size
    function resizeHandler(): void {

        // get window width
        const iw = window.innerWidth;

        // determine named size
        let size = null;
        for (let s in screen) {
            if (iw >= screen[s]) size = s;
        }

        resizeValue = size;
    }

    // observe window resize
    if (typeof window !== "undefined") {

        window.addEventListener('resize', resizeHandler);

        // initial call
        resizeHandler();
    }

    return resizeValue;
};

export default ResizeScreen;