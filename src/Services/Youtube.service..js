
export const youtubeService = {
    fetchItems
};

function fetchItems(maxResults) {
    const playListId = "PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF";
    const apiKey = "AIzaSyDggm1Ko9LLIlI0iWY4X6IK0R72rv6T1W0";
    const results = maxResults ? maxResults : 5;

    return fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${results}&playlistId=${playListId}&key=${apiKey}`, {
        method: 'GET'
    }).then(handleResponse)
        .then((items) => {
            return items
        })
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                localStorage.removeItem('user');
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}