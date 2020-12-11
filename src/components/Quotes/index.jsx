import React, { useContext, useState, useEffect } from 'react';
import { NotificationContext } from '../shared/Notifications';
import { GlobalStoreContext } from '../shared/Globals';
import { UserContext } from '../Authentication/UserProvider';
import Axios from 'axios';
import Header from '../shared/Header';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Quotes = () => {
  const { setNotification } = useContext(NotificationContext);
  const { globalStore } = useContext(GlobalStoreContext);
  const { user } = useContext(UserContext);

  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/quotes`)
    .then(({ data }) => {
      setQuotes(data);
    })
    .catch(error => {
      setNotification({
        type: "danger",
        message: `There was an error retrieving the quotes: ${error.message}`
      });
    });
  }, [globalStore, setNotification]);

  return (
    <>
      <Header title="Quotes"/>

      <Container>
        {quotes && quotes.length > 0 ? (
          quotes.map((quote, i) => (
            <>
              <blockquote>
                {quote.date}: "{quote.quote}" ~ {quote.author}
              </blockquote>

              {user && user.token ? (
                <Link to={`/quotes/edit/${quote._id}`}>...edit...</Link>
              ) : null}
            </>
          ))
        ) : null}
      </Container>
    </>
  );
}
 
export default Quotes;