import { useState, useEffect } from "react";

const Form = ({ data, addEmployee, editEmployee }) => {

    const [values, setValues] = useState("");
    const [updateFormButton, setUpdateFormButton] = useState(false);

    useEffect(() => {
        const p = {
            name: data.name,
            value: data.value,
        };
        setValues(p);
        console.log(p, p.name !== '', p.name)
        setUpdateFormButton(p.name !== "");

    }, [data]);

    const handleInput = (e) => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
        console.log(values);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        addEmployee();

    };

    const clearField = () => {
        const p = {
            name: "",
            value: "",
        };
        setValues(p);
        setUpdateFormButton(false);
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        editEmployee();
    }

    return (
        <div className="col-md-4 col-sm-12 container p-5 bg-light border rounded-3">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={values.name}
                        name="name"
                        onChange={handleInput}
                    />
                </div>

                <div
                    className="mb-3">
                    <label className="form-label">Value</label>
                    <input
                        className="form-control"
                        value={values.value}
                        onChange={handleInput}
                        name="value"
                    />
                </div>


                <div className="text-center mb-3">
                    {updateFormButton ?
                        <button className="btn btn-success">
                            Update
                        </button> : <button className="btn btn-success">
                            Create
                        </button>
                    }
                </div>

                <div className="text-center">
                    <button className="btn btn-danger" onClick={() => clearField()}>
                        Clear
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
