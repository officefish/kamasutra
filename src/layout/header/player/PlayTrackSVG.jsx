import {ControlsLiner} from "../common/controlsLiner";
import {ControlsLayout} from "../common/controlsLayout";

export const PlayTrackSVG = () => {
    return <ControlsLiner>
        <ControlsLayout
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"
            stroke="currentColor"
        ><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
        </ControlsLayout>
    </ControlsLiner>
}