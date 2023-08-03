import React from 'react';
import GalleryMotor from './GalleryMotor';

export default function Gallery() {
    return (
      <>
      <h1 className="text-center">Responsive Image Gallery</h1>
      <br />
      <div className="col">
        <GalleryMotor
          galleryID="resp-gallery"
          images={[
            {
              largeURL:
                './gallery/mountain.jpg',
              width: 1850,
              height: 2000,
              title: 'Mountain'
            },
            {
              largeURL:
                './gallery/lake.jpg',
              width: 1632,
              height: 918,
              title: 'Lake'
            },
            {
              largeURL:
                './gallery/big city.jpg',
              width: 5464,
              height: 3643,
              title: 'Big City'
            },
            {
              largeURL:
                './gallery/forest.jpg',
              width: 1632,
              height: 918,
              title: 'Forest'
            },
            {
              largeURL:
                './gallery/sail.jpg',
              width: 1850,
              height: 2000,
              title: 'Sail'
            },
            {
              largeURL:
                './gallery/mountains and see.jpg',
              width: 1632,
              height: 918,
              title: 'Mountains and See'
            },
            {
              largeURL:
                './gallery/amsterdam.jpg',
              width: 4687,
              height: 1408,
              title: 'Amsterdam'
            },
            {
              largeURL:
                './gallery/city.jpg',
              width: 910,
              height: 1138,
              title: 'City'
            },
            {
              largeURL:
                './gallery/corridor.jpg',
              width: 910,
              height: 1365,
              title: 'Corridor'
            },
            {
              largeURL:
                './gallery/glass.jpg',
              width: 910,
              height: 1365,
              title: 'Glass'
            },
            {
              largeURL:
                './gallery/mars.jpg',
              width: 1920,
              height: 1200,
              title: 'Mars'
            },
            {
              largeURL:
                './gallery/tree and lake.jpg',
              width: 1920,
              height: 1278,
              title: 'Tree and lake'
            }
          ]}
        />
      </div>
      </>
    );
  }