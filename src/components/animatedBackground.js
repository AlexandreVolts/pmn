import * as React from "react";
import "./animatedBackground.css";

const AnimatedBackground = () =>
{
    const ref = React.useRef(null);

    React.useEffect(() => {
        const ctx = ref.current.getContext("2d");
        const { width, height } = ref.current.getBoundingClientRect();
        const hearts = [];

        ref.current.width = width;
        ref.current.height = height;
        const spawnHeart = () => {
            return ({
                x: ~~(Math.random() * width),
                y: height,
                size: ~~(Math.random() * 300) + 50,
                color: `rgba(255, 60, 60, ${Math.random() / 3})`,
                speed: Math.random() / 2 + 0.2
            });
        };
        const drawHeart = (heart) => {
            const w = heart.size;
            const h = heart.size * 1.3;
            ctx.fillStyle = heart.color;
            ctx.beginPath();
            ctx.moveTo(heart.x, heart.y + h / 2);
            ctx.quadraticCurveTo(heart.x + w / 3, heart.y + h / 4, heart.x + w / 2, heart.y);
            ctx.lineTo(heart.x - w / 2, heart.y)
            ctx.quadraticCurveTo(heart.x - w / 3, heart.y + h / 4, heart.x, heart.y + h / 2);
            ctx.closePath();
            ctx.fill();
            ctx.arc(heart.x - heart.size / 4, heart.y, heart.size / 4, -Math.PI, 0);
            ctx.arc(heart.x + heart.size / 4, heart.y, heart.size / 4, -Math.PI, 0);
            ctx.fill();
        };
        const render = () => {
            ctx.fillStyle = "rgba(20, 20, 40, 0.5)";
            ctx.fillRect(0, 0, width, height);
            if (Math.random() * 300 < 1) {
                hearts.push(spawnHeart());
            }
            for (const heart of hearts) {
                heart.y -= heart.speed;
                drawHeart(heart);
            }
            for (let i = hearts.length - 1; i >= 0; i--) {
                if (hearts[i].y + hearts[i].size < 0)
                    hearts.splice(i, 1);
            }
            window.requestAnimationFrame(render);
        };
        render();
    }, [ref]);
    
    return (<canvas id="background" ref={ref}></canvas>);
}

export default AnimatedBackground;