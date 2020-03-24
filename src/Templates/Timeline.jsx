import React from 'react';
import ButtonLoadTweets from "../Components/Forms/Button-Load-Tweets";
import CardItem from "../Components/Cards/Card-Item";
import Button from "../Components/Forms/Button";
import Icon from "../Components/Icons/Icon";
import CONNECT_API from "../Api/Config";
import {USER_TIMELINE} from "../Api/Api-Urls";
import Loader from "./Loader";

class Timeline extends React.PureComponent {
    state = {
        data: null,
        count: 4,
        skeletonLoad: true
    };

    componentDidMount() {
        this.getData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.count !== prevState.count)
            this.getData();
    }

    getData = () => {
        const {count, skeletonLoad} = this.state;
        CONNECT_API.get(USER_TIMELINE, {count}, (err, res) => {
            const arr_unShift = [];
            for (let i = 0; i < res.length; i++)
                arr_unShift.unshift(res[i]);
            this.setState({data: arr_unShift, skeletonLoad: false});
        });
    };
    onClick = () => {
        const {count, skeletonLoad} = this.state;
        this.setState({count: count + 4, skeletonLoad: true})
    };

    render() {
        const {data, skeletonLoad} = this.state;
        return (
            <div className="timeline col-lg-8 pt-3 h-100 order-1 order-lg-0 overflow-auto">
                <ButtonLoadTweets onClick={this.onClick} btnText={'Load New Tweets'}/>
                <Loader data={data}>
                    {data &&
                    <div className="row">
                        {data.map(item =>
                            <CardItem key={item.id} isLoad={skeletonLoad} articleClass={'col-lg-6 px-2 pb-3'} date={item.created_at}
                                      text={item.text}>
                                <Button btnClass={'like-btn px-1'}>
                                    <Icon iconClass={'heart'}/>
                                    <span className={'px-1'}>{item.favorite_count}</span>
                                </Button>
                                <Button btnClass={'retweet-btn px-1'}>
                                    <Icon iconClass={'retweet'}/>
                                    <span className={'px-1'}>{item.retweet_count}</span>
                                </Button>
                            </CardItem>
                        )}
                    </div>
                    }
                </Loader>
            </div>
        );
    }
}

export default Timeline;