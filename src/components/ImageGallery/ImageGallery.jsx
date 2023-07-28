
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from "./ImageGallery.styled";

export const ImageGallery = ({imagesToRender, onclick}) => {
    return (
        <ImageGalleryList>
            {imagesToRender.map(({id ,webformatURL, largeImageURL, tags}) =>   
            <ImageGalleryItem 
                key={id}
                largeImage={largeImageURL}
                src={webformatURL}
                alt={tags}
                // onClick={onClick}
            />    
            )}
        </ImageGalleryList>    
)
}