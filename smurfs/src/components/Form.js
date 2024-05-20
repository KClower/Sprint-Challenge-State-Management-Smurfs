import { useState } from "react";
import { connect } from "react-redux";
import { ColorRing } from "react-loader-spinner"
import { addSmurf } from "../Actions";

const Form = (props) => {

    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: ""
    })

    const handleChanges = (e) => {
        setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
    }

    const formSubmit = (e) => {
        e.preventDefault();
        props.addSmurf({ ...newSmurf, height: newSmurf.height + "cm" })
        setNewSmurf({
            name: "",
            age: "",
            height: ""
        })
    }


    const renderColorRing = () => {
        return (
            <ColorRing
                visible={true}
                height="10"
                width="20"
                ariaLabel="color-ring-loading"
                wrapperClass="color-ring-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
        );
    };

    return (
        <form onSubmit={formSubmit}>
            <label htmlFor='name'>
                Name:
                <input
                    type="text"
                    name='name'
                    value={newSmurf.name}
                    onChange={handleChanges}
                />
            </label>
            <label htmlFor='age'>
                Age:
                <input
                    type="text"
                    name="age"
                    value={newSmurf.age}
                    onChange={handleChanges}
                />
            </label>
            <label htmlFor='height'>
                Height:
                <input
                    type="text"
                    name="height"
                    value={newSmurf.height}
                    onChange={handleChanges}
                />
            </label>
            <button> {props.isLoading ? renderColorRing() : "Add Smurf"}</button>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, { addSmurf })(Form);