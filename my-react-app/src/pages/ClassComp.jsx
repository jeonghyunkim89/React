import { Component } from "react";
import Title from "../components/Title";
import CommentList from "../components/classComponent/CommentList";

class MyComponent extends Component {
    render() {
        return (
            <>
                <Title value="My Component"/>
            </>
        )
    }
}

{/* == function MyComponent() {
    return (
        <>
            <Title value="My Component" />
        </>
    );
} */}

function ClassComp() {
    return (
        <>
            <Title value="Class Component"/>
            <MyComponent />

            <CommentList />
        </>
    )
}

export default ClassComp;