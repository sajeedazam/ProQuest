const getJobs = async () => {
  const res = await fetch('https://proquest-server.onrender.com/cart-list',
    {
      method: 'GET'
    });

  return res.json();
};

const getNotifs = async () => {
  const res = await fetch('https://proquest-server.onrender.com/job-list',
    {
      method: 'GET'
    });

  return res.json();
};

const addJobs = async (category, name, time, customerName, phone, price) => {
  const response = await fetch('https://proquest-server.onrender.com/cart-list', {
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
  const response = await fetch(`https://proquest-server.onrender.com/job-list/${itemId}`, {
    method: 'DELETE'
  });

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data && data.message ? data.message : 'Unknown error';
    throw new Error(errorMsg);
  }

  return data;
}

const deleteCart = async (itemId) => {
  const response = await fetch(`https://proquest-server.onrender.com/cart-list/${itemId}`, {
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
  const res = await fetch('https://proquest-server.onrender.com/transferred-accepts',
    {
      method: 'GET'
    });

  return res.json();
};

const getComplete = async () => {
  const res = await fetch('https://proquest-server.onrender.com/transferred-completes',
    {
      method: 'GET'
    });

  return res.json();
};

const transferData = async () => {
  try {
    const response = await fetch('https://proquest-server.onrender.com/transfer-data', {
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
    const response = await fetch(`https://proquest-server.onrender.com/transfer-completed-data/${jobId}`, {
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
    const response = await fetch(`https://proquest-server.onrender.com/transfer-accepted-data/${jobId}`, {
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
    const response = await fetch(`https://proquest-server.onrender.com/amount-earned`, {
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
  getAmount,
  deleteCart
}