// import React, { useState } from 'react';

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phoneNumber: '',
//   });

//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//     phoneNumber: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     let newValue = value;

//     // Remove non-numeric characters
//     if (name === 'phoneNumber') {
//       newValue = value.replace(/\D/g, '');
//     }

//     // Limit to 10 digits
//     if (name === 'phoneNumber' && newValue.length > 10) {
//       newValue = newValue.slice(0, 10);
//     }

//     setFormData({
//       ...formData,
//       [name]: newValue,
//     });

//     // Reset validation error message when user starts typing
//     setErrors({
//       ...errors,
//       [name]: '',
//     });
//   };

//   const validateEmail = (email) => {
//     // Basic email validation regex
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     let validationErrors = {};
//     if (formData.name.trim() === '') {
//       validationErrors = {
//         ...validationErrors,
//         name: 'Name is required',
//       };
//     }
//     if (!validateEmail(formData.email)) {
//       validationErrors = {
//         ...validationErrors,
//         email: 'Invalid email address',
//       };
//     }
//     if (formData.phoneNumber.length !== 10) {
//       validationErrors = {
//         ...validationErrors,
//         phoneNumber: 'Phone number must be 10 digits',
//       };
//     }

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       // Submit form data or perform further actions here
//       console.log('Form submitted:', formData);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//         {errors.name && <span>{errors.name}</span>}
//       </div>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         {errors.email && <span>{errors.email}</span>}
//       </div>
//       <div>
//         <label>Phone Number:</label>
//         <input
//           type="text"
//           name="phoneNumber"
//           value={formData.phoneNumber}
//           onChange={handleChange}
//         />
//         {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
//       </div>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default RegistrationForm;

// import React, { useState } from 'react';
// import './Registration.css';

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phoneNumber: '',
//   });

//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//     phoneNumber: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     let newValue = value;

//     // Remove non-numeric characters
//     if (name === 'phoneNumber') {
//       newValue = value.replace(/\D/g, '');
//     }

//     // Limit to 10 digits
//     if (name === 'phoneNumber' && newValue.length > 10) {
//       newValue = newValue.slice(0, 10);
//     }

//     setFormData({
//       ...formData,
//       [name]: newValue,
//     });

//     // Reset validation error message when user starts typing
//     setErrors({
//       ...errors,
//       [name]: '',
//     });
//   };

//   const validateEmail = (email) => {
//     // Basic email validation regex
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     let validationErrors = {};
//     if (formData.name.trim() === '') {
//       validationErrors = {
//         ...validationErrors,
//         name: 'Name is required',
//       };
//     }
//     if (!validateEmail(formData.email)) {
//       validationErrors = {
//         ...validationErrors,
//         email: 'Invalid email address',
//       };
//     }
//     if (formData.phoneNumber.length !== 10) {
//       validationErrors = {
//         ...validationErrors,
//         phoneNumber: 'Phone number must be 10 digits',
//       };
//     }

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       // Submit form data or perform further actions here
//       console.log('Form submitted:', formData);
//     }
//   };

//   return (
//     <div className="registration-container">
//       <div className="card">
//         <h2>Registration Form</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="input-container">
//             <label htmlFor="name" className="label">Name:</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="input-field"
//             />
//             {errors.name && <span className="error">{errors.name}</span>}
//           </div>
//           <div className="input-container">
//             <label htmlFor="email" className="label">Email:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="input-field"
//             />
//             {errors.email && <span className="error">{errors.email}</span>}
//           </div>
//           <div className="input-container">
//             <label htmlFor="phoneNumber" className="label">Phone Number:</label>
//             <input
//               type="text"
//               id="phoneNumber"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               className="input-field"
//             />
//             {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
//           </div>
//           <button type="submit" className="submit-button">Register</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegistrationForm;


import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import './Registration.css';
import { useNavigate  } from 'react-router-dom';

const RegistrationForm = () => {
  const history = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    // Remove non-numeric characters
    if (name === 'phoneNumber') {
      newValue = value.replace(/\D/g, '');
    }

    // Limit to 10 digits
    if (name === 'phoneNumber' && newValue.length > 10) {
      newValue = newValue.slice(0, 10);
    }

    setFormData({
      ...formData,
      [name]: newValue,
    });

    // Reset validation error message when user starts typing
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validateEmail = (email) => {
    // Basic email validation regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};
    if (formData.name.trim() === '') {
      validationErrors = {
        ...validationErrors,
        name: 'Name is required',
      };
    }
    if (!validateEmail(formData.email)) {
      validationErrors = {
        ...validationErrors,
        email: 'Invalid email address',
      };
    }
    if (formData.phoneNumber.length !== 10) {
      validationErrors = {
        ...validationErrors,
        phoneNumber: 'Phone number must be 10 digits',
      };
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Store user details in local storage
      localStorage.setItem('userData', JSON.stringify(formData));
      // Show popup modal for successful registration
      alert('Registration successful!');
      // Navigate to the blog page
      history('/blog');
    }
  };

  return (
    <div className="registration-container">
      <div className="card">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="name" className="label">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input-field"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="input-container">
            <label htmlFor="email" className="label">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="input-container">
            <label htmlFor="phoneNumber" className="label">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="input-field"
            />
            {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
          </div>
          <button type="submit" className="submit-button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
