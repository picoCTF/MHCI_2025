interface BadgeSVGProps {
    shape: 1 | 2 | 3 | 4 | 5;
    color: 1 | 2 | 3 | 4 | 5;
    icon: string;
    title: string;
}

const BadgeSVG: React.FC<BadgeSVGProps> = ({ shape, color, icon, title }) => {

    let filledPathShape = "";
    let strokePathShape = "";

    switch (shape){
        case 1:
        {
            filledPathShape = "M154.773 0.958252H17.7894C8.39762 0.958252 0.86731 8.38547 0.86731 17.6486V137.068C0.86731 144.245 5.52087 150.587 12.3743 152.841L83.1931 176.541C85.2237 177.209 87.339 177.209 89.3696 176.541L160.188 152.841C167.042 150.587 171.695 144.245 171.695 137.068V17.6486C171.611 8.38547 164.081 0.958252 154.773 0.958252Z";
            strokePathShape = "M86.2384 172.952C84.8 172.952 83.3616 172.702 81.9232 172.285L13.812 149.502C8.39691 147.667 4.75867 142.659 4.75867 136.985V18.483C4.75867 11.2227 10.766 5.29761 18.1271 5.29761H154.519C161.88 5.29761 167.887 11.2227 167.887 18.483V136.985C167.887 142.659 164.249 147.667 158.834 149.502L90.5535 172.285C89.1151 172.786 87.6767 172.952 86.2384 172.952Z";
            break;
        }
        case 2:
        {
            filledPathShape = "M138.245 0C147.473 0 155 7.92688 155 17.6437V101.345C155 146.349 120.196 183 77.4595 183C34.8042 183 0 146.434 0 101.345V17.6437C0 7.92688 7.52742 0 16.7546 0H138.245Z";
            strokePathShape = "M15.5631 1.75024H135.516C143.205 1.75024 149.438 8.31336 149.438 16.4107V99.4298C149.438 142.388 116.333 177.25 75.5396 177.25C34.7458 177.25 1.6414 142.388 1.6414 99.4298V16.4959C1.56046 8.31336 7.79284 1.75024 15.5631 1.75024Z";
            break;
        }
        case 3:
        {
            break;
        }
        case 4:
        {
            break;
        }
        default: 
        {
            break;
        }
    }

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
        case 4:
        {
            break;
        }
        default: 
        {
            break;
        }
    }

    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="172" height="181" viewBox="0 0 172 181" fill="none">
                <g filter="url(#filter0_d_528_1978)">
                    <path d={filledPathShape} fill={fillColor}/>
                    <path d={strokePathShape} stroke={strokeColor} stroke-width="1.7054" stroke-miterlimit="10"/>
                </g>
                <defs>
                    <filter id="filter0_d_528_1978" x="-3.13269" y="0.958252" width="178.828" height="184.083" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_528_1978"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_528_1978" result="shape"/>
                    </filter>
                </defs>
            </svg>
            <h2>{title}</h2>
        </div>
    );
}

export default BadgeSVG;