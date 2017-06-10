function autocomplete(input, latInput, lngInput) {
  console.log(input, latInput, lngInput); // skip this fn from running if there is no input on the page
  const dropdown = new google.maps.places.Autocomplete(input);

  dropdown.addListener('place_changed', () => {
    const place = dropdown.getPlace();
    latInput.value = place.geometry.location.lat();
    lngInput.value = place.geometry.location.lng();
  });

  // if someone hits enter on the address field, don't submit the form
  input.on('keydown', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  });
}

export default autocomplete;
