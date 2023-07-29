const getJobs = async () => {
  const res = await fetch('http://localhost:5001/cart-list',
    {
      method: 'GET'
    });

  return res.json();
};

const getNotifs = async () => {
  const res = await fetch('http://localhost:5001/job-list',
    {
      method: 'GET'
    });

  return res.json();
};

const addJobs = async (category, name, time, customerName, phone, price) => {
  const response = await fetch('http://localhost:5001/cart-list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ category, name, time, customerName, phone, price })
  });

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data && data.message ? data.message : 'Unknown error';
    throw new Error(errorMsg)
  }

  return data;
};


const deleteJobs = async (itemId) => {
  const response = await fetch(`http://localhost:5001/job-list/${itemId}`, {
    method: 'DELETE'
  });

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data && data.message ? data.message : 'Unknown error';
    throw new Error(errorMsg);
  }

  return data;
}

const getAccepts = async () => {
  const res = await fetch('http://localhost:5001/transferred-accepts',
    {
      method: 'GET'
    });

  return res.json();
};

const getComplete = async () => {
  const res = await fetch('http://localhost:5001/transferred-completes',
    {
      method: 'GET'
    });

  return res.json();
};

const transferData = async () => {
  try {
    const response = await fetch('http://localhost:5001/transfer-data', {
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error('Transfer data failed');
    }

    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

const completedTransfer = async (jobId) => {
  try {
    const response = await fetch(`http://localhost:5001/transfer-completed-data/${jobId}`, {
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error('Transfer data failed');
    }

    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

const acceptTransfer = async (jobId) => {
  try {
    const response = await fetch(`http://localhost:5001/transfer-accepted-data/${jobId}`, {
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error('Transfer data failed');
    }

    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAmount = async () => {
  try {
    const response = await fetch(`http://localhost:5001/amount-earned`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('get data failed');
    }

    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }

};

export default {
  getJobs,
  addJobs,
  deleteJobs,
  transferData,
  getNotifs,
  acceptTransfer,
  getAccepts,
  completedTransfer,
  getComplete,
  getAmount
}
