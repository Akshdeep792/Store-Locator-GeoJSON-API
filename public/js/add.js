const storeForm = document.getElementById('store-form');
const storeName = document.getElementById('store-id');
const storeAddress = document.getElementById('store-address');


async function addStore(e) {
  e.preventDefault();

  if (storeName.value === '' || storeAddress.value === '') {
    alert('Please fill in fields');
  }

  const sendBody = {
    storeName: storeName.value,
    address: storeAddress.value
  };

  try {
    const res = await fetch('/api/v1/stores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sendBody)
    });

    if (res.status === 400) {
      throw Error('Store already exists!');
    }

    alert('Store added!');
    window.location.href = '/index.html';
  } catch (err) {
    alert(err);
    return;
  }
}

storeForm.addEventListener('submit', addStore);
