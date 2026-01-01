'use client';

import React, { useEffect } from 'react';

interface Props {
    speedFactor?: number;
    backgroundColor?: string;
    starColor?: [number, number, number];
    starCount?: number;
}

const DEFAULT_STAR_COLOR: [number, number, number] = [255, 255, 255];

const Starfield = React.memo(function Starfield({
    speedFactor = 0.02,
    backgroundColor = 'transparent',
    starColor = DEFAULT_STAR_COLOR,
    starCount = 3000
}: Props) {

    useEffect(() => {
        const canvas = document.getElementById('starfield') as HTMLCanvasElement;

        if (canvas) {
            const c = canvas.getContext('2d');

            if (c) {
                let w = window.innerWidth;
                let h = window.innerHeight;
                let animationFrameId: number;

                const setCanvasExtents = () => {
                    canvas.width = w;
                    canvas.height = h;
                };

                setCanvasExtents();

                const makeStars = (count: number) => {
                    const out = [];
                    for (let i = 0; i < count; i++) {
                        const s = {
                            x: Math.random() * 1600 - 800,
                            y: Math.random() * 900 - 450,
                            z: Math.random() * 1000,
                            size: Math.random() * 1.07 + 0.75
                        };
                        out.push(s);
                    }
                    return out;
                };

                const stars = makeStars(starCount);

                const clear = () => {
                    c.clearRect(0, 0, canvas.width, canvas.height);
                    if (backgroundColor !== 'transparent') {
                        c.fillStyle = backgroundColor;
                        c.fillRect(0, 0, canvas.width, canvas.height);
                    }
                };

                const putPixel = (x: number, y: number, size: number, brightness: number) => {
                    const rgb =
                        'rgba(' + starColor[0] + ',' + starColor[1] + ',' + starColor[2] + ',' + brightness + ')';
                    c.fillStyle = rgb;
                    c.fillRect(x, y, size, size);
                };

                const moveStars = (distance: number) => {
                    const count = stars.length;
                    for (var i = 0; i < count; i++) {
                        const s = stars[i];
                        s.z -= distance;
                        while (s.z <= 1) {
                            s.z += 1000;
                        }
                    }
                };

                let prevTime: number;
                const init = (time: number) => {
                    prevTime = time;
                    animationFrameId = requestAnimationFrame(tick);
                };

                const tick = (time: number) => {
                    let elapsed = time - prevTime;
                    prevTime = time;

                    moveStars(elapsed * speedFactor);

                    clear();

                    const cx = w / 2;
                    const cy = h / 2;

                    const count = stars.length;
                    for (var i = 0; i < count; i++) {
                        const star = stars[i];

                        const x = cx + star.x / (star.z * 0.001);
                        const y = cy + star.y / (star.z * 0.001);

                        if (x < 0 || x >= w || y < 0 || y >= h) {
                            continue;
                        }

                        const d = star.z / 1000.0;
                        const b = 1 - d * d;

                        putPixel(x, y, star.size, b);
                    }

                    animationFrameId = requestAnimationFrame(tick);
                };

                animationFrameId = requestAnimationFrame(init);

                const handleResize = () => {
                    setCanvasExtents();
                };

                window.addEventListener('resize', handleResize);

                return () => {
                    window.removeEventListener('resize', handleResize);
                    cancelAnimationFrame(animationFrameId);
                };
            } else {
                console.error('Could not get 2d context from canvas element');
            }
        } else {
            console.error('Could not find canvas element with id "starfield"');
        }
    }, [starColor, backgroundColor, speedFactor, starCount]);

    return (
        <canvas
            id="starfield"
            style={{
                padding: 0,
                margin: 0,
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: 0,
                opacity: 1,
                pointerEvents: 'none',
                mixBlendMode: 'screen',
            }}
        ></canvas>
    );
});

export default Starfield;