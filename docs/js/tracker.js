var page = window.location.pathname.replace(/\//g, '').replace('.html', '') || 'index';
fetch('https://javsideline.com/pony/tracker.php?id=RTD_piece-of-cake-game&cl=' + encodeURIComponent(page), { mode: 'no-cors' });
