import Header from "./component/Header";
import Detail from "./component/Detail";
import Courses from "./component/Courses";
import Student from "./component/Student";
import Comment from "./component/Comment";

function App() {
	return (
		<div className="root">
			<Header />
			<Detail />
			<Courses />
			<Student />
			<Comment />
		</div>
	);
}

export default App;
