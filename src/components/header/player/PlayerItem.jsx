import React from "react";
import {PlayerLayout} from "../../../layout/layout";
import PreviousTrackItem from "./PreviousTrackItem";
import PlayTrackItem from "./PlayTrackItem";
import NextTrackItem from "./NextTrackItem";
import TrackNameItem from "./TrackNameItem";

class PlayerItem extends React.Component {

    render() {
        return (
            <PlayerLayout>
                <PreviousTrackItem />
                <PlayTrackItem />
                <NextTrackItem />
                <TrackNameItem />
            </PlayerLayout>
        )
    }
}
export default PlayerItem