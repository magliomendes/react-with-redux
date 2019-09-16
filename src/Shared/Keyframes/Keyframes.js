
import { keyframes } from "styled-components";

export const LoadingRotation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(359deg);
    }
`;

export const Opacity = keyframes`
    from {
       opacity: 0;
    }
    to {
       opacity: 1;
    }
`;