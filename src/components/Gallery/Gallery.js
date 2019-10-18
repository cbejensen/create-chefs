import React from 'react'
import ImageGrid from './ImageGridContainer'
import images from './GalleryImages'
// import { getImages } from '../../utils/firebaseHelpers'

const Gallery = props => {
  // getImages()
  const styles = {
    title: {
      textAlign: 'center',
    },
  }
  return (
    <div>
      <h1 style={styles.title}>Gallery</h1>
      <ImageGrid images={images} />
    </div>
  )
}

export default Gallery
