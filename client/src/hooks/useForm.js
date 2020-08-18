const { useState } = require("react");

const useForm = (initialValue, cb) => {
    const [values, setValues] = useState(initialValue);
    
    const handleChanges = (e) => {
        console.log(e.target.name, e.target.value);
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        cb();
    };

    return [values, handleSubmit, handleChanges];
};

export default useForm;
