import Student1 from "../data/Student1.png";
import Student2 from "../data/Student2.png";
import Student3 from "../data/Student3.png";
import Student4 from "../data/Student4.png";
import rect from "../data/Rectangle.svg";
import "../css/student.css";

const studentData = [
	{
		img: Student1,
		salary: "8,00,000",
	},
	{
		img: Student2,
		salary: "6,00,000",
	},
	{
		img: Student3,
		salary: "5,00,000",
	},
	{
		img: Student4,
		salary: "4,50,000",
	},
];

const Student = () => {
	return (
		<div>
			<h2 className="Student-title">Top Earner</h2>
			<p className="Student-content">Transformng your ideas</p>
			<p className="Student-content">into reality</p>
			<div className="Student-card-container">
				{studentData.map((student) => {
					return (
						<div className="Student-card">
							<img
								className="Student-img"
								src={student.img}
								alt="Student"
							/>
							<div className="Student-salary">
								<img
									className="rect-icon"
									src={rect}
									alt="icon"
								/>
								<p>
									&#8377;
									{student.salary}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Student;
