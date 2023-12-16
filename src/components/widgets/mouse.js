import React, { useEffect, useRef } from 'react';
import { TweenMax, TweenLite } from 'gsap';

function MouseEffects() {
  const heroWrapRef = useRef();
  const columnSectionRef = useRef(null);
  const parallaxSectionRef = useRef(null);
  const darkBgRef = useRef(null);
  const csContentContainerRef = useRef(null);
  const columnWrapBgRef = useRef(null);
  const elementItemRef = useRef(null);
  const reservOverlayRef = useRef(null);

  useEffect(() => {
    const elements = [
      heroWrapRef.current,
      columnSectionRef.current,
      parallaxSectionRef.current,
      darkBgRef.current,
      csContentContainerRef.current,
      columnWrapBgRef.current
    ];

    elements.forEach(element => {
      if (element) {
        element.addEventListener('mouseenter', () => {
          const item = elementItemRef.current;
          item.classList.add('white_blur');
        });

        element.addEventListener('mouseleave', () => {
          const item = elementItemRef.current;
          item.classList.remove('white_blur');
        });
      }
    });

    const hoverElements = [
      'a',
      '.btn',
      'textarea',
      'input',
      '.show-reserv_button',
      '.show-share-btn',
      '.show-cart',
      '.close-reservation-modal'
    ];

    hoverElements.forEach(element => {
      const $element = document.querySelector(element);

      if ($element) {
        $element.addEventListener('mouseenter', () => {
          const item = elementItemRef.current;
          item.classList.add('elem_hover');
        });

        $element.addEventListener('mouseleave', () => {
          const item = elementItemRef.current;
          item.classList.remove('elem_hover');
        });
      }
    });

    const sliderElements = [
      '.single-slider .swiper-slide',
      '.product-slider .swiper-slide',
      '.events-carousel .swiper-slide',
      '.testimonilas-carousel .swiper-slide',
      '.grid-carousel .swiper-slide',
      '.fs-slider .swiper-slide'
    ];

    sliderElements.forEach(element => {
      const $element = document.querySelector(element);

      if ($element) {
        $element.addEventListener('mouseenter', () => {
          const item = elementItemRef.current;
          item.classList.add('slider_hover');
        });

        $element.addEventListener('mouseleave', () => {
          const item = elementItemRef.current;
          item.classList.remove('slider_hover');
        });
      }
    });

    if (reservOverlayRef.current) {
      reservOverlayRef.current.addEventListener('mouseenter', () => {
        const item = elementItemRef.current;
        item.classList.add('close-icon');
      });

      reservOverlayRef.current.addEventListener('mouseleave', () => {
        const item = elementItemRef.current;
        item.classList.remove('close-icon');
      });
    }

    const mouse = {
      x: 0,
      y: 0
    };
    const pos = {
      x: 0,
      y: 0
    };
    const ratio = 0.15;
    let active = false;
    const ball = elementItemRef.current;
    if (ball) {
      TweenLite.set(ball, {
        xPercent: -50,
        yPercent: -50
      });

      function mouseMove(e) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        mouse.x = e.pageX;
        mouse.y = e.pageY - scrollTop;
      }

      document.addEventListener('mousemove', mouseMove);

      TweenMax.ticker.addEventListener('tick', updatePosition);

      function updatePosition() {
        if (!active) {
          pos.x += (mouse.x - pos.x) * ratio;
          pos.y += (mouse.y - pos.y) * ratio;
          TweenMax.set(ball, {
            x: pos.x,
            y: pos.y
          });
        }
      }

      return () => {
        elements.forEach(element => {
          if (element) {
            element.removeEventListener('mouseenter', () => {
              const item = elementItemRef.current;
              item.classList.add('white_blur');
            });

            element.removeEventListener('mouseleave', () => {
              const item = elementItemRef.current;
              item.classList.remove('white_blur');
            });
          }
        });

        hoverElements.forEach(element => {
          const $element = document.querySelector(element);

          if ($element) {
            $element.removeEventListener('mouseenter', () => {
              const item = elementItemRef.current;
              item.classList.add('elem_hover');
            });

            $element.removeEventListener('mouseleave', () => {
              const item = elementItemRef.current;
              item.classList.remove('elem_hover');
            });
          }
        });

        sliderElements.forEach(element => {
          const $element = document.querySelector(element);

          if ($element) {
            $element.removeEventListener('mouseenter', () => {
              const item = elementItemRef.current;
              item.classList.add('slider_hover');
            });

            $element.removeEventListener('mouseleave', () => {
              const item = elementItemRef.current;
              item.classList.remove('slider_hover');
            });
          }
        });

        if (reservOverlayRef.current) {
          reservOverlayRef.current.removeEventListener('mouseenter', () => {
            const item = elementItemRef.current;
            item.classList.add('close-icon');
          });

          reservOverlayRef.current.removeEventListener('mouseleave', () => {
            const item = elementItemRef.current;
            item.classList.remove('close-icon');
          });
        }

        document.removeEventListener('mousemove', mouseMove);
        TweenMax.ticker.removeEventListener('tick', updatePosition);
      };
    }
  }, []);

  return (
    <div className="element">
      <div className="element-item" ref={elementItemRef}></div>
      <div className="hero-wrap" ref={heroWrapRef}></div>
      <section className="column-section" ref={columnSectionRef}></section>
      <section className="parallax-section" ref={parallaxSectionRef}></section>
      <div className="dark-bg" ref={darkBgRef}></div>
      <div className="cs-content-container" ref={csContentContainerRef}></div>
      <div className="column-wrap-bg" ref={columnWrapBgRef}></div>
      <div className="reserv-overlay" ref={reservOverlayRef}></div>
    </div>
  );
}

export default MouseEffects;