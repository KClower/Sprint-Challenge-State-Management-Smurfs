import { useState } from "react";
import { connect } from "react-redux";
import { ColorRing } from "react-loader-spinner"

const Form = (props) => {

    const [findSmurf, setFindSmurf] = useState()

    const handleChanges = (e) => {
        setFindSmurf(e.target.value);
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
        <form>
            <input
                type="text"
                value={findSmurf}
                onChange={handleChanges}
            />
            <button> {props.isLoading ? renderColorRing() : "Add Smurf"}</button>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, {})(Form);