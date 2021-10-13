import Header from "./component/Header";
import Detail from "./component/Detail";
import Courses from "./component/Courses";
import Student from "./component/Student";

function App() {
	return (
		<div className="root">
			<Header />
			<Detail />
			<Courses />
			<Student />
		</div>
	);
}

export default App;
