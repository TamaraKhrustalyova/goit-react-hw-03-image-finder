import { ImageGalleryElem, ImageGalleryItemImage } from "./ImageGalleryItem.styled"; 


const ImageGalleryItem = ({id, src, largeImageUR, alt, onClick}) => {
    return (
        <ImageGalleryElem key={id} onClick={() => {onClick(largeImageUR)}}>
        <ImageGalleryItemImage 
            src={src}
            alt={alt}
        />
        </ImageGalleryElem>
        
    )
}

export default ImageGalleryItem;