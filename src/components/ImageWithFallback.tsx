import { useState } from 'react';
import { Image } from 'lucide-react';

interface ImageWithFallbackProps {
    src: string;
    alt: string;
    className?: string;
}

export default function ImageWithFallback({ src, alt, className = '' }: ImageWithFallbackProps) {
    const [error, setError] = useState(false);

    if (error) {
        return (
            <div className={`flex items-center justify-center bg-zinc-900 ${className}`}>
                <Image className="w-10 h-10 text-zinc-700" />
                <span className="sr-only">{alt}</span>
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            onError={() => setError(true)}
            loading="lazy"
        />
    );
}