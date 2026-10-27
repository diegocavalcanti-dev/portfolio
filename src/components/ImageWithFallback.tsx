import { useState } from 'react';
import { Image } from 'lucide-react';

interface ImageWithFallbackProps {
    src: string;
    fallbackSrc?: string;
    alt: string;
    className?: string;
}

export default function ImageWithFallback({ src, fallbackSrc, alt, className = '' }: ImageWithFallbackProps) {
    const [currentSrc, setCurrentSrc] = useState(src);
    const [triedFallback, setTriedFallback] = useState(false);
    const [failed, setFailed] = useState(false);

    if (failed) {
        return (
            <div className={`flex items-center justify-center bg-zinc-900 ${className}`}>
                <Image className="w-10 h-10 text-zinc-700" />
                <span className="sr-only">{alt}</span>
            </div>
        );
    }

    return (
        <img
            src={currentSrc}
            alt={alt}
            className={className}
            loading="lazy"
            onError={() => {
                if (fallbackSrc && !triedFallback) {
                    setTriedFallback(true);
                    setCurrentSrc(fallbackSrc);
                } else {
                    setFailed(true);
                }
            }}
        />
    );
}
