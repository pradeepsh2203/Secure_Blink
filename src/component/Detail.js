import IMG from "../data/DetailsImage.webp";
import "../css/detail.css";

const Detail = () => {
	return (
		<>
			<div className="detail-container-grid">
				<div className="detail-content">
					<h1>
						AnyTime, anywhere Learn on your schedule from any device
					</h1>
					<p>
						We Believe everyone has the capcity to be creative
						<span className="color-white"> Course Pro</span> is a
						place where people develop their own potential
					</p>
					<div className="detail-button">Let's Get Start</div>
				</div>
				<div className="detail-image-container">
					<img
						className="detail-image"
						alt="Course Description"
						src={IMG}
					/>
				</div>
			</div>
			<div className="detail-brief">
				<div>
					<h3 className="brief-title">Total Students</h3>
					<p className="brief-num">5140</p>
				</div>
				<div>
					<h3 className="brief-title">Partners</h3>
					<p className="brief-num">4123</p>
				</div>
				<div>
					<h3 className="brief-title">Affiliate Distribution</h3>
					<p className="brief-num">4.18 Lac</p>
				</div>
			</div>
		</>
	);
};

export default Detail;
