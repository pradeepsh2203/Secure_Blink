import Header from "./component/Header";
import Detail from "./component/Detail";
import Courses from "./component/Courses";
import Student from "./component/Student";
import Comment from "./component/Comment";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
	return (
		<div className="root">
			<Header />
			<Detail />
			<Courses />
			<Student />
			<Comment />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
