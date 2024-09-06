import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, Form, FormFeedback, FormGroup, FormText, Input, Label } from "reactstrap";



export default function SignUp() {

const initialValues = {
    name: '',
    surname: '',
    email: '',
    password: ''
};

const errorMessages = {
    name: 'Name information must be at least 3 characters',
    surname: 'Surname information must be at least 3 characters',
    email: 'Please enter a valid e-mail information.',
    password: 'Must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 symbol and 1 number.'
}

const [formData, setFormData] = useState(initialValues);
const [errors, setErrors] = useState({
    name: false,
    surname: false,
    email: false,
    password: false
})

const [isValid, setIsValid] = useState(false); //butonu valid'e göre save ederiz.
const [id, setId] = useState(""); //response data'daki id ekranda göstereceğiz. 


const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  let regex = 
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/; 

useEffect(() =>{
if(formData.name.trim().length >=3 &&
formData.surname.trim().length >=3 &&
validateEmail(formData.email) &&
regex.test(formData.password)
) {
    setIsValid(true);
} else {
    setIsValid(false);
}
}, [formData]);





const HandleChange = (event) => {  //formdaki input alanında her değişiklik oldugunda tetiklenir. event: Kullanıcının formda yaptığı her eylemi yakalar.
    const {name, value} = event.target; // eventi aldıgımız zaman event.target değişen inputu verir. 
    setFormData ({...formData, [name]: value})
    if(name==="name" || name==="surname") {
    if(value.trim().length >=3) {
        setErrors({...errors, [name]: false})
    }   else setErrors({...errors, [name]: true})
    }

    if(name=="email") {
    if(validateEmail(value)) {
        setErrors({...errors, [name]: false})
    } else {
        setErrors({...errors, [name]: true})
    }
          
}
if(name=="password") {
    if (regex.test(value)) { 
        setErrors({...errors, [name]: false}) 
} else {
    setErrors({...errors, [name]: true})
}

}
}


const handleSubmit = (event) => {
    event.preventDefault(); //sayfanın baştan yüklenmesini engeller.
    if(!isValid) return;
    
    axios
    .post("https://reqres.in/api/users", formData)
    .then(response=> {
       // console.log(response); //id console'da görünür.
       setId(response.data.id)
       setFormData(initialValues) //formu temizleriz. 
})
.catch((error) => console.warn(error));

};

    return (
        <Card>
   <CardHeader>
    Sign Up
  </CardHeader>
            <CardBody>
        
        <Form onSubmit = {handleSubmit}>
  <FormGroup>
    <Label for="name">
      Name
    </Label>
    <Input
      id="name"
      name="name"
      placeholder="Enter your name"
      type="text"
      onChange={HandleChange}
      value={formData.name} // input alanında görünen değer, formData nesnesindeki name property'sine bağlıdır ve bu değeri kontrol eder. Formu doldurunca form datasını sıfırlamak lazım. O yüzden value degerini form datadaki name state'inden aldık. 
      invalid={errors.name}
      data-cy="name-input"
    />
     {errors.name && <FormFeedback data-cy="error-message"> {errorMessages.name} </FormFeedback>}
  </FormGroup>

  <FormGroup>
    <Label for="surname">
      Surname
    </Label>
    <Input
      id="surname"
      name="surname"
      placeholder="Enter your surname"
      type="text"
      onChange={HandleChange}
      value={formData.surname}
      invalid={errors.surname}
      data-cy="surname-input"
    />
    {errors.surname && <FormFeedback data-cy="error-message"> {errorMessages.surname} </FormFeedback>}
  </FormGroup>

  <FormGroup>
    <Label for="email">
      Email
    </Label>
    <Input
      id="email"
      name="email"
      placeholder="Enter your email"
      type="email"
      onChange={HandleChange}
      value={formData.email}
      invalid={errors.email}
      data-cy="email-input"
    />
     {errors.email && <FormFeedback data-cy="error-message"> {errorMessages.email} </FormFeedback>}
  </FormGroup>

  <FormGroup>
    <Label for="password">
      Password
    </Label>
    <Input
      id="password"
      name="password"
      placeholder="Enter your password"
      type="password"
      onChange={HandleChange}
      value={formData.password}
      invalid={errors.password}
      data-cy="password-input"
    />
    {errors.password && <FormFeedback data-cy="error-message"> {errorMessages.password} </FormFeedback>}
  </FormGroup>
  
 
  <Button disabled={!isValid} data-cy="submit-button">
    Submit
  </Button>
</Form>
</CardBody>
<CardFooter>
    ID:{id} 
</CardFooter>
</Card>
    )
}
