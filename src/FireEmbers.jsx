import { useEffect, useState } from 'react';
import './FireEmbers.css';

const FireEmbers = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const sparks = Array.from({ length: 50 }).map((_, i) => {
            const size = Math.random() * 3 + 1.5;
            const driftRange = () => `${(Math.random() - 0.5) * 80}px`;
            const hue = Math.random() * 35 + 15;
            const lightness = Math.random() * 20 + 55;
            return {
                id: i,
                left: `${Math.random() * 100}%`,
                size,
                riseDuration: `${Math.random() * 4 + 4}s`,
                driftDuration: `${Math.random() * 1.5 + 1}s`,
                flickerDuration: `${Math.random() * 0.3 + 0.1}s`,
                delay: `${Math.random() * 8}s`,
                driftLeft: driftRange(),
                driftRight: driftRange(),
                driftMid: driftRange(),
                driftFar: driftRange(),
                driftEnd: driftRange(),
                colorBright: `hsl(${hue}, 100%, ${lightness}%)`,
                colorDim: `hsl(${hue + 5}, 80%, ${lightness - 20}%)`,
                glow: `hsla(${hue}, 100%, 50%, 0.7)`,
                glowDim: `hsla(${hue}, 80%, 40%, 0.3)`,
            };
        });
        setParticles(sparks);
    }, []);

    return (
        <div className="fire-embers-container">
            {particles.map((spark) => (
                <div
                    key={spark.id}
                    className="ember-particle"
                    style={{
                        left: spark.left,
                        width: `${spark.size}px`,
                        height: `${spark.size}px`,
                        '--rise-duration': spark.riseDuration,
                        '--drift-duration': spark.driftDuration,
                        '--flicker-duration': spark.flickerDuration,
                        '--spark-delay': spark.delay,
                        '--drift-left': spark.driftLeft,
                        '--drift-right': spark.driftRight,
                        '--drift-mid': spark.driftMid,
                        '--drift-far': spark.driftFar,
                        '--drift-end': spark.driftEnd,
                        '--spark-color-bright': spark.colorBright,
                        '--spark-color-dim': spark.colorDim,
                        '--spark-glow': spark.glow,
                        '--spark-glow-dim': spark.glowDim,
                    }}
                />
            ))}
        </div>
    );
};

export default FireEmbers;
