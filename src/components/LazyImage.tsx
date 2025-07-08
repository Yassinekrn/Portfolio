import React, { useState } from "react";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    fallbackSrc?: string;
}

const DEFAULT_FALLBACK = "/assets/images/fallback.png";

const LazyImage: React.FC<LazyImageProps> = ({
    src,
    alt,
    fallbackSrc = DEFAULT_FALLBACK,
    ...props
}) => {
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <img
            src={imgSrc}
            alt={alt}
            loading="lazy"
            onError={() => setImgSrc(fallbackSrc)}
            {...props}
        />
    );
};

export default LazyImage;