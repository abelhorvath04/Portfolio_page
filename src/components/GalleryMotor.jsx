import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import Card from 'react-bootstrap/Card';
import 'photoswipe/style.css';

export default function SimpleGallery(props) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({

      gallery: '#' + props.galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
      mainClass: 'pswp-with-perma-preloader'
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  function convertToCamelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toUpperCase() : ' ' + word.toUpperCase()});
  }

  function PictureTitle(url) {
    const fileName = url.split('/').pop();
    const pictureName = fileName.split('.')[0];
    return convertToCamelCase(pictureName);
  }

  return (
    <div className="pswp-gallery" id={props.galleryID}>
      {props.images.map((image, index) => (
        <a
          href={image.largeURL}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={props.galleryID + '-' + index}
          target="_blank"
          rel="noreferrer"
        >
          <Card style={{ margin: '15px' }}>
            <img src={image.largeURL} alt={PictureTitle(image.largeURL)} className="gllry_p" />
            <Card.Body>
              <Card.Text>
                {PictureTitle(image.largeURL)}
              </Card.Text>
            </Card.Body>
          </Card>
        </a>
      ))}
    </div>
  );
}
