import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component{
	constructor(props,context){
		super(props,context);
		this.state = {
			course:{title:""}
		};
		this.onTitleChange = this.onTitleChange.bind(this);
		this.onClickSave = this.onClickSave.bind(this);
	}

	onTitleChange(event){
		const course = this.state.course;
		course.title = event.target.value;
		this.setState({course:course});

	}

	onClickSave(){
		this.props.dispatch(courseActions.createCourse(this.state.course));
		console.log(this.context.store.getState());
	}

	courseRow(course, index){
		return <div key={index}>{course.title}</div>;
	}

	render(){
		return(
			<div>
				<h1>Courses</h1>
				{this.props.courses.map(this.courseRow)}
				<h2>Add course</h2>
				<input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
				<input type="submit" onClick={this.onClickSave} value="Save" />
			</div>
		);
	}
}

function mapStateToProps(state,ownProps){
	return{
		courses: state.courses
	};
}

CoursesPage.propTypes = {
	dispatch: PropTypes.func.isRequired,
	courses: PropTypes.array.isRequired
};

//CoursesPage.contextTypes = { store: React.PropTypes.object };

export default connect(mapStateToProps)(CoursesPage);