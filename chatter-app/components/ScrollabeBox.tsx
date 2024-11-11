import { useState, useEffect, useRef } from 'react';

export default function ScrollableBox({ children, className }: { children: React.ReactNode, className: string }) {
    const container = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        if (container.current) {
            container.current.scrollTo({
                top: container.current.scrollHeight,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [children]);

    return (
        <div
            className={`${className} overflow-y-scroll`}
            ref={container}
        >
            {children}
        </div>
    );
}
