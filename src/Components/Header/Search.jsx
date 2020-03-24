import React, { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import Input from '../Forms/Input';
import Form from '../../Templates/Form';
import Button from '../Forms/Button';
import Icon from '../Icons/Icon';
import CONNECT_API from '../../Api/Config';
import { SEARCH_TWEETS } from '../../Api/Api-Urls';

function Search() {
  const [isShow, dropdown] = useState(false);
  const [data, getData] = useState(null);
  const onchange = ({ target }) => {
    const query = target.value;
    CONNECT_API.get(SEARCH_TWEETS, { q: query }, (err, { statuses }) => {
      getData(statuses);
    });
  };
  const onFocus = () => {
    dropdown(true);
  };
  const onBlur = () => {
    dropdown(false);
  };
  return (
    <div className="search col-md my-2 my-md-0 px-md-2">
      <Form>
        <Input onFocus={onFocus} onBlur={onBlur} onChange={onchange} />
        <Button>
          <Icon iconClass="search-1" />
        </Button>
      </Form>
      <Dropdown display={isShow} results={data} />
    </div>
  );
}

export default Search;
