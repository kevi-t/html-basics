<script>
    // JavaScript to smooth scroll to the target section when clicking on a navigation link
    document.querySelectorAll('.navbar a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  </script>