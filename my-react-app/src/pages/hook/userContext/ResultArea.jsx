import { useContext } from "react";
import { ResultContext } from "./UseContextHook";

const ResultArea = ({data}) => {

    const ctx = useContext(ResultContext);

    return (
        <>
            {/* <h3>props로 전달된 데이터 : {data}</h3>

            <h3>context로 가져온 데이터 : {ctx}</h3> */}
            <h2>{ctx}</h2>
        </>
    )
}

export default ResultArea;