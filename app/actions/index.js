//Import the sample data
import Topics from '../topics.json';

export const FETCH_TOPICS_LIST = 'FETCH_TOPICS_LIST';
export function fetchTopicsList() {
    return (dispatch) => {
        //Mock API Call to get topics list
        setTimeout(() => {
            var topics  = Topics.topics;
            dispatch({type: FETCH_TOPICS_LIST, topics});
        }, 2000);
    };
}
