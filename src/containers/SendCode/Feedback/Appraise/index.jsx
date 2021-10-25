import React from "react";
import FeedbackLoader from "components/Feedback/WithLoader";

const FeedbackAppraiseToken = () => {

    return (
        <FeedbackLoader 
            title="Aguardando análise"
            text="Estamos conferindo o token informado, leva só alguns instantes. ;)"
        />
    )

}

export default FeedbackAppraiseToken