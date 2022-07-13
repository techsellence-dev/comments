// /* 
//  * Simple editor component that takes placeholder text as a prop 
//  */
// import React from 'react';
// import PropTypes from 'prop-types'
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import "react-quill/dist/quill.bubble.css";
// import { ReactDOM } from 'react';
//  export default class Editor extends React.Component {
// 	constructor (props) {
// 	  super(props)
// 	  this.state = { editorHtml: '', theme: 'snow' }
// 	  this.handleChange = this.handleChange.bind(this)
// 	}
	
// 	handleChange (html) {
// 		this.setState({ editorHtml: html });
// 	}
	
// 	handleThemeChange (newTheme) {
// 	  if (newTheme === "core") newTheme = null;
// 	  this.setState({ theme: newTheme })
// 	}
	
// 	render () {
// 	  return (
// 		<div>
// 		  <ReactQuill 
// 			theme="bubble"
// 			onChange={this.handleChange}
// 			value={this.state.editorHtml}
// 			modules={Editor.modules}
// 			formats={Editor.formats}
// 			bounds={'.app'}
// 			placeholder={this.props.placeholder}
// 		   />
  
// 		 </div>
// 	   )
// 	}
//   }
  
//   /* 
//    * Quill modules to attach to editor
//    * See https://quilljs.com/docs/modules/ for complete options
//    */
//   Editor.modules = {
// 	toolbar: [
// 	  [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
// 	  [{size: []}],
// 	  ['bold', 'italic', 'underline', 'strike', 'blockquote'],
// 	  [{'list': 'ordered'}, {'list': 'bullet'}, 
// 	   {'indent': '-1'}, {'indent': '+1'}],
// 	  ['link', 'image', 'video'],
// 	  ['clean']
// 	],
// 	clipboard: {
// 	  // toggle to add extra line breaks when pasting HTML:
// 	  matchVisual: false,
// 	}
//   }
//   /* 
//    * Quill editor formats
//    * See https://quilljs.com/docs/formats/
//    */
//   Editor.formats = [
// 	'header', 'font', 'size',
// 	'bold', 'italic', 'underline', 'strike', 'blockquote',
// 	'list', 'bullet', 'indent',
// 	'link', 'image', 'video'
//   ]
  
//   /* 
//    * PropType validation
//    */
//   Editor.propTypes = {
// 	placeholder: PropTypes.string,
//   }
  
//   /* 
//    * Render component on page
//    */
//   ReactDOM.render(
// 	<Editor placeholder={'Write something...'}/>, 
// 	document.querySelector('.app')
//   )