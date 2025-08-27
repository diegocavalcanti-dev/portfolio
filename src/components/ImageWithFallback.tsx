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
            <div className={`flex items-center justify-center bg-gray-100 ${className}`}>
                <Image className="w-12 h-12 text-gray-400" />
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