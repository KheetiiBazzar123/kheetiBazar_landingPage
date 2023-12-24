import React, { useState, useRef } from 'react';
import styles from '../../styles/components/carousel/carousel.module.css';

const slideData = [
	{
		index: 0,
		headline: 'New Fashion Apparel',
		button: 'Shop now',
		src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg'
	},
	{
		index: 1,
		headline: 'In The Wilderness',
		button: 'Book travel',
		src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg'
	},
	{
		index: 2,
		headline: 'For Your Current Mood',
		button: 'Listen',
		src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg'
	},
	{
		index: 3,
		headline: 'Focus On The Writing',
		button: 'Get Focused',
		src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg'
	}
];

const Slide = ({ slide, current, handleSlideClick }) => {
	const slideRef = useRef(null);

	const handleMouseMove = (event) => {
		const r = slideRef.current.getBoundingClientRect();
		slideRef.current.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)));
		slideRef.current.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)));
	};

	const handleMouseLeave = () => {
		slideRef.current.style.setProperty('--x', 0);
		slideRef.current.style.setProperty('--y', 0);
	};

	const imageLoaded = (event) => {
		event.target.style.opacity = 1;
	};

	let classNames = `${styles.slide}`;
	if (current === slide.index) classNames += ` ${styles.slideCurrent}`;
	else if (current - 1 === slide.index) classNames += ` ${styles.slidePrevious}`;
	else if (current + 1 === slide.index) classNames += ` ${styles.slideNext}`;

	return (
		<li
			ref={slideRef}
			className={classNames}
			onClick={() => handleSlideClick(slide.index)}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			<div className={styles.slideImageWrapper}>
				<img className={styles.slideImage} alt={slide.headline} src={slide.src} onLoad={imageLoaded} />
			</div>

			<article className={styles.slideContent}>
				<h2 className={styles.slideHeadline}>{slide.headline}</h2>
				<button className={`${styles.slideAction} ${styles.btn}`}>{slide.button}</button>
			</article>
		</li>
	);
};

const SliderControl = ({ type, title, handleClick }) => {
	return (
		<button className={`${styles.btn} ${styles[`btn${type}`]}`} title={title} onClick={handleClick}>
			 <svg className={`${styles.icon} ${type === 'Previous' ? styles.iconPrevious : ''}`} viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
		</button>
	);
};

const CarouselPage = () => {
	const [current, setCurrent] = useState(0);

	const handlePreviousClick = () => {
		setCurrent((current - 1 + slideData.length) % slideData.length);
	};

	const handleNextClick = () => {
		setCurrent((current + 1) % slideData.length);
	};

	const handleSlideClick = (index) => {
		setCurrent(index);
	};

	const wrapperTransform = {
		transform: `translateX(-${current * (100 / slideData.length)}%)`
	};

	return (
		<div className={styles.slider}>
			<ul className={styles.sliderWrapper} style={wrapperTransform}>
				{slideData.map((slide) => (
					<Slide key={slide.index} slide={slide} current={current} handleSlideClick={handleSlideClick} />
				))}
			</ul>

			<div className={styles.sliderControls}>
				<SliderControl type="Previous" title="Go to previous slide" handleClick={handlePreviousClick} />

				<SliderControl type="Next" title="Go to next slide" handleClick={handleNextClick} />
			</div>
		</div>
	);
};

export default CarouselPage;
