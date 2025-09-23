export interface BadgeSVGProps {
    shape: 1 | 2 | 3 | 4 | 5;
    color: 1 | 2 | 3 | 4 | 5;
    icon: string;
    id: string;
    title: string;
}

//The Badge SVGs that can be obtained by the user
const BadgeSVG: React.FC<BadgeSVGProps> = ({ shape, color, icon, title }) => {

    //Get the shape of the badge
    let backgroundFilledPathShape = "";
    let backgroundStrokePathShape = "";

    switch (shape){
        case 1:
        {
            backgroundFilledPathShape = "M153.16 0H16.84C7.49381 0 0 7.71896 0 17.346V141.456C0 148.915 4.63101 155.507 11.4512 157.848L81.9267 182.48C83.9475 183.173 86.0525 183.173 88.0733 182.48L158.549 157.848C165.369 155.507 170 148.915 170 141.456V17.346C169.916 7.71896 162.422 0 153.16 0Z";
            backgroundStrokePathShape = "M84.9577 178.75C83.5263 178.75 82.0949 178.49 80.6635 178.056L12.8825 154.379C7.49365 152.471 3.87305 147.267 3.87305 141.369V18.2131C3.87305 10.6676 9.85125 4.50977 17.1767 4.50977H152.907C160.233 4.50977 166.211 10.6676 166.211 18.2131V141.369C166.211 147.267 162.59 152.471 157.201 154.379L89.252 178.056C87.8205 178.577 86.3891 178.75 84.9577 178.75Z";
            break;
        }
        case 2:
        {
            backgroundFilledPathShape = "M138.245 0C147.473 0 155 7.92688 155 17.6437V101.345C155 146.349 120.196 183 77.4595 183C34.8042 183 0 146.434 0 101.345V17.6437C0 7.92688 7.52742 0 16.7546 0H138.245Z";
            backgroundStrokePathShape = "M15.5631 1.75024H135.516C143.205 1.75024 149.438 8.31336 149.438 16.4107V99.4298C149.438 142.388 116.333 177.25 75.5396 177.25C34.7458 177.25 1.6414 142.388 1.6414 99.4298V16.4959C1.56046 8.31336 7.79284 1.75024 15.5631 1.75024Z";
            break;
        }
        default: 
        {
            break;
        }
    }

    // Get the color of the background and stroke
    let fillColor = "";
    let strokeColor = "";

    switch (color) {
        case 1:
        {
            fillColor = "#A8E1B8";
            strokeColor = "#27723C";
            break;
        }
        case 2:
        {
            fillColor = "#F7B750";
            strokeColor = "#A5090B";
            break;
        }
        case 3:
        {
            fillColor = "#C9A9E9";
            strokeColor = "#481878";
            break;
        }
        default: 
        {
            break;
        }
    }

    //Layer the different parts of the badge image as an SVG
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="170" height="183" viewBox="0 0 170 183" fill="none">
                <g>
                    {/* Badge Background */}
                    <path d={backgroundFilledPathShape} fill={fillColor}/>
                    <path d={backgroundStrokePathShape} stroke={strokeColor} stroke-width="2" stroke-miterlimit="10"/>
                </g>
                <g>
                    {/* Badge Decoration */}
                </g>
                <g>
                    {/* Badge Symbol */}
                </g>
                {/* Etc */}
            </svg>
            <h2>{title}</h2>
        </div>
    );
}

export default BadgeSVG;