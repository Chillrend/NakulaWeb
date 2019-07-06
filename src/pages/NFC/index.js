import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/anim_json/nfc';

export default class NfcWait extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isStopped: false,
            isPaused: false
        };
    }

    render() {

        const lottieOption = {
            loop: true,
            autoplay: true,
            animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return (
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="content text-center">
                                    <Lottie options={lottieOption}
                                            width={400}
                                            height={400}
                                            isStopped={this.state.isStopped}
                                            isPaused={this.state.isPaused} />
                                    <div className="text-center">
                                        <h2>Tap Koin<br /><small>Tap Koin di NFC Reader</small> </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
