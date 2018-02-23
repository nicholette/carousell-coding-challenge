//Import the sample data

const seedTopics = [
    {
      name: "THE HOTTEST TOPIC IN TOWN",
      votes: 100
    },
    {
      name: "THE COLDEST TOPIC IN TOWN",
      votes: -100
    },
    {
      name: "Not too warm",
      votes: 50
    },
    {
      name: "Quite Cold",
      votes: -99
    },
  ];


export const FETCH_TOPICS_LIST = 'FETCH_TOPICS_LIST';
export function fetchTopicsList() {
    return (dispatch) => {
        //Mock API Call to get topics list
        setTimeout(() => {
            dispatch({type: FETCH_TOPICS_LIST, topics: seedTopics});
        }, 2000);
    };
}

export const ON_PRESS_VOTE = 'ON_PRESS_VOTE';
export function onPressVote(topicIndex, voteType) {
    return (dispatch) => {
      dispatch({
        type: ON_PRESS_VOTE,
        topicIndex,
        voteType
      });
    };
}
