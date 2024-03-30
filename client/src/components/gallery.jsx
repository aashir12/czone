import React from 'react'

const Gallery = ({image}) => {
  return (
    <>
        <div className='Gallery'>
            <div className='topGallery'>
                <img src={image} style={{width:'100%',marginBottom:'5%'}}/>
            </div>
            <div className='lowerGallery'>
            <img src='https://www.czone.com.pk/images/thumbnails-large/13-czone.com.pk-1540-15678-310124080636.jpg'/>
            <img src='https://www.czone.com.pk/images/thumbnails-large/10-czone.com.pk-1540-15678-310124075910.jpg'/>
            <img src='https://www.czone.com.pk/images/thumbnails-large/10-czone.com.pk-1540-15678-310124075910.jpg'/>
            <img src='https://www.czone.com.pk/images/thumbnails-large/11-czone.com.pk-1540-15678-310124075910.jpg'/>

            </div>
        </div>
    </>
  )
}

export default Gallery