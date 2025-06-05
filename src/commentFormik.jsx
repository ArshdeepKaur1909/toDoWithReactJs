//creating comment feature form using formik 
// STEP1 =  Install Formik by passing command { npm install formik } in component's folder
// STEP2 = Refer documentation on "https://formik.org/docs/tutorial#validation"

import { useFormik } from 'formik';

const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'Username is required';
   } else if (values.username.length > 15) {
     errors.username = 'Must be 15 characters or less';
   }
 
   if (!values.remarks) {
     errors.remarks = 'Remarks are required';
   }
   
   if (!values.rating) {
     errors.rating = 'Rating is required';
   }

   return errors;
};

function CommentFormik({addComment}){
  const formik = useFormik({
     initialValues: {
       username: '',
       remarks: '',
       rating: '',
     },
     validate,
     onSubmit: values => {
       addComment(values);
     },
   });

  return (
    <div className="form" >
    <h1>Give Comment!</h1>
    <form onSubmit={formik.handleSubmit} >
      <label htmlFor="username" >Enter Username: </label>
      <input onChange={formik.handleChange} id="username" placeholder="Enter username" name="username" type="text" value={formik.values.username}/>
      {formik.errors.username ? <div>{formik.errors.username}</div> : null}
      <br />
      <label htmlFor="remarks" >Add your Remarks: </label>
      <textarea onChange={formik.handleChange} name="remarks" value={formik.values.remarks} id="remarks" ></textarea>
      {formik.errors.remarks ? <div>{formik.errors.remarks}</div> : null}
      <br />
      <label htmlFor="rating" >Enter Rating: </label>
      <input onChange={formik.handleChange} id="rating" placeholder="Enter rating" name="rating" type="number" min={1} max={5} value={formik.values.rating}/>
      {formik.errors.rating ? <div>{formik.errors.rating}</div> : null}
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default CommentFormik