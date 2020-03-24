import React from 'react';
import Form from "../../Templates/Form";
import Select from "../Forms/Select";
import Button from "../Forms/Button";
import Icon from "../Icons/Icon";
import CardItem from "../Cards/Card-Item";
import CONNECT_API from "../../Api/Config";
import {USER_TIMELINE} from "../../Api/Api-Urls";
import dateFilter from "../../Helpers/Date-Filter";
import Sorting from "../../Helpers/Sorting";
import Loader from "../../Templates/Loader";
import Options from "../../Helpers/Select-Options-Array";

class Filter extends React.PureComponent {
    state = {
        selectVal: 1,
        btnType: {
            like: true,
            retweet: false
        },
        selectOptions: Options,
        data: null,
        topTwoTweets: null
    };

    componentDidMount() {
        this.getData()
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        const {data, btnType} = this.state;
        const date = new Date();
        const select_from_date = date.setDate(date.getDate() - this.state.selectVal);
        const date_filter = dateFilter(data, select_from_date);
        const sort_array = Sorting(date_filter, btnType);
        const topTwoTweets = [];
        if (sort_array.length !== 0) {
            for (let i = 0; i < 2; i++)
                topTwoTweets.push(sort_array[i]);
            if (this.state.topTwoTweets === prevState.topTwoTweets)
                this.setState({topTwoTweets});
        } else this.setState({topTwoTweets: false});
    }

    getData = () => {
        CONNECT_API.get(USER_TIMELINE, {count: 100}, (err, data) => {
            this.setState({data});
        })
    };
    handleSelectChange = ({target}) => {
        this.setState({selectVal: target.value})
    };
    btnLikeClick = () => {
        this.setState({
            btnType: {
                like: true,
                retweet: false
            }
        })

    };
    btnRetweetClick = () => {
        this.setState({
            btnType: {
                like: false,
                retweet: true
            }
        })
    };

    render() {
        const {btnType, selectOptions, topTwoTweets} = this.state;
        return (
            <>
                <Form divClass={'mb-3'}>
                    <Select options={selectOptions} onChange={this.handleSelectChange}/>
                    <Button
                        btnClass={`like-btn btn-outline-info ${btnType.like && 'active-like'}`}
                        onClick={this.btnLikeClick}
                    >
                        <Icon iconClass={'heart'}/>
                    </Button>
                    <Button
                        btnClass={`retweet-btn btn-outline-info ${btnType.retweet && 'active-retweet'}`}
                        onClick={this.btnRetweetClick}
                    >
                        <Icon iconClass={'retweet'}/>
                    </Button>
                </Form>
                <Loader data={topTwoTweets}>
                    {(topTwoTweets) && topTwoTweets.map(item =>
                        <CardItem
                            articleClass={'w-100'}
                            key={item.id}
                            text={item.text}
                            date={item.created_at}
                        >
                            <Button btnClass={`px-1 ${(btnType.like) ? 'text-danger' : 'active-retweet'}`}>
                                <Icon iconClass={(btnType.like) ? 'heart' : 'retweet'}/>
                                <span className="px-1">
                                    {(btnType.like) ? item.favorite_count : item.retweet_count}
                                </span>
                            </Button>
                        </CardItem>
                    )}
                </Loader>
            </>
        );
    }
}

export default Filter;