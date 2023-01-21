
const calculateWidth = (height) => {
    return (parseInt(height.slice(0, -2)) * 0.7).toFixed(0) + "px";
}

const calculateBorderRadius = (height) => {
    return (parseInt(height.slice(0, -2)) * 0.1).toFixed(0) + "px";
}

const calculateFontSize = (height) => {
    return (parseInt(height.slice(0, -2)) * 0.8).toFixed(0) + "px";
}

const calculateHalfHeight = (height, negativeProduct = false) => {
    if (!negativeProduct) return (parseInt(height.slice(0, -2)) * 0.5).toFixed(0) + "px";
    return (parseInt(height.slice(0, -2)) * 0.5 * -1).toFixed(0) + "px"
}

module.exports = {
    createStyles: (styleObject) => {
        return {
            flip_clock_box: {
                height: styleObject.height,
                width: calculateWidth(styleObject.height),
                borderRadius: calculateBorderRadius(styleObject.height),
                perspective: "200px",
                fontFamily: 'Modak',
                fontWeight: "bold",
                margin: "1% 0.5%",
            },
            flip_back: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: styleObject.height,
                width: calculateWidth(styleObject.height),
                fontSize: calculateFontSize(styleObject.height),
                borderRadius: calculateBorderRadius(styleObject.height),
                backgroundColor: styleObject.backgroundColor,
                color: styleObject.textColor,
            },
            flipper_top: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: styleObject.height,
                width: calculateWidth(styleObject.height),
                position: "absolute",
                top: 0,
                fontSize: calculateFontSize(styleObject.height),
                margin: 0,
                borderRadius: calculateBorderRadius(styleObject.height),
                backgroundColor: styleObject.backgroundColor,
                color: styleObject.textColor,
            },
            flipper_center: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: styleObject.height,
                width: calculateWidth(styleObject.height),
                position: "absolute",
                top: calculateHalfHeight(styleObject.height, true),
                fontSize: calculateFontSize(styleObject.height),
                margin: 0,
                borderRadius: calculateBorderRadius(styleObject.height),
                backgroundColor: styleObject.backgroundColor,
                color: styleObject.textColor,
            },
            flipper_bottom: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: styleObject.height,
                width: calculateWidth(styleObject.height),
                position: "absolute",
                top: calculateHalfHeight(styleObject.height, true),
                fontSize: calculateFontSize(styleObject.height),
                margin: 0,
                borderRadius: calculateBorderRadius(styleObject.height),
                backgroundColor: styleObject.backgroundColor,
                color: styleObject.textColor,
            },
            flipper_top_wrapper: {
                height: calculateHalfHeight(styleObject.height),
                width: calculateWidth(styleObject.height),
                position: "absolute",
                top: 0,
                overflow: "hidden",
            },
            flipper_center_wrapper: {
                height: calculateHalfHeight(styleObject.height),
                width: calculateWidth(styleObject.height),
                position: "absolute",
                top: calculateHalfHeight(styleObject.height),
                overflow: "hidden",
            },
            flipper_bottom_wrapper: {
                height: calculateHalfHeight(styleObject.height),
                width: calculateWidth(styleObject.height),
                position: "absolute",
                top: calculateHalfHeight(styleObject.height),
                overflow: "hidden",
            },
            flip_animation_top: {
                transform: "rotateX(0deg)",
                animationName: "animation-top",
                animationTimingFunction: "ease-in",
                animationDuration: "0.4s",
                animationDirection: "normal",
                animationFillMode: "forwards",
                /* animation-delay: 0.2s; */
                animationIterationCount: 1,
            },
            flip_animation_bottom: {
                transform: "rotateX(-90deg)",
                animationName: "animation-bottom",
                animationTimingFunction: "ease-in",
                animationDuration: "0.4s",
                animationDirection: "normal",
                animationFillMode: "forwards",
                /* animation-delay: 0.2s; */
                animationIterationCount: 1,
            }
        }
    }
}