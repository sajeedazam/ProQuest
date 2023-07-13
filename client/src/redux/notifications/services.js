const getJobs = async () => {
    const res = await fetch('http://localhost:3001/job-list',
        {
            method: 'GET'
        });

    return res.json();
};

const addJobs = async ( category, name, time, customerName, phone ) => {
    const response = await fetch('http://localhost:3001/job-list', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ category, name, time, customerName, phone })
    });

    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data && data.message ? data.message : 'Unknown error';
        throw new Error(errorMsg)
    }

    return data;
};

export default {
    getJobs, 
    addJobs
}
