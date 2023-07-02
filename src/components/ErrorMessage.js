import React from "react";
import noResultsImage from "../images/no results image.jpg";

const ErrorMessage = ({ errorData: { error, message } }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
            }}
        >
            <div>
                <div>
                    <img
                        src={noResultsImage}
                        height={250}
                        width={500}
                        alt="Error"
                    />
                </div>

                <div
                    className="sorryNoResults"
                    style={{
                        textAlign: "center",
                        fontSize: "20px",
                        marginTop: "15px",
                    }}
                >
                    {error}
                </div>
                <div className="searchElse" style={{ textAlign: "center" }}>
                    {message}
                </div>
            </div>
        </div>
    );
};

export default ErrorMessage;
