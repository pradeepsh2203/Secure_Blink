import Card from "./Card";
import coursesData from "../data/CoursesData";
import "../css/courses.css";

const Courses = () => {
	return (
		<div className="courses-container mx-30 my-40">
			<p className="courses-tag">Courses</p>
			<h2 className="courses-heading">Our most popular courses</h2>
			<div className="courses-card-container">
				{coursesData.map((course) => {
					return <Card props={course} />;
				})}
			</div>
		</div>
	);
};

export default Courses;
