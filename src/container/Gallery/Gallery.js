import { useRef } from "react";
import { SubHeading } from "../../components";

import {
	BsArrowLeftShort,
	BsArrowRightShort,
	BsInstagram,
} from "react-icons/bs";
import {
	gallery01,
	gallery02,
	gallery03,
	gallery04,
} from "../../constants/images";

import "./Gallery.css";

const galleryImages = [gallery01, gallery02, gallery03, gallery04];

const Gallery = () => {
	const scrollRef = useRef(null);

	const scroll = (direction) => {
		const { current } = scrollRef;

		if (direction === "left") {
			current.scrollLeft -= 300;
		} else {
			current.scrollLeft += 300;
		}
	};

	return (
		<div className="app__gallery flex__center">
			<div className="app__gallery-content">
				<SubHeading title={"Intagram"} />
				<h2 className="headtext__cormorant">Photo Gallery</h2>
				<p className="p__opensans" style={{ color: "#AAA" }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
					mattis ipsum turpis elit elit scelerisque egestas mu.
				</p>
				<button className="custom__button">View More</button>
			</div>

			<div className="app__gallery-images">
				<div className="app__gallery-images_container" ref={scrollRef}>
					{galleryImages.map((image, index) => (
						<div
							className="app__gallery-images_card flex__center"
							key={`gallery_image-${index + 1}`}
						>
							<img src={image} alt="gallery img" />
							<BsInstagram className="gallery__image-icon" />
						</div>
					))}
				</div>
				<div className="app__gallery-images_arrow">
					<BsArrowLeftShort
						className="gallery__arrow-icon"
						onClick={() => scroll("left")}
					/>
					<BsArrowRightShort
						className="gallery__arrow-icon"
						onClick={() => scroll("right")}
					/>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
