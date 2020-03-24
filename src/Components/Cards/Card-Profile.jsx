import React, {Fragment} from 'react';
import CONNECT_API from "../../Api/Config";
import {PROFILE_INFORMATION} from "../../Api/Api-Urls";
import Loader from "../../Templates/Loader";

class CardProfile extends React.PureComponent {
    state = {
        userData: null
    };

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        CONNECT_API.get(PROFILE_INFORMATION, (err, userData) => {
            this.setState({userData});
        })
    };

    render() {
        const {userData} = this.state;
        return (

            <Loader data={userData}>
                {userData &&
                <Fragment>
                    <div className="row align-items-center">
                        <div className="col-auto">
                            <img alt={'profile pic'} style={{height: '100px'}} className="img-thumbnail"
                                 src={userData.profile_image_url_https}/>
                        </div>
                        <div className="col-auto text-capitalize p-0">
                            <h5 className="h5 w-100 m-0 text-info">{userData.name}</h5>
                            <small
                                className="w-100 mb-2 font-weight-bold d-block text-danger">{userData.screen_name}</small>
                            <p className="w-100 m-0 text-info">Followed {userData.friends_count}</p>
                            <p className="w-100 m-0 text-info">Followers {userData.followers_count}</p>
                        </div>
                    </div>
                    <hr className=" w-50"/>
                </Fragment>
                }
            </Loader>

        );
    }
}

export default CardProfile;