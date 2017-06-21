
const defaultState = {
  signup: {
    first_name: "First name",
    last_name: "Last name",
    email: "Email",
    password: "New password",
    dob: "01/01/2001",
    gender: "Male"
  }
}

const FormReducer = (state = defaultState, action) => {
  return state;
};

export default FormReducer;
