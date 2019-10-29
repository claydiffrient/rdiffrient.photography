import React, { useState, useEffect, useCallback } from "react"
import Carousel, { Modal, ModalGateway } from "react-images"
import Gallery from "react-photo-gallery"
import { css } from "@emotion/core"
import loadImage from "image-promise"

export default function ImageViewer({ images }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(false)
  const [augmentedImages, setAugmentedImages] = useState([])

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setModalOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setModalOpen(false)
  }

  useEffect(() => {
    async function preloadImages() {
      try {
        const preloadedImages = await loadImage(images.map(i => i.src))
        setAugmentedImages(
          images.map((img, index) => ({
            ...img,
            height: preloadedImages[index].naturalHeight,
            width: preloadedImages[index].naturalWidth,
          }))
        )
      } catch (e) {}
    }
    preloadImages()
  }, [])

  return (
    <div>
      <Gallery photos={augmentedImages} onClick={openLightbox} />
      <ModalGateway>
        {modalOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={images.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            ></Carousel>
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}
