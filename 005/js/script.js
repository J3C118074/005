  $(document).ready(function() {
      $('.owl-carousel').owlCarousel({


          loop: true,
          items: 3,
          lazyLoad: true,

          margin: 5,
          stagePadding: 5,
          responsive: {
              0: {
                  items: 1
              },
              485: {
                  items: 2
              },
              728: {
                  items: 3
              },
              960: {
                  items: 3
              },
              1200: {
                  items: 3
              }
          }
      });
  });