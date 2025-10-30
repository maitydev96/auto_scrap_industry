<script>
  // handle form -> open whatsapp with prefilled message
  document.getElementById('quoteForm').addEventListener('submit', function(e){
    e.preventDefault();
    var name = encodeURIComponent(document.getElementById('name').value || '');
    var model = encodeURIComponent(document.getElementById('model').value || '');
    var fuel = encodeURIComponent(document.getElementById('fuel').value || '');
    var location = encodeURIComponent(document.getElementById('location').value || '');
    var message = encodeURIComponent(document.getElementById('message').value || '');

    var text = 'Hi Auto Scrap Industries,%0A' +
               'Name: ' + name + '%0A' +
               'Model & Year: ' + model + '%0A' +
               'Fuel: ' + fuel + '%0A' +
               'Location: ' + location + '%0A' +
               'Message: ' + message + '%0A' +
               '%0A' + 'Please share the scrap value and next steps.';

    var phone = '918700043378'; // India phone with country code
    var url = 'https://wa.me/' + phone + '?text=' + text;
    window.open(url, '_blank');
  });

  // scroll to quote section when clicking button
  document.getElementById('quoteBtn').addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('quote').scrollIntoView({behavior:'smooth', block:'center'});
  });
</script>
